#!/bin/bash

rm -rf build dist
mkdir -p build/prep/@babel

cp -r node_modules/core-js node_modules/regenerator-runtime build/prep
cp -r node_modules/@babel/runtime build/prep/@babel
./node_modules/.bin/babel --config-file ./.babelrc -d build/prep/@babel/runtime/helpers/ build/prep/@babel/runtime/helpers/esm/*
rm -r build/prep/@babel/runtime/helpers/esm
sed -i 's/..\/..\/helpers\/esm/..\/helpers/' build/prep/@babel/runtime/helpers/*
sed -i 's/helpers\/esm/helpers/' build/prep/@babel/runtime/helpers/*
sed -i 's/(0, _typeof4.default)(\([^)]*\))/typeof \1/g' build/prep/@babel/runtime/helpers/typeof.js
sed -i '1 s/^.*$/define(["exports"], function(_exports) {/g' build/prep/@babel/runtime/helpers/typeof.js

interopFiles=$(find  build/prep/@babel/runtime/helpers/ -type f -exec grep 'require("@babel/runtime/helpers/interopRequireDefault")\["default"\]' {} \; -exec echo {} \; | grep -v _interopRequireDefault)
for file in $interopFiles ; do
    # sed -i 's#^.*$#_interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault #g' 
    search='var\s*_interopRequireDefault\s*=\s*require("@babel/runtime/helpers/interopRequireDefault")\["default"\];';
    replace="_interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;";
    sed -i "s#${search}#${replace}#g" $file;

    # sed -i '1 s#^.*$#define(["exports", "./setPrototypeOf.js", "./isNativeReflectConstruct.js","./interopRequireDefault"], function (_exports, _setPrototypeOf, _isNativeReflectConstruct,_interopRequireDefault) {#g' build/prep/@babel/runtime/helpers/construct.js
    search='(\],\s*function\s*[^\)]+)';
    replace=',"./interopRequireDefault"\1, _interopRequireDefault';
    # replace=',"@babel/runtime/helpers//interopRequireDefault"\1, _interopRequireDefault';
    sed -i -r "s#${search}#${replace}#g" $file        
done;
# sed -i '1 s#^.*$#define(["exports", "./setPrototypeOf.js", "./isNativeReflectConstruct.js","./interopRequireDefault"], function (_exports, _setPrototypeOf, _isNativeReflectConstruct,_interopRequireDefault) {#g' build/prep/@babel/runtime/helpers/construct.js
# sed -i '4 s#^.*$#_interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault #g' build/prep/@babel/runtime/helpers/construct.js
# var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
# find build/prep/@babel/runtime/helpers/ -type f -exec sed -e 's#var\s*_interopRequireDefault\s*=\s*require("@babel/runtime/helpers/interopRequireDefault")\["default"\];#FUI#g' {} \; | grep FUI


sed -i 's/define\( \|(\)/define2\1/g' build/prep/core-js/modules/es6.regexp.to-string.js
./node_modules/requirejs/bin/r.js -convert build/prep/core-js build/amd/core-js
./node_modules/requirejs/bin/r.js -convert build/prep/@babel/runtime build/amd/@babel/runtime
mv build/amd/@babel/runtime/regenerator{/index.js,.js}
./node_modules/requirejs/bin/r.js -convert build/prep/regenerator-runtime build/amd/regenerator-runtime
mv build/amd/regenerator-runtime{/runtime-module.js,.js}
sed -i 's/".\/runtime"/".\/regenerator-runtime\/runtime"/' build/amd/regenerator-runtime.js

cat > build/amd/babel-polyfill.js << __EOF__
define(function(){
(function(global){
$(cat node_modules/babel-polyfill/lib/index.js)
})(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
})
__EOF__

node makeconfig7.js amd > build/r.amd.conf.js
./node_modules/requirejs/bin/r.js -o build/r.amd.conf.js

node makefiles.js

node makeconfig7.js dist > build/r.dist.conf.js
./node_modules/requirejs/bin/r.js -o build/r.dist.conf.js

./node_modules/uglify-js/bin/uglifyjs -c passes=2 build/dist/bundle.js > build/dist/bundle.min.js

cp -r build/dist dist7

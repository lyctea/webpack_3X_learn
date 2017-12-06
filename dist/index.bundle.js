webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

async function getComponent() {
    var element = document.createElement('div');
    const _ = await __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 1));

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});


/***/ })
],[0]);
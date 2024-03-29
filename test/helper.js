function appendCSS(fileObj){
    var  link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href='base/' + fileObj.path;
    document.body.appendChild(link)
}
function appendScript(fileObj){
    var  link = document.createElement('script');
    link.type = 'javascript';
    link.src='base/' + fileObj.path;
    document.body.appendChild(link)
}
function loadAssets(page){
    document.body.innerHTML = __html__['_site/' + (page || 'index') + '.html'];
    appendCSS({path: '_site/styles/demo.css'});
    appendCSS({path: '_site/styles/frayifier.css'});
    appendScript({path: '_site/scripts/' + page + '.js'});
}

module.exports = {
    loadAssets: loadAssets
};
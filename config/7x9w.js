// config/7x9w.js
(function() {
    fetch('config/8y3v.json')
        .then(r => r.json())
        .then(d => {
            window._0xabc.loaded = false;
            window._0xabc.username = decryptData(d.u);
            window._0xabc.password = decryptData(d.p);
            window._0xabc.loaded = true;
        });
})();

function decryptData(data) {
    return atob(data).split('').reverse().join('');
}

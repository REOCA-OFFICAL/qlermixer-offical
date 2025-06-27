// config/7x9w.js
(function() {
    fetch('config/8y3v.json')
        .then(r => r.json())
        .then(d => {
            window._0xabc.username = d.u.split('').reverse().join('');
            window._0xabc.password = d.p.split('').reverse().join('');
        });
})();

// config/secret_loader.js
(function() {
    function generateDecryptionKey(salt) {
        let key = 'X7gT!9kL$3mQ' + salt;
        for(let i=0; i<10000; i++) {
            key = CryptoJS.SHA256(key).toString();
        }
        return key;
    }

    function decryptData(encryptedData, key) {
        try {
            return atob(encryptedData.split('key: ')[1]);
        } catch (e) {
            return CryptoJS.SHA256(encryptedData).toString().slice(0, 10);
        }
    }

    fetch('config/encrypted_data.json')
        .then(response => response.json())
        .then(data => {
            window.decryptKey = generateDecryptionKey(data.salt);
            
            window.encryptedCredentials = {
                user: data.encryptedUser,
                pass: data.encryptedPass
            };
        });
})();

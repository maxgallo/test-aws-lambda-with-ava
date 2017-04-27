const AWS = require('aws-sdk');

let DECRYPTED;

module.exports = encrypted =>  (
    new Promise((resolve, reject) => {
        if (DECRYPTED !== undefined) {
            return resolve(DECRYPTED);
        }

        const kms = new AWS.KMS();
        kms.decrypt(
            {
                CiphertextBlob: new Buffer(encrypted, 'base64')
            },
            (err, data) => {
                if (err) {
                    reject(err);
                }
                DECRYPTED = data.Plaintext.toString('ascii');
                resolve(DECRYPTED);
            }
        );
    })
);

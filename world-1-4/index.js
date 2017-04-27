const getRandomNumber = require('./getRandomNumber');

exports.handler = (event, context, callback) => {
    setTimeout( () => {
        const randomNumber = getRandomNumber();
        callback(null, `Here's your number: ${randomNumber}`);
    }, 2000);
};

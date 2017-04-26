exports.handler = (event, context, callback) => {
    setTimeout( () => {
        callback(null, 'Hello from Lambda');
    }, 2000);
};

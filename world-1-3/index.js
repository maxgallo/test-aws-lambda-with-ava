exports.handler = (event, context, callback) => {
    setTimeout( () => {
        const error = new Error('Something went wrong');
        callback(error);
    }, 2000);
};

import test from 'ava';
import { handler } from './index';

const executeLambda = (event, context) => (
    new Promise((resolve, reject) => {
        handler(event, context, (err, response) => {
            if (err !== null) {
                return reject(err);
            }
            resolve(response);
        });
    })
);

test('Random Async Lambda is throwing an error', async t => {
    const event = {};
    const context = {};

    const response = await executeLambda(event, context);
    t.regex(response, /^Here's your number: [\d]\.[\d]+$/);
});

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

test('Async Lambda is returning `Hello` message', async t => {
    const event = {};
    const context = {};

    const response = await executeLambda(event, context);
    t.is(response, 'Hello from Lambda');
});

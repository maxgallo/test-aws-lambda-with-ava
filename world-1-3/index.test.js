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

test('Failing Async Lambda is throwing an error', async t => {
    const event = {};
    const context = {};

    const executePromise = executeLambda(event, context);
    const error = await t.throws(executePromise);
    t.is(error.message, 'Something went wrong');
});

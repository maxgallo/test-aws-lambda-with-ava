import test from 'ava';

import { handler } from './index';

test('Lambda is returning `Hello` message', t => {
    const event = {};
    const context = {};
    const callback = (err, message) => {
        t.is(message, 'Hello from Lambda');
    }
    handler(event, context, callback);
});

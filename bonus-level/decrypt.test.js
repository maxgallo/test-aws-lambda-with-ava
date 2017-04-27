import test from 'ava';
import AWS from 'aws-sdk-mock';
import decrypt from './decrypt';

const ENCRYPTED = 'AOURNGRPGNARPGAR';
const DECRYPTED = 'decrypted-var-123';

test.beforeEach(() => {
    AWS.mock('KMS', 'decrypt', { Plaintext : DECRYPTED });
});

test('Decrypting is returning mock value', async t => {
    const result = await decrypt(ENCRYPTED);
    t.is(result, DECRYPTED);
});

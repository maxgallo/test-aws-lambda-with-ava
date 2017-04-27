import test from 'ava';
import getRandomNumber from './getRandomNumber';

test('Random function returns different results', t => {
    const result1 = getRandomNumber();
    const result2 = getRandomNumber();

    t.not(result1, result2);
});

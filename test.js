const test = require('ava');

const f = require('./to-roman-numerals');

test('1', t => t.is(f(1), 'I'));
test('2', t => t.is(f(2), 'II'));
test('3', t => t.is(f(3), 'III'));
test('4', t => t.is(f(4), 'IV'));
test('5', t => t.is(f(5), 'V'));
test('6', t => t.is(f(6), 'VI'));
test('7', t => t.is(f(7), 'VII'));
test('8', t => t.is(f(8), 'VIII'));
test('9', t => t.is(f(9), 'IX'));

import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEmail, validateContactForm } from './validation';

test('validateEmail checks standard email patterns', () => {
  assert.equal(validateEmail('chaima@example.com'), true);
  assert.equal(validateEmail('test.dev+mern@domain.co'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('no-domain@'), false);
  assert.equal(validateEmail(''), false);
});

test('validateContactForm rejects empty required fields', () => {
  const result = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid complete payload', () => {
  const result = validateContactForm({
    name: 'Sarah Connor',
    email: 'sarah@skynet-defense.io',
    subject: 'MERN Stack Collaboration',
    message: 'Hello Chaima, I would love to talk about building a scalable web application together.',
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateContactForm enforces minimum message length', () => {
  const result = validateContactForm({
    name: 'Alex',
    email: 'alex@example.com',
    subject: 'Job Offer',
    message: 'Hi',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.message?.includes('at least 10 characters'));
});

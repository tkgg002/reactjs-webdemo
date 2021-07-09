/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
// import React from 'react';
import {
  cleanup,
} from '@testing-library/react';
import i18n from '../i18n';

afterEach(cleanup);

test('Checks to see if fallback language is norwegian', () => {
  expect(i18n.options.fallbackLng).toStrictEqual(['no']);
});

// test('Checks to see if translation of language works', () => {
//   expect(useTranslation()('language')).toStrictEqual('Velg språk');
// });

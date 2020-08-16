import 'react-native';
import { mock, release } from 'mock-async-storage'
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

mock()

import { AsyncStorage as storage } from 'react-native'

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});

it('Mock Async Storage working', async () => {
  await storage.setItem('myKey', 'myValue')
  const value = await storage.getItem('myKey')
  expect(value).toBe('myValue')
})
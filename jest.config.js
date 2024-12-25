module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-redux|redux-thunk)/)',
  ],
  // setupFiles: ['<rootDir>/jest.setup.js'], // Optional, if you have setup files
  testEnvironment: 'node',
};

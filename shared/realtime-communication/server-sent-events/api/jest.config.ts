/* eslint-disable */
export default {
  displayName: 'shared-realtime-communication-server-sent-events-api',
  preset: '../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../coverage/shared/realtime-communication/server-sent-events/api',
};

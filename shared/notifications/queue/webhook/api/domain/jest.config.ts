/* eslint-disable */
export default {
  displayName: 'shared-notifications-queue-webhook-api-domain',
  preset: '../../../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../../../coverage/shared/notifications/queue/webhook/api/domain',
};

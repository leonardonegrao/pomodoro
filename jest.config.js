module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    'node_modules',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/', // cypress will be added in the future
    '<rootDir>/dist/',
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.tsx'
  ],
  coverageDirectory: '<rootDir>/coverage',
  "moduleNameMapper": {
    "^@components/(.*)": "<rootDir>/src/components/$1",
    "^@theme/(.*)": "<rootDir>/src/theme/$1",
    "^@infra/(.*)": "<rootDir>/src/infra/$1",
    "^@shared/(.*)": "<rootDir>/src/shared/$1"
 }
};

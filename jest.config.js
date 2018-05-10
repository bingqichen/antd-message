module.exports = {
  modulePaths: [
    '<rootDir>/src/'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__test__/NullModule.js',
    '.*\\.(css|less|scss)$': '<rootDir>/__test__/NullModule.js'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  setupTestFrameworkScriptFile: '<rootDir>/__test__/setup.js',
  collectCoverage: true
};

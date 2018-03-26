const fs = require('fs');
const path = require('path');
const transformFileSync = require('babel-core').transformFileSync;

describe('babel-plugin-transform-pipe-operator', () => {
  const fixturesDir = path.join(__dirname, 'fixtures')

  fs.readdirSync(fixturesDir).forEach((caseName) => {
    test(caseName, (done) => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actualPath = path.join(fixtureDir, 'actual.jsx');
      const actual = transformFileSync(actualPath, {
        babelrc: false,
        plugins: [ path.resolve('./src/index.js') ],
      }).code;
      const expected = fs.readFileSync(path.join(fixtureDire, 'expected.jsx'));

      expect(actual.trim()).toEqual(expected)
    })
  })
})

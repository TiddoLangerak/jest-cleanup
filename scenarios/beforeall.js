const { teardown } = require('../index.js');
const { log } = require('./util.js');

describe('suite', () => {
  beforeAll(() => {
    log("Before all");
    teardown(() => log("Cleanup"));
  });
  test("test1", () => log("test 1"));
  test("test2", () => log("test 2"));
});

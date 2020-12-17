const { test } = require('@oclif/test');
const typedec = require('../..');

describe('typedec', () => {
  it('runs', () => {
    test
      .stdout()
      .do((ctx) => {
        typedec.run();
        expect(ctx.stdout).toContain('hello world');
      });
  });
});

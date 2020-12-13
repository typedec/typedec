const { Command, flags } = require('@oclif/command');

class TypedecCommand extends Command {
  async run() {
    const { flags: { name = 'world' } } = this.parse(TypedecCommand);
    this.log(`hello ${name} from ./src/index.js`);
  }
}

TypedecCommand.description = `Describe the command here
...
Extra documentation goes here
`;

TypedecCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: 'v' }),
  // add --help flag to show CLI version
  help: flags.help({ char: 'h' }),
  name: flags.string({ char: 'n', description: 'name to print' }),
};

module.exports = TypedecCommand;

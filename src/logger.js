const chalk = require('chalk');

class Logger {

    constructor() { }

    log(type, message) {
        console.log(chalk.white(`[${type}] - ${message}`));
    }

    success(message) {
        console.log(chalk.green(`[success] - ${message}`));
    }

    error(message) {
        console.log(chalk.red(`[error] - ${message}`));
    }

    warning(message) {
        console.log(chalk.yellow(`[warning] - ${message}`));
    }
}

module.exports = new Logger();
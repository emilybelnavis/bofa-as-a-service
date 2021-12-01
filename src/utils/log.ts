// @ts-ignore: peepee poopoo
import chalk from 'chalk';

let $ = 'BOFAaaS:';
const now = () => `[${new Date().toLocaleTimeString()}]`;

export default {
    info: (x: any) => console.info(chalk.green(chalk.bold(now()) + '[INFO]' + $), x),
    warn: (x: any)  => console.warn(chalk.yellow(chalk.bold(now() + '[WARN]' + $), x)),
    error: (x: any) => console.error(chalk.red(chalk.bold(now() + '[ERROR]' + $), x)),
    debug: (x: any) => console.info(chalk.cyanBright(chalk.bold(now() + '[DEBUG]' + $), x))
}
#! /usr/bin/env node
// 上面是配置当前的环境变量地址： mac上是固定的

console.log('hello!');
const commander = require('commander')
const pkgJson = require('../package.json')


const cli = require('./cli/entry')

// 命令选项
commander
    .version(pkgJson.version, '-v -V --version')
    .option('cli', '脚手架拉取内部模板')
    .parse(process.argv) // 解析命令行参数


const main = () => {
    if (commander.args.length === 0) { // 直接输入bs
        console.log(1);
    } else { // 输入 bs xx 的时候
        const cmd = commander.args[0]
        if (cmd === 'cli') {
            cli()
        }
    }
}

main()

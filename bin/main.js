#! /usr/bin/env node
// 上面是配置当前的环境变量地址： mac上是固定的

const { exec } = require('child_process');
const commander = require('commander')
const pkgJson = require('../package.json')
const path = require('path')

const cli = require('./cli/entry')
const autoApiAndMock = require('./autoApiAndMock/entry')
const genSwagger = require('./genSwagger/entry')

// 命令选项
commander
    .version(pkgJson.version, '-v -V --version')
    .option('cli', '脚手架拉取内部模板')
    .parse(process.argv) // 解析命令行参数


const main = () => {
    if (commander.args.length === 0) { // 直接输入bs
      const realPath = path.join(__dirname, 'main.js')
      // console.log(`node ${realPath} -h`)
      exec(`bs -h`, (err, stdout, stderr) => {
        if (err) console.error(Chalk.red(err))
        // console.log(realPath, 111)
        console.log(`欢迎使用bigdata命令工具, 使用示例: bd mock  \n${stdout}`)
      })
    } else { // 输入 bs xx 的时候
        const cmd = commander.args[0]
        if (cmd === 'cli') {
            cli()
        }
        if (cmd === 'api') {
          autoApiAndMock('api')
        }
        if (cmd === 'mock') {
          autoApiAndMock('mock')
        }
        if (cmd === 'api2') {
          genSwagger()
        }
    }
}

main()

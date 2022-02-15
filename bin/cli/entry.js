#! /usr/bin/env node
// 上面是配置当前的环境变量地址： mac上是固定的

const commander = require('commander')
const inquirer = require('inquirer')
const pkgJson = require('../../package.json')
const createProject = require('./create-project')
module.exports = () => {
    console.log('cli');

    // commander
    //     .version(pkgJson.version, '-v -V --version')
    //     // .usage('<template-name> [project-name]')
    //     .option('-i --init [name]', 'init a project')
    //     .parse(process.argv) // 解析命令行参数

    const promptList = [{
        type: 'input',
        message: '请输入您想创建的文件名 (会创建在当前目录下)：',
        name: 'name',
        default: 'bigdata-cli-project' // 默认值
    }]
    // console.log(commander.args);
    let projectName = ''
    inquirer.prompt(promptList).then(answers => {
        projectName = answers.name ? answers.name : 'bigdata-cli-project'
        console.log(projectName);
        createProject(projectName)
    })
}

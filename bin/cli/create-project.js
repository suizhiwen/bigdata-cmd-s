const chalk = require('chalk') // 彩色console.log
const path = require('path') // 获取路径
const inquirer = require('inquirer')

const GitClone = require('./git-clone.js')


const promptList = [{
    type: 'list',
    message: '请选择您想拉取的模板:',
    name: 'key',
    choices: [],
    filter: function (val) { // filter result
        return val
    }
}]

module.exports = function createProject (name) {
    GitClone.getRemote("https://gitlab.huolala.cn/group-da/bigdata-template.git")
        .then(res => {
            res.map(e => {
                promptList[0].choices.push(e.key) // 把git模板放入 promptList 中, 最后由inquirer执行
            })
            console.log(res);
            inquirer.prompt(promptList).then(answers => {
                const projectPath = path.resolve(name) // return absolute path
                console.log(`Start to init a project in ${chalk.green(projectPath)}`)

                const key = answers.key
                const obj = res.find(value => value.key === key)
                // 执行git clone
                GitClone.gitCloneFn(obj.git, name)
                    .then(msg => {
                        console.log(chalk.green(msg))
                    })
                    .catch(err => {
                        console.log(err);
                        if (err.includes && err.includes('128')) {
                            console.log(chalk.red(`失败! ${name}已经存在`))
                        } else {
                            console.log(chalk.red(err))
                        }
                    })
            })
        })
}

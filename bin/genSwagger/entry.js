const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const inquirer = require('inquirer')
const { httpGet, forEach } = require('../common/common')

async function main() {
  // const url = 'http://192.168.106.247:25000/v3/api-docs'
  const promptList = [{
    type: 'input',
    message: '请输入swagger地址，例如：http://192.168.106.247:25000',
    name: 'url',
    default: 'http://192.168.106.247:25000' // 默认值
  }]
  let answers = await inquirer.prompt(promptList)
  let fileStr = await getAllStr(answers.url)
  let target = path.join(path.resolve(process.cwd() + '/swagger.config.js'))
  fse.outputFileSync(target, fileStr)
}

async function getAllStr(url) {
  let comments = '/* 此文件根据swagger自动生成，生成后执行bs api自动生成对应请求方法 */'
  let suffix = /\/$/.test(url) ? '' : '/'
  url = `${url}${suffix}v3/api-docs`
  let res = await httpGet(url)
  let paths = JSON.parse(res.data).paths
  let apiStr = getApisStr(paths)
  let fileStr = `${comments}
module.exports = {
  apiAndMock: {
    config: {
      autoSwaggerApi: {${apiStr}
      }
    }
  }
}`
  return fileStr
}

function getApisStr(paths) {
  let str = ''
  forEach(paths, (url, value) => {
    let method = Object.keys(value)[0]
    let aipName = url.split('/').slice(2).join('_')
    str += `
        ${aipName}: {
          url: '${url}',
          method: '${method}'
        },`
  })
  return str
}

module.exports = main
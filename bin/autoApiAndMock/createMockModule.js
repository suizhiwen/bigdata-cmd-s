let fse = require('fs-extra')
let path = require('path')
let { forEach } = require('../common/common')

let comments = `/* 此文件自动生成，配置文件bs.config.js */`


function createMockModule (CONFIG) {
  let itemsStr = ''
  forEach(CONFIG.config, (apiModuleName, apiModule) => {
    forEach(apiModule, (apiName, apiOptions) => {
      itemsStr += getItemStr(apiName, apiOptions)
    })
  })

  let str = `export default (mock) => {${itemsStr} 
  }`

  fse.outputFileSync(path.join(process.cwd(), '/src/apis/mock.js'), str)
}

function getItemStr (apiName, apiOptions) {
  let method = 'on' + (apiOptions.method || 'get').replace(/^\S/, s => s.toUpperCase()) // post => onPost
  let itemStr = `
  mock.${method}('${apiOptions.url}').reply(200, {
    ret: 0,
    data: ${JSON.stringify(apiOptions.data)},
    msg: 'ok'
  })
`

  return itemStr
}

module.exports = createMockModule
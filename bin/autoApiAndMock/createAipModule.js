let fse = require('fs-extra')
let path = require('path')
let { forEach } = require('../common/common')

let comments = `/* 此文件自动生成，配置文件bs.config.js */`


function createApiModule(CONFIG) {
  forEach(CONFIG.config, (apiModuleName, apiModule) => {
    let target = path.join(process.cwd(), `/src/apis/${apiModuleName}.js`)
    let str = getModuleStr(apiModule)
    fse.outputFileSync(target, str)
  })
}

function getModuleStr (apiModule) {
  let str = `${comments}
import { Message } from 'view-design'
import axios from './index.js'
`
  forEach(apiModule, (apiName, apiOptions) => {
    str += getApiItemStr(apiName, apiOptions)
  })
  return str
}

function getApiItemStr(apiName, apiOptions) {
  let dataName = apiOptions.method === 'get'? 'params':'data'
  let objStr = ''
  forEach(apiOptions, (key, value) => {
    if(key != 'data') {
      objStr += `${key}: ${JSON.stringify(value)}, `
    }
  })
  objStr += dataName
  let str = `
export const ${apiName} = (${dataName}) => {
  return new Promise((resolve) => {
    axios({
      ${objStr}
    }).then(res => {
      if (res.ret === 0) {
        resolve(res.data)
      } else {
        Message.error(res.msg)
      }
    })
  })
}`

  return str
}

module.exports = createApiModule
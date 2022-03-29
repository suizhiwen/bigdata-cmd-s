let fse = require('fs-extra')
let path = require('path')
let { getConfig } =  require('../common/common.js')
let createApiModule = require('./createAipModule')
let createAxiosInstanceFile = require('./createAxiosInstanceFile')
let createMockAxiosInstanceFile = require('./createMockAxiosInstanceFile')
let createMockModule = require('./createMockModule')
let comments = `/* 此文件自动生成，配置文件bs.config.js */`



 
module.exports = (moduleName) => {
  const CONFIG = getConfig(moduleName)

  if(moduleName === 'api') {
    createAxiosInstanceFile(CONFIG)
  } else if(moduleName === 'mock') {
    createMockAxiosInstanceFile(CONFIG)
    createMockModule(CONFIG)
  }

  createApiModule(CONFIG) // mock和api模式下都创建相同的api模块
}
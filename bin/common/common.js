let Chalk = require('chalk')
let path = require('path')
let http = require('http')
let fs = require('fs')

const getConfig = (moduleName) => {
  let configPath = path.resolve(process.cwd(), './bs.config.js')
  const config = require(configPath)
  console.log(Chalk.green('成功读取配置文件bs.config.js'))
  if (moduleName === 'api' || moduleName === 'mock') {
    let autoSwaggerApiPath = path.resolve(process.cwd(), './swagger.config.js')

    if (fs.existsSync(autoSwaggerApiPath)) {
      console.log(require(autoSwaggerApiPath))
      let autoSwaggerApi = require(autoSwaggerApiPath).apiAndMock.config.autoSwaggerApi
      config.apiAndMock.config.autoSwaggerApi = autoSwaggerApi
      return config['apiAndMock']
    }
    return config['apiAndMock']
  } else {
    return config[moduleName]
  }
}

const forEach = (obj, callback) => {
  Object.keys(obj).forEach((key) => {
    callback(key, obj[key])
  })
}

const httpGet = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      res.setEncoding('utf-8');
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          data
        })
      })
    })
  })
}

module.exports = {
  getConfig,
  forEach,
  httpGet
}
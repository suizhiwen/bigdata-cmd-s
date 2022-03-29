let fse = require('fs-extra')
let path = require('path')


function createAxiosInstanceFile(CONFIG) {
  let comments = `/* 此文件自动生成，配置文件bs.config.js */`

  let indexTpl = `import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockInit from './mock.js'

const mock = new MockAdapter(axios)

mockInit(mock)

export default (obj) => {
  return new Promise((resolve, reject) => {
    axios(obj)
      .then(e => {
        resolve(e && e.data)
      })
      .catch(err => {
        console.error('接口返回错误: ' + JSON.stringify(err))
        reject(err)
      })
  })
}
`
  
  let str = `${comments}
${indexTpl}`

  let target = path.join(process.cwd(), '/src/apis/index.js')
  fse.outputFileSync(target, str)
}

module.exports = createAxiosInstanceFile
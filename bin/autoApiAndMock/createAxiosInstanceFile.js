let fse = require('fs-extra')
let path = require('path')

let comments = `/* 此文件自动生成，配置文件bs.config.js */`

function createAxiosInstanceFile(CONFIG) {

  let indexTpl = `export default (obj) => {
  return new Promise((resolve, reject) => {
    instance.service(obj)
      .then(e => {
        resolve(e && e.data)
      })
      .catch(err => {
        console.error('接口返回错误: ' + JSON.stringify(err))
        reject(err)
      })
  })
}`
  
  let entryHeader = CONFIG.entryHeader || "import instance from '@/axios/index.js'"
  let str = `${comments}
${entryHeader}
${indexTpl}`
  let target = path.join(process.cwd(), '/src/apis/index.js')
  fse.outputFileSync(target, str)
}

module.exports = createAxiosInstanceFile
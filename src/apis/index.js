/* 此文件自动生成，配置文件bs.config.js */
import instance from '@/axios/index.js'
export default (obj) => {
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
}
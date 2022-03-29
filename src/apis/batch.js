/* 此文件自动生成，配置文件bs.config.js */
import { Message } from 'view-design'
import axios from './index.js'

export const list_config_cities = (data) => {
  return new Promise((resolve) => {
    axios({
      url: "/dip/notification/list_config_cities", method: "post", data
    }).then(res => {
      if (res.ret === 0) {
        resolve(res.data)
      } else {
        Message.error(res.msg)
      }
    })
  })
}
export const a = (params) => {
  return new Promise((resolve) => {
    axios({
      url: "/a", method: "get", params
    }).then(res => {
      if (res.ret === 0) {
        resolve(res.data)
      } else {
        Message.error(res.msg)
      }
    })
  })
}
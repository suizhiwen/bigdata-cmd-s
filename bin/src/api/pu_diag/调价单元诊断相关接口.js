import { post } from '@/utils/request'

// 请求上线切分批次
export function query(data, cb, errHandle) {
  return post('/dip/pu_diag/generate_online_batch/query', data, cb, errHandle)
}

// 生成上线切分批次
export function v2(data, cb, errHandle) {
  return post('/dip/pu_diag/generate_online_batch/v2', data, cb, errHandle)
}

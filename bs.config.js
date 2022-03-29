module.exports = {
  route: {
    cityConfig: { parent: 'cityConfig' },
    cellConfig: { parent: 'cellConfig' }
  },
  routes: {
    
  },
  apiAndMock: {
    entryHeader: "import instance from '@/axios/index.js'",
    entryMyInstance: 'instance.service', // 使用者可以传入自己封装的 axios 的实例, 不写的话,默认用axios
    config: {
      batch: {
        list_config_cities: {
          url: '/dip/notification/list_config_cities',
          method: 'post'
        },
        a: {
          url: '/a',
          method: 'get'
        }
      }
    }
  }
}

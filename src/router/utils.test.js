import * as utils from './utils'

jest.mock('./routes', () => ({
  routes: [{
    name: 'home',
    path: '/',
    children: [{
      name: 'home.t1',
      path: 't1',
    },{
      name: 'home.t2',
      path: 't2',
      children: [{
        name: 'home.t2.t1',
        path: 't1',
      }],
    },{
      name: 'home.t3',
      path: 't3',
    }],
  }],
}))

describe('Router > routes', () => {
  describe('#allRouteNames', () => {
    it.only('return all route names', () => {
      expect(utils.allRouteNames()).toEqual([
        'home',
        'home.t1',
        'home.t2',
        'home.t2.t1',
        'home.t3',
      ])
    })
  })
})

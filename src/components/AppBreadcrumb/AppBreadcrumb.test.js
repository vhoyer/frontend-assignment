import AppBreadcrumb from './AppBreadcrumb.vue'
import VueRouter from 'vue-router'
import { mount, createLocalVue } from '@vue/test-utils'
import {routes} from 'Router/routes'
import UILink from 'UI/UILink'

jest.mock('Router/routes', () => ({
  routes: [{
    meta: { label: 'Home' },
    name: 'home',
    path: '/',
    children: [{
      path: 'company',
      children: [{
        meta: { label: 'Company Page' },
        name: 'home.company',
        path: '',
      },{
        meta: { label: 'Company Data' },
        name: 'home.company.data',
        path: 'data',
        children: [{
          meta: { label: 'Test 1' },
          name: 'home.company.data.test1',
          path: 'test1',
        }],
      }],
    },{
      meta: { label: 'Dashboard' },
      name: 'home.dashboard',
      path: 'dashboard',
    }],
  }],
}))

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter({
  routes,
})

describe('Components > AppBreadcrumb', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppBreadcrumb, {
      localVue,
      router,
    })
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('shows the bread crumb for the current page', () => {
    expect(wrapper.findAll('.test-item').length).toBe(1)
    expect(wrapper.findAll('.test-item').at(0).text()).toMatch('Home')
  })

  it('display every item as a link but the last', () => {
    expect(wrapper.findAll('.test-item').length).toBe(1)
    expect(wrapper.findAll('.test-item').at(0).is(UILink)).toBe(false)
  })

  describe('when the page changes', () => {
    beforeEach(() => {
      router.push({ name: 'home.company' }).catch(() => {})
    })

    it('shows the bread crumb for the new page', () => {
      expect(wrapper.findAll('.test-item').length).toBe(2)
      expect(wrapper.findAll('.test-item').at(0).text()).toMatch('Home')
      expect(wrapper.findAll('.test-item').at(1).text()).toMatch('Company Page')
    })

    it('display every item as a link but the last', () => {
      expect(wrapper.findAll('.test-item').length).toBe(2)
      expect(wrapper.findAll('.test-item').at(0).is(UILink)).toBe(true)
      expect(wrapper.findAll('.test-item').at(1).is(UILink)).toBe(false)
    })

    it('renders links with the page path', () => {
      expect(wrapper.findAll('.test-item').length).toBe(2)
      expect(wrapper.findAll('.test-item').at(0).attributes('href')).toBe('#/')
    })
  })

  describe('when the page changes to one with no children', () => {
    beforeEach(() => {
      router.push({ name: 'home.dashboard' }).catch(() => {})
    })

    it('shows the bread crumb for the new page', () => {
      expect(wrapper.findAll('.test-item').length).toBe(2)
      expect(wrapper.findAll('.test-item').at(0).text()).toMatch('Home')
      expect(wrapper.findAll('.test-item').at(1).text()).toMatch('Dashboard')
    })

    it('display every item as a link but the last', () => {
      expect(wrapper.findAll('.test-item').length).toBe(2)
      expect(wrapper.findAll('.test-item').at(0).is(UILink)).toBe(true)
      expect(wrapper.findAll('.test-item').at(1).is(UILink)).toBe(false)
    })

    it('renders links with the page path', () => {
      expect(wrapper.findAll('.test-item').length).toBe(2)
      expect(wrapper.findAll('.test-item').at(0).attributes('href')).toBe('#/')
    })
  })

  describe('when the page changes to one children of a child', () => {
    beforeEach(() => {
      router.push({ name: 'home.company.data' }).catch(() => {})
    })

    it('shows the bread crumb for the new page', () => {
      expect(wrapper.findAll('.test-item').length).toBe(2)
      expect(wrapper.findAll('.test-item').at(0).text()).toMatch('Home')
      expect(wrapper.findAll('.test-item').at(1).text()).toMatch('Company Data')
    })

    it('display every item as a link but the last', () => {
      expect(wrapper.findAll('.test-item').length).toBe(2)
      expect(wrapper.findAll('.test-item').at(0).is(UILink)).toBe(true)
      expect(wrapper.findAll('.test-item').at(1).is(UILink)).toBe(false)
    })
  })

  describe('when the page changes to one children of a child of a child', () => {
    beforeEach(() => {
      router.push({ name: 'home.company.data.test1' }).catch(() => {})
    })

    it('shows the bread crumb for the new page', () => {
      expect(wrapper.findAll('.test-item').length).toBe(3)
      expect(wrapper.findAll('.test-item').at(0).text()).toMatch('Home')
      expect(wrapper.findAll('.test-item').at(1).text()).toMatch('Company Data')
      expect(wrapper.findAll('.test-item').at(2).text()).toMatch('Test 1')
    })

    it('display every item as a link but the last', () => {
      expect(wrapper.findAll('.test-item').length).toBe(3)
      expect(wrapper.findAll('.test-item').at(0).is(UILink)).toBe(true)
      expect(wrapper.findAll('.test-item').at(1).is(UILink)).toBe(true)
      expect(wrapper.findAll('.test-item').at(2).is(UILink)).toBe(false)
    })
  })
})

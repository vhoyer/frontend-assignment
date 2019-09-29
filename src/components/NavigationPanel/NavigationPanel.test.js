import NavigationPanel from './NavigationPanel.vue'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { routes } from 'Router/routes'

jest.mock('Router/routes', () => ({
  routes: [{
    path: '/',
    children: [{
      name: 'home.item0',
      path: '',
      meta: { label: 'Item 0' },
    },{
      name: 'home.item1',
      path: 'item1',
      meta: { label: 'Item 1' },
    },{
      name: 'home.item2',
      path: 'item2',
      meta: { label: 'Item 2' },
    }],
  }],
}))

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter({
  routes,
})

describe('Components > NavigationPanel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(NavigationPanel, {
      localVue,
      router,
      propsData: {
        forSibilingsOfRoute: 'home.item1',
      },
    })
    router.push({ name: 'home.item0' }).catch(() => {})
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders the list passed to it', () => {
    expect(wrapper.findAll('.test-item').length).toBe(3)
    expect(wrapper.findAll('.test-item').at(0).text()).toMatch('Item 0')
    expect(wrapper.findAll('.test-item').at(1).text()).toMatch('Item 1')
    expect(wrapper.findAll('.test-item').at(2).text()).toMatch('Item 2')
  })
})

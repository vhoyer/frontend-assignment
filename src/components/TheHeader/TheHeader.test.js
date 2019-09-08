import TheHeader from './TheHeader.vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

describe('Components > TheHeader', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TheHeader, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    })
  })

  it('is a a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('display a company link', () => {
    expect(wrapper.find('.test-company-link').exists()).toBe(true)
  })

  it('display a home link', () => {
    expect(wrapper.find('.test-home-link').exists()).toBe(true)
  })
})

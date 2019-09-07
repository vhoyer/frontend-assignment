import TheHeader from './TheHeader.vue'
import { shallowMount } from '@vue/test-utils'

describe('Components > TheHeader', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TheHeader)
  })

  it('is a a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})

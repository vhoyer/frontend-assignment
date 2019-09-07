import TheFooter from './TheFooter.vue'
import { shallowMount } from '@vue/test-utils'

describe('Components > TheFooter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TheFooter)
  })

  it('is a a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})

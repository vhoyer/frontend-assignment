import TheFooter from './TheFooter.vue'
import { mount } from '@vue/test-utils'

describe('Components > TheFooter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheFooter)
  })

  it('is a a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})

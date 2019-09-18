import { mount } from '@vue/test-utils'
import UIInput from './UIInput.vue'

describe('UI > UIInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UIInput)
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})

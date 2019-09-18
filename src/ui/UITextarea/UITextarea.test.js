import { mount } from '@vue/test-utils'
import UITextarea from './UITextarea.vue'

describe('UI > UITextarea', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UITextarea)
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})

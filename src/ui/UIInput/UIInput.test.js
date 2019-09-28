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

  describe('when error is passed with true', () => {
    beforeEach(() => {
      wrapper.setProps({
        error: true,
      })
    })

    it('renders the right classes', () => {
      expect(wrapper.attributes('class')).toBe('ui-input ui-input--error')
    })
  })
})

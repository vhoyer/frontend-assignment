import { shallowMount } from '@vue/test-utils'
import UIInput from './UIInput.vue'

describe('UI > UIInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UIInput)
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})

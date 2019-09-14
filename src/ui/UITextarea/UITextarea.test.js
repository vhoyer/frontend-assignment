import { shallowMount } from '@vue/test-utils'
import UITextarea from './UITextarea.vue'

describe('UI > UITextarea', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UITextarea)
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})

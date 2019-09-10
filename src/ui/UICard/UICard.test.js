import UICard from './UICard.vue'
import { shallowMount } from '@vue/test-utils'

describe('UI > UICard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UICard, {
      slots: {
        default: 'my wonderful batman content',
      },
    })
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders content passed to it', () => {
    expect(wrapper.text()).toMatch('my wonderful batman content')
  })
})

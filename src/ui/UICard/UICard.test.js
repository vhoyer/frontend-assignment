import UICard from './UICard.vue'
import { mount } from '@vue/test-utils'

describe('UI > UICard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UICard, {
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

  it('renders only the base classes', () => {
    expect(wrapper.attributes('class')).toBe('ui-card')
  })

  describe('when a padding is passed to it', () => {
    beforeEach(() => {
      wrapper.setProps({
        padding: 'medium',
      })
    })

    it('renders the right classes', () => {
      expect(wrapper.attributes('class')).toBe('ui-card ui-card--medium')
    })
  })
})

import UIText from './UIText.vue'
import { shallowMount } from '@vue/test-utils'

describe('UI > UIText', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UIText, {
      slots: {
        default: 'Why all my mock texts talk about batman?',
      },
    })
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('render a span by default', () => {
    expect(wrapper.is('span')).toBe(true)
  })

  it('renders the text passed in the default slot', () => {
    expect(wrapper.text()).toBe('Why all my mock texts talk about batman?')
  })

  describe('when a tag prop is passed', () => {
    beforeEach(() => {
      wrapper.setProps({
        tag: 'strong',
      })
    })

    it('renders the passed tag instead', () => {
      expect(wrapper.is('strong')).toBe(true)
    })
  })
})

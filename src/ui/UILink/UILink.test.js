import UILink from './UILink.vue'
import { shallowMount } from '@vue/test-utils'

describe('UI > UILink', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UILink, {
      slots: {
        default: 'Why all my mock texts talk about batman?',
      },
    })
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('render an anchor by default', () => {
    expect(wrapper.is('a')).toBe(true)
  })

  it('renders the text passed in the default slot', () => {
    expect(wrapper.text()).toBe('Why all my mock texts talk about batman?')
  })

  describe('when user clicks on it', () => {
    beforeEach(() => {
      wrapper.trigger('click')
    })

    it('emits a click event', () => {
      expect(wrapper.emitted('click')).toBeTruthy()
    })
  })

  describe('when a random prop is passed to it', () => {
    beforeEach(() => {
      wrapper.setProps({
        'aria-label': 'Does this help?',
      })
    })

    it('renders that prop into the result element', () => {
      expect(wrapper.attributes('aria-label')).toBe('Does this help?')
    })
  })

  describe('when a tag prop is passed', () => {
    beforeEach(() => {
      wrapper.setProps({
        tag: 'button',
      })
    })

    it('renders the passed tag instead', () => {
      expect(wrapper.is('button')).toBe(true)
    })
  })
})

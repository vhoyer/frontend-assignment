import UIText from './UIText.vue'
import { mount } from '@vue/test-utils'

describe('UI > UIText', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UIText, {
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

  it('renders only the base classes', () => {
    expect(wrapper.attributes('class')).toBe('ui-text')
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

  describe('when a size prop is passed', () => {
    beforeEach(() => {
      wrapper.setProps({
        size: 'small',
      })
    })

    it('renders the right classes', () => {
      expect(wrapper.attributes('class')).toBe('ui-text ui-text--small')
    })
  })

  describe('when a variant is passed to it', () => {
    beforeEach(() => {
      wrapper.setProps({
        variant: 'caption',
      })
    })

    it('renders the right classes', () => {
      expect(wrapper.attributes('class')).toBe('ui-text ui-text--caption')
    })
  })

  describe('when error is passed as true to it', () => {
    beforeEach(() => {
      wrapper.setProps({
        error: true,
      })
    })

    it('renders the right classes', () => {
      expect(wrapper.attributes('class')).toBe('ui-text ui-text--error')
    })
  })
})

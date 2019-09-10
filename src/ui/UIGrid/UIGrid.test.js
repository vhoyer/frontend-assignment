import UIGrid from './UIGrid.vue'
import { shallowMount } from '@vue/test-utils'

describe('UI > UIGrid', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UIGrid)
  })

  it('renders a div by default', () => {
    expect(wrapper.is('div')).toBe(true)
  })
})

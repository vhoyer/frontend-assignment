import UIButtonGroup from '.'
import { mount } from '@vue/test-utils'

describe('UI > UIButtonGroup', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UIButtonGroup, {
      slots: {
        default: [
          '<button>bla1</button>',
          '<button>bla2</button>',
          '<button>bla3</button>',
          '<button>bla4</button>',
        ],
      },
    })
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders all slots passed to it', () => {
    expect(wrapper.findAll('button').length).toBe(4)
  })
})

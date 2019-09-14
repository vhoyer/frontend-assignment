import * as row from './UIRow.directive'

describe('Directives > ui:row', () => {
  let el

  beforeEach(() => {
    el = document.createElement('div')
  })

  describe('#inserted', () => {
    beforeEach(() => {
      row.inserted(el, { value: 12 })
    })

    it('sets el.style.gridColumnEnd to span + that number', () => {
      expect(el.style.gridRowStart).toMatch('12')
    })
  })
})

import * as cell from './UICell.directive'

describe('Directives > ui:cell', () => {
  let el

  beforeEach(() => {
    el = document.createElement('div')
  })

  describe('#inserted', () => {
    describe('when a string is passed', () => {
      beforeEach(() => {
        cell.inserted(el, { value: 'wololo' })
      })

      it('sets el.style.gridArea to that string', () => {
        expect(el.style.gridArea).toMatch('wololo')
      })
    })

    describe('when a number is passed', () => {
      beforeEach(() => {
        cell.inserted(el, { value: 12 })
      })

      it('sets el.style.gridColumnEnd to span + that number', () => {
        expect(el.style.gridColumnEnd).toMatch('span 12')
      })
    })
  })
})

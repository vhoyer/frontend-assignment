export const inserted = (el, { value }) => {
    if (typeof value === 'number') {
      el.style.gridColumnEnd = `span ${value}`
    } else {
      el.style.gridArea = value
    }
}

<template>
  <component
    :is="tag"
    class="ui-grid"
    :class="[marginClasses]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'UIGrid',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    margins: {
      type: String,
      default: 'top bottom',
      validator: value => value.split(' ').every(side => [
        'none',
        'top',
        'right',
        'bottom',
        'left',
      ].includes(side)),
    },
  },
  computed: {
    _margins() {
      if (this.margins.includes('none')) {
        return []
      }

      return this.margins.split(' ')
    },
    marginClasses() {
      return this._margins.reduce((acc, cur) => {
        acc.push(`ui-grid--${cur}`)

        return acc
      }, [])
    },
  },
}
</script>

<style lang="scss" src="./UIGrid.scss" scoped></style>

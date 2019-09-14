<template>
  <div
    class="ui-grid"
    :class="[marginClasses]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UIGrid',
  props: {
    margins: {
      type: String,
      default: 'top bottom',
      validator: value => value.split(' ').every(side => [
        'top',
        'right',
        'bottom',
        'left',
      ].includes(side)),
    },
  },
  computed: {
    _margins() {
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

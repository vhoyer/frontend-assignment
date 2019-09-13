<template>
  <UIText tag="label">
    {{ label }}

    <slot />
  </UIText>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" src="./UIInputField.scss"></style>

<template>
  <label class="ui-input-field">
    <UIText type="caption">
      {{ label }}
    </UIText>

    <slot />
  </label>
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

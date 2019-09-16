<template>
  <textarea
    v-bind="$attrs"
    class="ui-textarea"
    v-on="listeners"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  computed: {
    listeners() {
      const listeners = {...this.$listeners};

      delete listeners.input;

      return listeners;
    },
  },
}
</script>

<style lang="scss" src="./UITextarea.scss"></style>

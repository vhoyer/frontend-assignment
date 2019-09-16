<template>
  <input
    v-bind="$attrs"
    class="ui-input"
    v-on="listeners"
    @input="$emit('input', $event.target.value)"
  >
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


<style lang="scss" src="./UIInput.scss"></style>

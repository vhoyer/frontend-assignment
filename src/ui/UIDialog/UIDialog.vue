<template>
  <div
    v-if="isActive"
    class="ui-dialog"
  >
    <div
      class="ui-dialog__backdrop test-backdrop"
      @click="close"
    />

    <UICard>
      <UIGrid>
        <UIText
          v-ui:cell="11"
          class="test-title"
          tag="strong"
          type="caption"
        >
          {{ title }}
        </UIText>

        <button
          class="test-close-button"
          @click="close"
        >
          x
        </button>
      </UIGrid>

      <slot :submit="submit" />
    </UICard>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    urlHash: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    isActive: false,
  }),
  watch: {
    '$route'({ hash }) {
      this.isActive = hash === this.urlHash
    },
  },
  mounted() {
    this.isActive = this.$route.hash === this.urlHash
  },
  methods: {
    submit($event) {
      this.close()
      this.$emit('submit', $event)
    },
    close() {
      this.$router.push({ hash: '' })
    },
  },
}
</script>

<template>
  <div
    v-show="isActive"
    class="ui-dialog"
    role="dialog"
    aria-modal="true"
    :aria-label="title"
  >
    <div
      class="ui-dialog__backdrop test-backdrop"
      @click="close"
    />

    <UICard
      padding="large"
      class="ui-dialog__modal"
    >
      <UIGrid margins="bottom">
        <UIText
          v-ui:cell="11"
          class="test-title"
          type="caption"
        >
          {{ title }}
        </UIText>

        <button
          class="ui-dialog__close-button test-close-button"
          :aria-label="`Close ${title} dialog`"
          @click="close"
        />
      </UIGrid>

      <slot
        :submit="submit"
        :focus-bindings="{
          'data-ui-dialog-focus': true,
        }"
      />
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
    originalFocus: {
      type: Function,
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
    'isActive'(isActive) {
      if (isActive) {
        window.addEventListener('keydown', this.escHandling)
        this.onOpen()
      } else {
        window.removeEventListener('keydown', this.escHandling)
        this.onClose()
      }
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
    escHandling(event) {
      if (event.key !== 'Escape') return

      this.close()
    },
    onOpen() {
      this.$nextTick(() => {
        const dialogInitialFocus = this.$el.querySelector('[data-ui-dialog-focus]')

        if (dialogInitialFocus) {
          dialogInitialFocus.focus()
        }
      })
    },
    onClose() {
      this.originalFocus().focus()
    },
  },
}
</script>

<style lang="scss" src="./UIDialog.scss"></style>

<template>
  <RouterLink
    v-if="$attrs.to"
    :tag="tag"
    v-bind="$attrs"
    @click.native="$emit('click')"
    #default="{ href, route, navigate, isActive, isExactActive }"
  >
    <component
      :is="tag"
      v-on="$listeners"
      v-bind="{
        ...$attrs,
        href,
      }"
      @click="navigate"
      :class="[staticClasses,{
        'ui-link--active': isActive,
        'ui-link--exact-active': isExactActive,
      }]"
      :style="dynamicStyle"
    >
      <slot/>
    </component>
  </RouterLink>
  <component
    v-else
    :is="tag"
    :class="staticClasses"
    :style="dynamicStyle"
    v-on="$listeners"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'UILink',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    color: {
      type: String,
      default: 'primary-light',
    },
  },
  computed: {
    staticClasses() {
      return 'ui-link'
    },
    dynamicStyle() {
      const style = {}

      if (this.color !== 'inherit') {
        style['--ui-link-color'] = `var(--color-${this.color})`
      }

      return style
    },
  },
}
</script>

<style lang="scss" src="./UILink.scss"></style>

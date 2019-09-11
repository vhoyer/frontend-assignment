<template>
  <UICard class="navigation-panel">
    <UILink
      v-for="item in items"
      :key="item.name"
      :to="{name: item.name}"
      class="navigation-panel__item test-item"
    >
      {{ item.meta.label }}
    </UILink>
  </UICard>
</template>

<script>
import { allRouteNames } from 'Router/utils.js'

export default {
  props: {
    forSibilingsOfRoute: {
      type: String,
      required: true,
      validator: value => allRouteNames().includes(value),
    },
  },
  computed: {
    items() {
      return this.recursiveChildrenSearch(
        this.$router.options.routes,
        this.forSibilingsOfRoute)
    },
  },
  methods: {
    recursiveChildrenSearch(routes, name, parent) {
      for (let route of routes) {
        if (route.name === name)
          return parent ? parent.children : routes;
        else if (route.children)
          return this.recursiveChildrenSearch(route.children, name, route);
      }
    }
  },
}
</script>

<style lang="scss" src="./NavigationPanel.scss"></style>


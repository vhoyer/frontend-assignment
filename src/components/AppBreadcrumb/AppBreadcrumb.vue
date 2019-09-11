<template>
  <div
    v-if="breadcrumbs.length"
    class="app-breadcrumb"
  >
    <component
      :is="breadcrumbs.length > 1 ? 'UILink' : 'UIText'"
      :to="breadcrumbs[0]"
      class="app-breadcrumb__item test-item"
    >
      {{ breadcrumbs[0].meta.label }}
    </component>

    <template v-for="(crumb, index) in breadcrumbs.slice(1)">
      <UIText :key="`slash${crumb.name}`">/</UIText>

      <component
        :is="breadcrumbs.slice(1).length !== index+1 ? 'UILink' : 'UIText'"
        :key="crumb.name"
        :to="crumb"
        class="app-breadcrumb__item test-item"
      >
        {{ crumb.meta.label }}
      </component>
    </template>
  </div>
</template>

<script>
import { routes } from 'Router/routes'

export default {
  data: () => ({
    breadcrumbs: [],
  }),
  mounted() {
    this.breadcrumbs = this.buildBreadcrumbFor(this.$route)
  },
  watch: {
    '$route'(newRoute) {
      this.breadcrumbs = this.buildBreadcrumbFor(newRoute)
    },
  },
  methods: {
    buildBreadcrumbFor({ name }) {
      const home = routes[0]

      if (name === home.name) return [name]

      const paths = this.constructPath(home)

      return paths.find((item) => {
        return item.slice(-1)[0].name === name
      })
    },
    constructPath(parent, carry = []) {
      const root = [...carry]
      if (parent.name) {
        root.push(parent)
      }

      if (!parent.children) {
        return [root]
      }

      return parent.children.reduce((acc, child) => {
        return [...acc, ...this.constructPath(child, root)]
      }, [root])
    },
  },
}
</script>

<style lang="scss" src="./AppBreadcrumb.scss" scoped></style>

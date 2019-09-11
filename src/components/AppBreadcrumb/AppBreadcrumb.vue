<template>
  <div
    v-if="breadcrumbs.length"
    class="app-breadcrumb"
  >
    <template v-for="(crumb, index) in breadcrumbs">
      <UIText
        v-if="index !== 0"
        :key="`slash${crumb.name}`"
      >/</UIText>

      <component
        :is="breadcrumbs.length !== index+1 ? 'UILink' : 'UIText'"
        :key="crumb.name"
        :to="crumb"
        class="app-breadcrumb__item test-item"
      >
        {{ crumb.label }}
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

      const paths = this.constructPath(home).slice(1)

      return paths.find((item) => {
        return item.slice(-1)[0].name === name
      })
    },
    constructPath(parent, carry = []) {
      const root = [...carry]
      if (parent.meta && parent.meta.label) {
        root.push({
          name: parent.name,
          label: parent.meta.label,
        })
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

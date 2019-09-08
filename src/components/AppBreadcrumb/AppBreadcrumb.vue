<template>
  <div>
    <UIText
      v-for="crumb in breadcrumbs"
      :key="crumb"
      class="breadcrumb__item test-item"
    >
      {{ crumb }}
    </UIText>
  </div>
</template>

<script>
import { routes } from 'Router/routes'
import UIText from 'UI/UIText'

export default {
  components: {
    UIText,
  },
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
        return item.slice(-1)[0] === name
      })
    },
    constructPath(parent, carry = []) {
      const root = [...carry]
      if (parent.name) {
        root.push(parent.name)
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

<style lang="scss" scoped>
.breadcrumb__item {
  &:not(:first-child) {
    &::before {
      content: '/'
    }
  }
}
</style>

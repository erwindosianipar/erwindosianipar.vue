<template>
  <div>
    <h1>{{ title }}</h1>
    <h2 class="subtitle">{{ description }}</h2>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.meta.title,
      description: this.$route.meta.description,
    }
  },
  metaInfo() {
    return {
      title: this.$route.meta.title,
      titleTemplate: "%s | Erwindo Sianipar",
      meta: [
        {
          name: "description",
          content: `${this.$route.meta.description}`,
        },
        {
          name: "og:title",
          content: `${this.$route.meta.title} | Erwindo Sianipar`,
        },
        {
          name: "og:description",
          content: `${this.$route.meta.description}`,
        },
        { name: "og:image", content: "https://github.com/erwindosianipar.png" },
      ],
    }
  },
}
</script>

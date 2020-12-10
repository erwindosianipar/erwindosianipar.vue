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
      description: this.$route.meta.description
    }
  }
}
</script>
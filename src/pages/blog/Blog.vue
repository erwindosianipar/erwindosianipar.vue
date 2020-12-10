<template>
  <div>
    <h1>Blog</h1>
    <h2>List of my opinion and post archive</h2>
    <div v-for="(section, index) in Object.keys(posts).reverse()" :key="index">
      <hr />
      <div class="subtitle">
        <h3>{{ section }}</h3>
      </div>
      <div v-for="post in posts[section]" :key="post.slug">
        <div>{{ post.date }}</div>
        <router-link :to="`/blog/${post.slug}`">
          <h4 class="mt-0">{{ post.title }}</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogEntries from "../../components/blog/data.json"

export default {
  name: "blog",
  computed: {
    posts: function () {
      return BlogEntries
    },
  },
  metaInfo: {
    title: "Blog",
    titleTemplate: "%s | Erwindo Sianipar",
    meta: [
      {
        name: "description",
        content: "List of Erwindo Sianipar opinion and post archive",
      },
      { name: "og:title", content: "Blog | Erwindo Sianipar" },
      {
        name: "og:description",
        content: "List of Erwindo Sianipar opinion and post archive",
      },
      { name: "og:image", content: "https://github.com/erwindosianipar.png" },
    ],
  },
}
</script>

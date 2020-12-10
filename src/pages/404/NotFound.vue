<template>
  <div>
    <h1>Not Found</h1>
    <h2>Error 404 Look like you missing something</h2>
    <p>
      The requested URL <strong>{{ path }}</strong> was not found on this server. That's
      all we know.
    </p>
    <p>
      <router-link to="/" class="button is-link"> Back to Home </router-link>
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      path: window.location.pathname,
    }
  },
  metaInfo() {
    return {
      title: "Not Found",
      titleTemplate: "%s | Erwindo Sianipar",
      meta: [
        { name: "description", content: "Error 404 Look like you missing something" },
        { name: "og:title", content: "Not Found | Erwindo Sianipar" },
        { name: "og:description", content: "Error 404 Look like you missing something" },
        { name: "og:image", content: "https://github.com/erwindosianipar.png" },
      ],
    }
  },
}
</script>

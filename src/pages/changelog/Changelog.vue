<template>
  <div>
    <h1>Changelog</h1>
    <h2>Improvement log of this website</h2>
    <div>
      <h3>New version</h3>
      <h4>[v0.1.0] - December 10, 2020</h4>
      <p>
        This website is run on Vue JS serve with Express/Webpack and hosted on <a href="https://www.netlify.com/">Netlify</a>.
      </p>
      <hr />
      <h3>Old version</h3>
      <h4>[v2.0.3] - October 27, 2020</h4>
      <p>
        Previous version of this website is run on Ruby (Jekyll) and hosted on <a href="https://pages.github.com">Github
        pages</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Changelog",
    titleTemplate: "%s | Erwindo Sianipar",
    meta: [
      {
        name: "description",
        content: "Improvement log of this website",
      },
      { name: "og:title", content: "Changelog | Erwindo Sianipar" },
      {
        name: "og:description",
        content: "Improvement log of this website",
      },
      { name: "og:image", content: "https://erwindosianipar.github.io/cdn/images/erwindosianipar.jpeg" },
    ],
  },
}
</script>

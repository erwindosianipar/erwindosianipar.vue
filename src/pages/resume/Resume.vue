<template>
  <div>
    <h1>Resume</h1>
    <h2>As far as my carrer as a Software Engineer</h2>
    <p>
      Hi there, this is my resume pages, I had put as far as my career and experience in
      this resume file. If you need my resume you can download it by press the button
      download resume.
    </p>
    <p>
      If you’d like a more updated resume, please remind me to update this by contacting
      me via <router-link to="/contact">contact page</router-link> last updated on
      <strong>Sept 8, 2020</strong>
    </p>
    <div class="buttons mt-5">
      <button class="button is-link">
        <a
          href="https://erwindosianipar.github.io/cdn/documents/Resume - Erwindo Sianipar.pdf"
          class="has-text-white"
        >
          Download Resume <i class="far fa-download ml-3"></i>
        </a>
      </button>
      <button class="button is-link is-light">
        <a
          href="https://erwindosianipar.github.io/cdn/documents/Curriculum Vitae - Erwindo Sianipar.pdf"
        >
          Download Curriculum Vitae <i class="far fa-download ml-3"></i>
        </a>
      </button>
    </div>
    <div class="tabs" id="tabs">
      <ul>
        <li class="is-active" data-tab="1">
          <a> Resume </a>
        </li>
        <li data-tab="2">
          <a> Curriculum Vitae </a>
        </li>
      </ul>
    </div>
    <div id="c-tab-content">
      <div class="is-active" data-content="1">
        <object
          data="https://erwindosianipar.github.io/cdn/documents/Resume - Erwindo Sianipar.pdf"
          type="application/pdf"
          width="100%"
          style="height: 100vh"
        >
          <nav class="notification">
            <p>Cannot see the preview? try to downloading the resume instead.</p>
          </nav>
          <embed
            src="https://erwindosianipar.github.io/cdn/documents/Resume - Erwindo Sianipar.pdf"
          />
        </object>
      </div>
      <div data-content="2">
        <object
          data="https://erwindosianipar.github.io/cdn/documents/Curriculum Vitae - Erwindo Sianipar.pdf"
          type="application/pdf"
          width="100%"
          style="height: 100vh"
        >
          <nav class="notification">
            <p>Cannot see the preview? try to downloading the cv instead.</p>
          </nav>
          <embed
            src="https://erwindosianipar.github.io/cdn/documents/Curriculum Vitae - Erwindo Sianipar.pdf"
          />
        </object>
      </div>
    </div>
  </div>
</template>

<script>
var $ = require("jquery")

export default {
  created: function () {
    $(document).ready(function () {
      $("#tabs li").on("click", function () {
        var tab = $(this).data("tab")
        $("#tabs li").removeClass("is-active")
        $(this).addClass("is-active")
        $("#c-tab-content div").removeClass("is-active")
        $('div[data-content="' + tab + '"]').addClass("is-active")
      })
    })
  },
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s | Erwindo Sianipar",
    meta: [
      {
        name: "description",
        content: "As far as Erwindo Sianipar carrer as a Software Engineer",
      },
      { name: "og:title", content: "Resume | Erwindo Sianipar" },
      {
        name: "og:description",
        content: "As far as Erwindo Sianipar carrer as a Software Engineer",
      },
      { name: "og:image", content: "https://erwindosianipar.github.io/cdn/images/erwindosianipar.jpeg" },
    ],
  },
}
</script>

<template>
  <div>
    <h1>👋 Halu World!</h1>
    <h2>I'm <span class="c-underscore">Erwindo Sianipar</span>.</h2>
    <blockquote class="mb-3">
      People who are always on the move, but never settle for less.
    </blockquote>
    <div class="notification is-link is-light">
      <p class="has-text-link">
        Hello, how are you? What happen today? Wish you have the best right now. It's me,
        Erwindo Sianipar and I was born
        <span class="tag is-link is-rounded c-cursor-pointer c-tooltip">
          <span id="age-seconds">0</span>
          <span class="c-tooltip-text" id="age-years">0</span>
        </span>
        seconds ago. A young man
        and energic but just a mere human, who still pursuing my dreams. Let us know more,
        and be friend for sake of humanity and freedom 😁🎉
      </p>
      <p class="has-text-link">
        I'm from Pematangsiantar, Indonesia and now live in Jakarta, currently working as
        iOS Developer on a Indonesia-based company. I don’t have important things to do
        except sitting in front of my laptop. I'm interested in programming, photography,
        and UI/UX design, I also like to watch movies and listening musics.
      </p>
      <p class="has-text-link">
        Maybe that the things if you want to know me more wkwkwk.
      </p>
    </div>
    <div class="mt-5">
      <ul class="menu-list">
        <li>
          <span class="panel-icon"> 🖥 </span>
          <span class="has-text-weight-bold"> I Love coding and programming </span>
          <p>
            I'm so interested in coding and programming since 2015. Now I'm currently
            working as iOS Developer and working with Swift and learn with all programming
            language that help me to build a good apps.
          </p>
        </li>
        <li>
          <span class="panel-icon"> 🗺 </span>
          <span class="has-text-weight-bold">
            I'm currently located in Jakarta, Indonesia
          </span>
          <p>
            I was born in June 2000 and raised in North Sumatra. Since December 2019, I
            moved to the capital city of Indonesia: Jakarta.
          </p>
        </li>
        <li>
          <span class="panel-icon"> 🙌 </span>
          <span class="has-text-weight-bold"> Just my favourite quote </span>
          <blockquote>
            <p>
              He who experiences the unity of life sees his own Self in all beings, and
              all beings in his own Self, and looks on everything with an impartial eye.
            </p>
          </blockquote>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var $ = require("jquery")

function updateAge(time) {
  $(document).ready(function () {
    $("#age-seconds").html(time.toLocaleString())
  })
}

var born = new Date("2000-06-03")

export default {
  created: function () {
    $(document).ready(function () {
      $('#age-years').html(`${(new Date().getFullYear() - born.getFullYear())} years ago`)
    })
    setInterval(function () {
      var time = Math.floor((new Date().getTime() - born) / 1000)
      updateAge(time)
    }, 1000)
  },
  metaInfo: {
    title: "Home",
    titleTemplate: "%s | Erwindo Sianipar",
    meta: [
      {
        name: "description",
        content: "People who are always on the move, but never settle for less.",
      },
      { name: "property:title", content: "Home | Erwindo Sianipar" },
      {
        name: "property:description",
        content: "People who are always on the move, but never settle for less.",
      },
      { name: "property:image", content: "https://github.com/erwindosianipar.png" },
    ],
  },
}
</script>

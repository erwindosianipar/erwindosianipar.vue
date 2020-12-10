<template>
  <nav class="navbar is-fixed-top c-shadow">
    <div>
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img
            src="@/assets/img/erwindosianipar.svg"
            class="c-brand"
            alt="Erwindo Sianipar"
          />
        </router-link>
        <a class="navbar-burger burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
var $ = require('jquery')

function closeSidebar() {
  $('.navbar-burger').toggleClass('is-active')
  $('#c-sidebar').toggleClass('is-active')
}

$(document).ready(function () {
  $('.navbar-burger').click(function() {
    closeSidebar()
  })

  $('.panel-block').click(function() {
    closeSidebar()
  })

  $('.navbar-item').click(function() {
    $('.navbar-burger').removeClass('is-active')
    $('#c-sidebar').removeClass('is-active')
  })
})
</script>

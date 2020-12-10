<template>
  <footer>
    <hr>
    <div class="columns is-centered">
      <div class="column is-9">
        <p>&copy; 2019 - {{ year }} Erwindo Sianipar made with love under the <a href="http://wtfpl.net/">WTFPL License</a>.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
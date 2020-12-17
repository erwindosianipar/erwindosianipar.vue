<template>
  <footer class="notification c-no-border-radius">
    <div class="columns is-centered">
      <div class="column is-9">
        <p>&copy; 2019 - {{ year }} All Rights Reserved - Designed & Coded with <i class="fas fa-heart c-heartbeat has-text-danger"></i> by Erwindo Sianipar.</p>
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

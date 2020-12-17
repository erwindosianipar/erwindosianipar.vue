<template>
  <div id="app">
    <navbar />
    <sidebar />
    <div id="c-content">
      <corona-virus />
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-9">
              <router-view />
            </div>
          </div>
          <foot />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/theme/Navbar"
import Sidebar from "./components/theme/Sidebar"
import CoronaVirus from "./components/widget/CoronaVirus"
import Foot from "./components/theme/Footer"

export default {
  components: {
    Navbar,
    Sidebar,
    CoronaVirus,
    Foot,
  },
}
</script>

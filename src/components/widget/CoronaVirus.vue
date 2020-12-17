<template>
  <div>
    <div class="mt-6 pt-1">
      <div class="notification c-no-border-radius">
        <div class="has-text-weight-bold mb-4">
          <span class="tag is-danger"><span class="c-blink mr-1">●</span> LIVE</span> Coronavirus update in Indonesia
        </div>
        <div class="table-container">
          <nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
            <div v-if="loading">
              <Skeleton height="1.5rem" />
            </div>
            <div v-else-if="fetchCovidError">
              <span class="icon is-small mr-2"><i class="fal fa-info-circle"></i></span>
              <span>Failed to retrieve data, please</span>
              <span class="c-cursor-pointer has-text-link ml-1" @click="fetchCovidData">try again</span>
            </div>
            <ul v-else>
              <li>
                <a :href="covid['confirmed']['detail']" class="c-no-underline">
                  <span class="icon is-small">
                    <i class="fad fa-head-side-virus"></i>
                  </span>
                  <span class="mr-1">Confirmed:</span>
                  <span class="has-text-weight-bold">{{
                    covid["confirmed"]["value"].toLocaleString("id-ID")
                  }}</span>
                </a>
              </li>
              <li>
                <a :href="covid['recovered']['detail']" class="c-no-underline">
                  <span class="icon is-small">
                    <i class="fad fa-heartbeat"></i>
                  </span>
                  <span class="mr-1">Recovered:</span>
                  <span class="has-text-weight-bold">{{
                    covid["recovered"]["value"].toLocaleString("id-ID")
                  }}</span>
                </a>
              </li>
              <li>
                <a :href="covid['deaths']['detail']" class="c-no-underline">
                  <span class="icon is-small">
                    <i class="fad fa-skull"></i>
                  </span>
                  <span class="mr-1">Deaths:</span>
                  <span class="has-text-weight-bold">{{
                    covid["deaths"]["value"].toLocaleString("id-ID")
                  }}</span>
                </a>
              </li>
              <li class="c-no-underline">
                <span class="icon icon-small">
                  <i class="fad fa-clock"></i>
                </span>
                <span class="mr-1">Last update:</span>
                <span class="has-text-weight-bold">
                  {{ lastCovidUpdate }}
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from "../theme/Skeleton"

export default {
  components: {
    Skeleton,
  },
  computed: {
    covid() {
      return this.$store.state.covid19Data
    },
    lastCovidUpdate() {
      const date = new Date(this.$store.state.covid19Data['lastUpdate'])
      return `${date.getHours()}:${date.getMinutes()} WIB`
    },
    loading() {
      return this.$store.state.loadingCovid19
    },
    fetchCovidError() {
      return this.$store.state.fetchCovidError
    }
  },
  created() {
    this.fetchCovidData()
  },
  methods: {
    fetchCovidData() {
      this.$store
      .dispatch("getCovid19Data")
      .then((result) => {
        this.$store.commit("setCovid19Data", result.data)
        this.$store.commit("toggleLoadingCovid19", false)
      })
      .catch((err) => {
        console.log(err)
        this.$store.commit("toggleLoadingCovid19", false)
        this.$store.commit("toggleFetchCovidError", true)
      })
    }
  }
}
</script>

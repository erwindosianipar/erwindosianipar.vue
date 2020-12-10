<template>
  <div>
    <div class="mt-6 pt-1">
      <div class="notification is-danger-is-light c-no-border-radius">
        <div class="has-text-weight-bold mb-4">
          <span class="tag is-danger">LIVE</span> Coronavirus update in Indonesia
        </div>
        <div class="table-container">
          <nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
            <div v-if="loading">
              <Skeleton height="1.5rem" />
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
    loading() {
      return this.$store.state.loadingCovid19
    },
  },
  created() {
    this.$store
      .dispatch("getCovid19Data")
      .then((result) => {
        this.$store.commit("setCovid19Data", result.data)
        this.$store.commit("toggleLoadingCovid19", false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

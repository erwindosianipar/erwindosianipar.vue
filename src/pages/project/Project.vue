<template>
  <div>
    <h1>Project</h1>
    <h2>Several list of my open source project</h2>
    <div v-if="loading">
      <div v-for="i in 3" :key="i">
        <div class="notification is-light mb-3">
          <skeleton width="30%" class="mb-5" />
          <skeleton class="mb-5" />
          <skeleton width="40%" />
        </div>
      </div>
    </div>
    <div v-else-if="fetchProjectError">
      <div class="notification is-light mb-3">
        <h3 class="mt-0">Couldn't load data from server</h3>
        <p>Sorry, an error occurred when retreive data from server. Please try again later or contact support, If you contact support please provide these details.</p>
        <div class="buttons">
          <button @click="getProjectList" class="button is-link is-rounded">Try Again</button>
          <router-link to="/contact" class="button is-rounded">Contact Support</router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="project in projectList" :key="project.id">
        <div class="columns">
          <div class="column">
            <div class="notification">
              <div class="media">
                <div class="media-left">
                  <i class="fad fa-book"></i>
                </div>
                <div class="media-content">
                  <a :href="project.url" class="has-text-weight-bold">
                    {{ project.name }}
                  </a>
                </div>
              </div>
              <p>{{ project.description }}</p>
              <div class="media">
                <div class="media-left">
                  <i class="far fa-brackets-curly"></i> {{ project.language }}
                </div>
                <div class="media-left">
                  <a :href="project.stargazers_url">
                    <span class="icon is-small">
                      <i class="far fa-star"></i>
                    </span>
                    <span>
                      {{ project.stargazers_count }}
                    </span>
                  </a>
                </div>
                <div class="media-content">
                  <a :href="project.forks_url">
                    <i class="far fa-code-branch"></i> {{ project.forks_count }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from "../../components/theme/Skeleton"

export default {
  components: {
    Skeleton,
  },
  computed: {
    projectList() {
      return this.$store.state.projectList
    },
    loading() {
      return this.$store.state.loadingProject
    },
    fetchProjectError() {
      return this.$store.state.fetchProjectError
    }
  },
  created() {
    this.getProjectList()
  },
  methods: {
    getProjectList() {
      this.$store
      .dispatch("getProjectList")
      .then((result) => {
        this.$store.commit("setProjectList", result.data)
        this.$store.commit("toggleLoadingProject", false)
      })
      .catch((err) => {
        console.log(err)
        this.$store.commit("toggleFetchProjectError", true)
        this.$store.commit("toggleLoadingProject", false)
      })
    }
  },
  metaInfo: {
    title: "Project",
    titleTemplate: "%s | Erwindo Sianipar",
    meta: [
      {
        name: "description",
        content: "Several list of Erwindo Sianipar open source project",
      },
      { name: "og:title", content: "Project | Erwindo Sianipar" },
      {
        name: "og:description",
        content: "Several list of Erwindo Sianipar open source project",
      },
      { name: "og:image", content: "https://github.com/erwindosianipar.png" },
    ],
  },
}
</script>

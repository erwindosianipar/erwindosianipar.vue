<template>
  <div>
    <h1>Contact</h1>
    <h2>Let’s make something great together! 🤩</h2>
    <p>
      Just send me message from this form, I will receive your message via email and I
      will reach as soon as possible 📭😉
    </p>
    <p>
      Or you can find all my social media account at sidebar of this website. I will be
      happy to listen to you 😉 If you have a something trouble to find me at internet,
      you can call my name three times btw hahahaha, feel free to contact me.
    </p>
    <div class="field mt-6">
      <p class="has-text-weight-bold has-text-danger" id="error"></p>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            id="name"
            autocomplete="off"
            placeholder="e.g. Erwindo Sianipar"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="eamil"
            id="email"
            autocomplete="off"
            placeholder="e.g. erwindosianipar@gmail.com"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            class="textarea"
            id="message"
            placeholder="e.g. Hello world, how area you?"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link" id="button" @click="sendMessage">
          Send Message <i class="fal fa-paper-plane ml-3"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from "../../network/api.service"
var $ = require("jquery")

export default {
  methods: {
    sendMessage: function () {
      $("#error").html("")
      var name = $("#name").val()
      var email = $("#email").val()
      var message = $("#message").val()
      if (name == "" || (email == "" && message == "")) {
        $("#error").html("Please complete all field to continue")
      } else {
        $("button").toggleClass("is-loading")
        $("button").prop("disabled", true)
        APIService.sendMessage(name, email, message)
          .then((response) => {
            $("button").toggleClass("is-loading")
            $("button").html(
              'Message Sent Successfully <i class="fal fa-check ml-3"></i>'
            )
            console.log(response)
          })
          .catch((error) => {
            $("button").toggleClass("is-loading")
            $("button").toggleClass("is-danger")
            $("button").html('Failed to Send Message <i class="fal fa-times ml-3"></i>')
            console.log(error)
          })
      }
    },
  },
  metaInfo: {
    title: "Contact",
    titleTemplate: "%s | Erwindo Sianipar",
    meta: [
      {
        name: "description",
        content:
          "Get in touch with Erwindo Sianipar and Let’s make something great together",
      },
      { name: "og:title", content: "Contact | Erwindo Sianipar" },
      {
        name: "og:description",
        content:
          "Get in touch with Erwindo Sianipar and Let’s make something great together",
      },
      { name: "og:image", content: "https://github.com/erwindosianipar.png" },
    ],
  },
}
</script>

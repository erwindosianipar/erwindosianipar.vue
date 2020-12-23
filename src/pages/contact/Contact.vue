<template>
  <div>
    <h1>Contact</h1>
    <h2>Let’s make something great together! 🤩</h2>
    <div class="level mt-5">
      <div class="level-left">
        <div class="level-item">
          <figure class="image is-48x48">
            <img class="is-rounded" src="https://erwindosianipar.github.io/cdn/images/erwindosianipar.jpeg" alt="Erwindo Sianipar">
            <i class="c-online-indicator"></i>
          </figure>
        </div>
        <div class="level-item">
          <span>Reply time:</span>
          <span class="has-text-weight-bold">1-3 working days</span>
        </div>
      </div>
    </div>
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
      <p class="has-text-danger" id="error"></p>
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
          Send me a message <i class="fal fa-paper-plane ml-3"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from "../../network/api.service"
var $ = require("jquery")

function validateEmail(email) {
  /* eslint-disable no-useless-escape */
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

export default {
  methods: {
    sendMessage: function () {
      $("#error").html("")
      var name = $("#name").val()
      var email = $("#email").val()
      var message = $("#message").val()
      if (name == "" || (email == "" && message == "")) {
        $("#error").html('<div class="notification"><i class="fal fa-info-circle mr-2"></i> Please complete all field to send message</div>')
      } else {
        if (validateEmail(email)) {
        $("button").toggleClass("is-loading")
        $("button").prop("disabled", true)
        APIService.sendMessage(name, email, message)
          .then((response) => {
            $("button").toggleClass("is-loading")
            $("button").html(
              'Message sent successfully <i class="fal fa-check ml-3"></i>'
            )
            $("#error").html()
            console.log(response)
          })
          .catch((error) => {
            $("button").toggleClass("is-loading")
            $("button").toggleClass("is-danger")
            $("button").html('Failed to send message <i class="fal fa-times ml-3"></i>')
            console.log(error)
          })
        } else {
          $("#error").html('<div class="notification"><i class="fal fa-info-circle mr-2"></i> Please insert a valid email address</div>')
        }
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
      { name: "og:image", content: "https://erwindosianipar.github.io/cdn/images/erwindosianipar.jpeg" },
    ],
  },
}
</script>

<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Vue App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/wisata">Wisata</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about-us">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Tafsiyah Tour And Travel</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#home">Home</a> -->
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#about">Wisata</a> -->
            <router-link class="nav-link" to="/wisata">Wisata</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#skill">About Us</a> -->
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <!-- Content Area -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.onscroll = this.scrollFunction;
  },
  methods: {
    scrollFunction() {
      const navbar = document.getElementById("navbar");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "white";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    },
  },
}
</script>

<style scoped>
/* Styling for the App */
nav {
  background-color: #f8f9fa;
}
.navbar-nav{
    font-size: 20px;
}
.navbar{
    position: sticky;
    top: 0;
    z-index: 1;
}
</style>

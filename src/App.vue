<template>
  <div id="app">
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
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/wisata">Wisata</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
          </ul>

          <!-- User info & logout placed at the right side or login button if not logged in -->
          <ul class="navbar-nav ml-auto">
            <!-- If user is logged in, show user info and logout button -->
            <li class="nav-item" v-if="isLoggedIn">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ userName }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#" @click="logout">Logout</a></li>
                </ul>
              </div>
            </li>
            <!-- If user is not logged in, show login button -->
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link to="/login" class="btn btn-primary">Login</router-link>
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
  data() {
    return {
      isLoggedIn: false,
      userName: ''
    };
  },
  mounted() {
    this.checkLoginStatus();
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
    checkLoginStatus() {
      // Cek apakah ada data user di localStorage
      const user = localStorage.getItem('loggedInUser');
      if (user) {
        this.isLoggedIn = true;
        this.userName = JSON.parse(user).nama; // Ambil nama dari data yang ada di localStorage
      } else {
        this.isLoggedIn = false;
      }
    },
    logout() {
      // Hapus data user dari localStorage
      localStorage.removeItem('loggedInUser');
      this.isLoggedIn = false;
      this.userName = '';
      // Arahkan ke halaman home setelah logout
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
/* Styling for the App */
nav {
  background-color: #f8f9fa;
}

.navbar-nav {
  font-size: 20px;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 1;
}

.navbar-nav.ml-auto {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
}

/* Ensure that the dropdown button is aligned to the right */
.dropdown-menu {
  right: 0;
  left: auto;
}

/* Style for login button */
.nav-item .btn {
  margin-top: 5px;
}
</style>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 25rem;">
      <h3 class="card-title text-center mb-4">Login</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            class="form-control"
            required
          />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </div>
      </form>
      <p>Belum punya akun? <router-link to="/register">Daftar disini</router-link></p>
      <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    form: {
      email: "",
      password: "",
    },
    errorMessage: "",
  };
},
methods: {
  async handleLogin() {
    try {
      const response = await fetch(`http://103.179.56.241:8000/pelanggan`, {
        method: "GET",
      });
      const customers = await response.json();
      const customer = customers.find(
        (user) =>
          user.email === this.form.email &&
          user.password === this.form.password
      );
      if (customer) {
        localStorage.setItem("loggedInUser", JSON.stringify(customer));
        console.log(customer);
        const redirectRoute = localStorage.getItem("redirectAfterLogin");

        if (redirectRoute) {
          // Redirect ke rute yang disimpan
          this.$router.push(redirectRoute).then(() => {
            window.location.reload(); // Setelah halaman dipush, lakukan reload
          });
          localStorage.removeItem("redirectAfterLogin"); // Bersihkan rute setelah digunakan
        } else {
          // Jika tidak ada rute yang disimpan, redirect ke halaman home
          this.$router.push({ name: "home" }).then(() => {
            window.location.reload(); // Setelah halaman dipush, lakukan reload
          });
        }
      } else {
        this.errorMessage = "Email atau password salah.";
      }
    } catch (error) {
      console.error("Login error:", error);
      this.errorMessage = "Terjadi kesalahan. Silakan coba lagi.";
    }
  },
},
};
</script>

<style scoped>
.card {
max-width: 400px;
}
</style>

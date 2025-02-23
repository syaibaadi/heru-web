<template>
    <div class="register-container">
        <h2>Form Registrasi</h2>

        <form @submit.prevent="registerUser" class="register-form">
        <div>
            <label for="fullname">Nama Lengkap</label>
            <input
            type="text"
            id="fullname"
            v-model="registerData.fullname"
            required
            />

            <label for="address">Alamat</label>
            <input
            type="text"
            id="address"
            v-model="registerData.address"
            required
            />

            <label for="phone">Nomor Telepon</label>
            <input
            type="text"
            id="phone"
            v-model="registerData.phone"
            required
            />

            <label for="email">Email</label>
            <input
            type="email"
            id="email"
            v-model="registerData.email"
            required
            />

            <label for="password">Password</label>
            <input
            type="password"
            id="password"
            v-model="registerData.password"
            required
            />

            <button
            type="submit"
            class="btn btn-primary"
            >
            Daftar
            </button>
        </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      // Data untuk form registrasi
      registerData: {
        fullname: '',
        address: '',
        phone: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        // Kirim data registrasi ke server
        const response = await axios.post(`http://103.179.56.241:8000/pelanggan`, {
          nama: this.registerData.fullname,
          address: this.registerData.address,
          phone: this.registerData.phone,
          email: this.registerData.email,
          password: this.registerData.password
        });

        // Jika berhasil, arahkan ke halaman login
        if (response.status === 200) {
          alert("Pendaftaran berhasil, silakan login!");
          this.$router.push({ name: 'login' }); // Redirect ke halaman login
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat registrasi:", error);
        alert("Terjadi kesalahan, coba lagi.");
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.register-form label {
  margin-bottom: 10px;
  font-size: 16px;
}

.register-form input {
  margin-bottom: 20px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.register-form button {
  padding: 12px 20px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.register-form button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>

  
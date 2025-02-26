<template>
    <div class="container my-5 py-5">
      <div class="row mb-5">
        <div class="col-12">
          <h1 class="fw-bold text-center">List Kendaraan</h1>
          <hr>
        </div>
      </div>
  
      <div class="row d-flex">
        <div class="col-md-4 mb-4" v-for="kendaraan in kendaraans" :key="kendaraan.id">
          <div class="card d-flex flex-column" style="height: 100%; padding-bottom: 50px;">
            <!-- Menggunakan gambar dari data -->
            <div class="card-body">
              <!-- Menggunakan data untuk title dan deskripsi -->
              <h5 class="card-title">{{ kendaraan.nama }}</h5>
              <p class="card-text">{{ kendaraan.type }}</p>
              <p class="list-group-item">Kapasitas Penumpang: {{ kendaraan.capacity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'kendaraanView',
    data() {
      return {
        kendaraans: []  // Menyimpan data kendaraan
      }
    },
    mounted() {
      this.fetchDatakendaraan();
    },
    methods: {
      async fetchDatakendaraan() {
        try {
          // Mengambil data dari API
          const response = await fetch(`http://103.179.56.241:8000/kendaraan`, {
            method: 'GET',
          });
  
          // Parsing data JSON dan menyimpannya di variabel kendaraans
          const kendaraans = await response.json();
          console.log(kendaraans);
          this.kendaraans = kendaraans;  // Menyimpan data ke dalam kendaraans
          console.log('Data kendaraan:', kendaraans);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      },
      goToCheckout(id){
        localStorage.setItem("redirectAfterLogin", `/checkout/${id}`);
        this.$router.push(`/checkout/${id}`);
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: blue;
  }
  </style>
  
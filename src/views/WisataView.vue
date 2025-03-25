<template>
  <div class="container my-5 py-5">
    <div class="row mb-5">
      <div class="col-12">
        <h1 class="fw-bold text-center">List Tour</h1>
        <hr>
      </div>
    </div>

    <div class="row d-flex">
      <div class="col-md-4 mb-4" v-for="wisata in wisatas" :key="wisata.id">
        <div class="card d-flex flex-column" style="height: 100%; padding-bottom: 50px;">
          <!-- Menggunakan gambar dari data -->
          <img :src="'data:image/png;base64,' + wisata.image" class="card-img-top" alt="image" />
          <div class="card-body">
            <!-- Menggunakan data untuk title dan deskripsi -->
            <h5 class="card-title">{{ wisata.nama }}</h5>
            <p class="card-text">{{ wisata.description }}</p>
          </div>
          <ul class="list-group list-group-flush d-flex flex-column">
            <!-- Menggunakan data untuk destinasi dan benefit -->
            <li class="list-group-item">Destinasi: {{ wisata.destination }}</li>
            <li class="list-group-item">Benefit: {{ wisata.benefit }}</li>
            <li class="list-group-item">Price: Rp {{ wisata.price.toLocaleString() }}</li>
          </ul>
          <div class="card-body mt-auto">
            <!-- Link atau button sesuai kebutuhan -->
            <button class="btn btn-primary" @click="goToCheckout(wisata.id)">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WisataView',
  data() {
    return {
      wisatas: []  // Menyimpan data wisata
    }
  },
  mounted() {
    this.fetchDataWisata();
  },
  methods: {
    async fetchDataWisata() {
      try {
        // Mengambil data dari API
        const response = await fetch(`http://103.179.56.241:8000/wisata`, {
          method: 'GET',
        });

        // Parsing data JSON dan menyimpannya di variabel wisatas
        const wisatas = await response.json();
        console.log(wisatas);
        this.wisatas = wisatas;  // Menyimpan data ke dalam wisatas
        console.log('Data Wisata:', wisatas);
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

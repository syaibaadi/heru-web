<template>
  <!-- Home Section -->
  <div class="container mb-5 mt-5">
    <div class="row">
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h1 class="display-4 fw-bold">TASFIYAH</h1>
        <h3 class="text-danger">Tour And Travel</h3>
        <div class="button mt-4">
          <!-- <a href="https://wa.me/6285864479332" class="btn btn-outline-danger px-4 py-2"
            >Pekerjakan Saya</a
          > -->
          <router-link class="btn btn-outline-danger px-4 py-2" to="/about">About Us</router-link>
          <router-link class="btn btn-outline-danger px-4 py-2" to="/wisata">Orders</router-link>
          <!-- <a href="#contact" class="btn btn-danger px-4 py-2">Tentang Saya</a> -->
        </div>
      </div>
      <div class="col-md-6">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="true">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt="1">
            </div>
            <div class="carousel-item">
              <img src="https://images.unsplash.com/photo-1560674457-12073ed6fae6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXxlbnwwfHwwfHx8MA%3D%3D" class="d-block w-100" alt="2">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
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
};
</script>

<style>
.progress{
    height: 30px;
    border-radius: 50px;
    transition: all 0.5 ease;
}

.progress:hover{
    transform: scale(1.1);
}

.card{
    transition: all 0.5 ease;
}

.card img{
    width: 280px;
    height: 230px;
    margin: auto;
}

.card:hover{
    transform: scale(1.1);
    box-shadow: 1px 2px 10px black;
}
</style>

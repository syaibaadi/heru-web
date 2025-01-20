<template>
  <div class="checkout-container">
    <h2>Form Checkout</h2>

    <form @submit.prevent="submitCheckout" class="checkout-form">
      <!-- Data Pesanan -->
      <div class="container mb-5 mt-5">
        <div class="row">
          <!-- Informasi Pesanan -->
          <div class="col-6">
            <h4>Data Pesanan</h4>
            <div v-if="orderData">
              <p><strong>Nama Wisata:</strong> {{ orderData.name }}</p>
              <p><strong>Deskripsi:</strong> {{ orderData.description }}</p>
              <p><strong>Harga:</strong> Rp {{ orderData.price }}</p>
            </div>
          </div>

          <!-- Form Checkout -->
          <div class="col-6 d-flex flex-column justify-content-center">
            <h4>Checkout Form</h4>
            <div>
              <label for="fullname">Nama Lengkap</label>
              <input
                type="text"
                id="fullname"
                v-model="checkoutData.fullname"
                required
              />
              
              <label for="phone">Nomor Telepon</label>
              <input type="text" id="phone" v-model="checkoutData.phone" required />

              <label for="address">Alamat</label>
              <input
                type="text"
                id="address"
                v-model="checkoutData.address"
                required
              />

              <label for="bookdate">Rencana Tanggal</label>
              <input
                type="datetime-local"
                id="bookdate"
                v-model="checkoutData.bookdate"
                required
              />

              <label for="users">Jumlah Peserta</label>
              <input
                type="text"
                id="users"
                v-model="checkoutData.total_user"
                required
              />

              <label for="descripsi">Deskripsi Penjemputan</label>
              <textarea
                id="description"
                v-model="checkoutData.description"
                rows="4"
                required
              ></textarea>
              
              <label for="confirmOrder">
                <input
                  type="checkbox"
                  id="confirmOrder"
                  v-model="checkoutData.confirmOrder"
                />
                Saya yakin dengan pesanan ini
              </label>

              <button
                type="submit"
                :disabled="!isFormValid"
                class="btn btn-primary"
              >
                Proses Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
  
<script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        // Data pesanan yang sudah ada
        orderData: {},
        orderan: null,
        // Data untuk checkout
        checkoutData: {
          fullname: "",
          email: "",
          address: "",
          phone: "",
          paymentMethod: "credit_card",
          confirmOrder: false
        }
      };
    },
    computed: {
      // Validasi form sebelum submit
      isFormValid() {
        return (
          this.checkoutData.fullname &&
          this.checkoutData.email &&
          this.checkoutData.address &&
          this.checkoutData.phone &&
          this.checkoutData.paymentMethod &&
          this.checkoutData.confirmOrder
        );
      }
    },
    mounted(){
      this.getData();
    },
    methods: {
        async getData(){
            const wisataId = this.$route.params.id;
            const response = await fetch(`http://103.250.11.13:8000/wisata/${wisataId}`, {
                method: 'GET'
            });

            if(!response.ok){
                throw new Error("Failed Get Data Wisata");
            }

            const data = await response.json();
            this.orderData = data;
            console.log(data);
        },
        async submitCheckout() {
        try {
          // Menyiapkan payload untuk dikirim ke server
          const payload = {
            orderData: this.orderData,
            checkoutData: this.checkoutData
          };
  
          // Kirim data ke server menggunakan Axios
          const response = await axios.post("http://103.250.11.13:8000/transaksi", payload);
  
          // Menangani respon sukses
          console.log("Pesanan berhasil diproses:", response.data);
          alert("Pesanan berhasil diproses!");
        } catch (error) {
          // Menangani error jika ada
          console.error("Terjadi kesalahan saat memproses pesanan:", error);
          alert("Terjadi kesalahan. Silakan coba lagi.");
        }
        }
    }
  };
  </script>

<style scoped>
/* Styling untuk form */
.checkout-container {
  max-width: 800px;  /* Memperbesar lebar container */
  margin: auto;
  padding: 30px;  /* Memperbesar padding agar lebih lega */
  background-color: #f9f9f9;
  border-radius: 8px;
}

.checkout-form {
  display: flex;
  flex-direction: column;
}

.checkout-form label {
  margin-bottom: 10px; /* Tambah jarak antar label */
  font-size: 16px; /* Memperbesar ukuran font label */
}

.checkout-form input,
.checkout-form select,
.checkout-form textarea {
  margin-bottom: 20px; /* Menambah jarak antar input */
  padding: 12px; /* Memperbesar padding input */
  font-size: 16px; /* Memperbesar ukuran font input */
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;  /* Agar input mengisi penuh lebar container */
}

.checkout-form button {
  padding: 12px 20px; /* Memperbesar ukuran tombol */
  font-size: 18px; /* Memperbesar ukuran font tombol */
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;  /* Membuat tombol selebar container */
}

.checkout-form button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

h4 {
  font-size: 24px; /* Memperbesar ukuran font judul */
  margin-bottom: 20px; /* Menambah jarak di bawah judul */
}

.container {
  max-width: 100%;  /* Memastikan container tidak terbatas */
}

.col-6 {
  flex: 1;
  padding: 10px;  /* Menambah jarak dalam kolom */
}

/* Styling untuk checkbox */
.checkout-form label input[type="checkbox"] {
  margin-right: 10px;  /* Memberikan jarak antara checkbox dan teks */
}
</style>

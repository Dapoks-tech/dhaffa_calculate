// Fungsi untuk menambahkan angka atau operator ke layar
function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
  }
  
  // Fungsi untuk menghitung hasil dari ekspresi matematika
  function calculateResult() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value); // Menggunakan eval() untuk perhitungan
    } catch {
      display.value = "Error";
    }
  }
  
  // Fungsi untuk menghapus semua teks di layar
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Fungsi untuk menghapus karakter terakhir di layar
  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
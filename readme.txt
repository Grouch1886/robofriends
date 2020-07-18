Aplikasi ini dibuat dengan menggunakan React.JS. Untuk source-code aplikasi yang telah dibuat, bisa di buka di direktori \robofriends\src. 
Buka direktori components untuk melihat source-code component yang ada di dalam aplikasi, dan buka containers untuk melihat 'wadah' source-code aplikasi ini.

Deksripsi aplikasi:
1. Terdapat 2 komponen utama dalam aplikasi ini, yaitu: 
- Kartu
- Kotak Pencarian
2. Untuk daftar nama & email yang tampil di dalam aplikasi, saya fetch (mengambilnya) secara online (API), yaitu dari: https://jsonplaceholder.typicode.com/users. Saya hanya mengambil untuk id, nama, dan email.
3. Terdapat 2 jenis scrolling pada aplikasi ini, yaitu:
- Scrolling ke bawah/atas secara penuh (scroll yang paling kanan)
- Scrolling ke bawah/atas hanya di bagian kartu, Dimana ketika kita scroll ke bawah/atas di bagian kartu, kotak pencarian akan tetap berada di atas. Tujuannya adalah supaya tidak repot mencari search box ketika kita meng-scroll ke bawah, karena search box akan terus tetap berada di bagian atas layar. 
4. Tampilan aplikasi sudah responsive. Jadi, tampilan akan menyesuaikan/beradaptasi ketika dibuka sesuai dengan device yang digunakan.
5. Menggunakan font tambahan untuk header (Robofriends, yang tampil di bagian tengah atas layar).
6. Warna background aplikasi ini menggunakan warna gradien (dari kiri ke kanan).
7. Kita dapat mencari nama robot yang telah terdaftar di kotak pencarian, lalu robot akan tampil jika di dalam kotak pencarian ada huruf yang sesuai dengan nama robot yang telah terdaftar. Jika tidak ada yang sesuai, maka tampilan di bagian kartu akan kosong.

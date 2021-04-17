## Daftar Isi

- Daftar Isi
- Pengertian
- Email
- Bot Telegram
    - Topologi Jaringan
    - Membuat Bot
    - Melihat Chat ID
    - Pengecekan
    - Konfigurasi Netwach Script UP & Down
    - Konfigurasi DHCP Lease Netwatch

## Pengertian	

Netwatch merupakan salah satu fitur MikroTik yang berfungsi untuk memonitor kondisi host.  Netwatch memonitor keadaan host di jaringan Mikrotik dengan cara mengirimkan ping ICMP ke alamat IP tertentu. Untuk setiap entri dalam tabel netwatch Anda dapat menentukan alamat IP, interval ping, dan skrip konsol. Keuntungan utama dari netwatch adalah kemampuannya untuk mengeluarkan perintah konsol setiap saat ketika terjadi perubahan pada status ping ICMP ke alamat IP tertentu.

## Email

Ada kasus dimana kita harus memonitor keadaan sebuah host yang bisa jadi merupakan hot yang sangat penting sehingga jika terjadi sesuatu terhadap host, Admin jaringan bisa mendapatkan informasi secepatnya dan bisa melakukan tindakan pencegahan yang juga se-responsif mungkin. Akan sangat tidak efisien jika admin jaringan harus remote atau monitor server dalam waktu 24 jam. Untuk mempermudah monitoring, MikroTik menyediakan fitur Netwatch.

GAMBAR
 
Fitur ini bisa diakses dari menu **“Tools” -> “Netwatch”**. Ketika kita klik tombol plus (+), 
kita bisa isikan ip address host yang akan dimonitoring.
- **Host:** Informasi IP address device yang akan dimonitoring.
- **Interval:** Netwatch berkerja dengan mengirimkan ping. Pada parameter interval, kita bisa setting jangka waktu router untuk mengirimkan ping untuk mengecek kondisi host.
- **Time Out:** Jangka waktu berapa lama host akan dianggap down jika ping yang dikirim dari router tidak mendapat respon (unreachable).

Pada gambar diatas, kita bisa lihat bahwa setting netwatch akan memonitoring host dengan **IP Address: 20.20.20.20** Informasi status tertera **"up"** karena router bisa melakukan ping ke IP address tersebut. Jika router gagal mengirimkan ping, maka status akan berubah menjadi **"down"**.

Kebutuhan selanjutnya ketika ada perubahan status, router akan mengirimkan email notifikasi, sehinga admin jaringan bisa tahu secepatnya dan bisa melakukan tindaka yang diperlukan. 

Agar router dapat mengirimkan email, kita perlu setting email server di menu **“Tools” -> “Email”**.

**Script:**

```
/tool e-mail set address=74.125.68.109 port=587 user=(Email Anda) password=(Password Email Anda) start-tls=yes from=(Nama Pengirim)
```

Sebelum lanjut atur dulu pengamanan email yang anda berikan pada mikrotik, berikut:
 
Buka pengaturan email anda.
 
Lalu klik ”Keamanan” -> kses aplikasi yang kurang aman “Nonaktifkan akses (disanrankan)”.

Izinkan aplikasi yang kurang aman: AKTIF. (Silahkan diaktifkan atau check list).

Tanpa setting lebih lanjut, Netwatch hanya menampilkan informasi status host yang dimonitoring, up atau down. Agar router dapat memberikan notifikasi ketika host berubah status, kita bisa tuliskan script pada Tab **"UP"** dan Tab **"DOWN"**. 

Script ada tab "Up" akan dijalankan jika host yang dimonitoring  terkoneksi dengan baik. Pada contoh kasus kali ini, kita akan set agar router segera mengirim email notifikasi ketika ada erubahan status, maka kita perlu tambahkan script pada setting Tab "UP" dan Tab "Down". 

Contoh untuk script yang akan dijalankan ketika status berbah menjadi "UP".
 
**Script "UP":**

```
/tool e-mail send to=(Email Tujuan) subjec="Router UP" body=("Router UP ".[/system clock get time]."") start-tls=yes
```

Dan script pada tab "Down" akan dijalankan jika host tidak dapat di ping dari router. 
 
**Script "Down":**

```
/tool e-mail send to=(Email Tujuan) subjec="Router UP" body=("Router UP ".[/system clock get time]."") start-tls=yes
```

Dengan script diatas, router akan segera mengirikan notifikasi email pada saat host down dan juga akan mengirimkan email notifikasi pada saat router kembali up.
 
Script yang bisa dijalankan juga tidak hanya script mengirim email, kita bisa buat custom script jika kita familiar dengan scripting di MikroTik. Manual mengenai scripting di mikrotik bisa Anda dalami disini :  http://wiki.mikrotik.com/wiki/Manual:Scripting
 
## Bot Telegram

Telegram adalah sebuah aplikasi multiplatform yang berfungsi sebagai pengirim pesan instan berbasis cloud yang bersifat gratis/free dan nirlaba. Klien Telegram tersedia untuk perangkat Android, iOS, Windows Phone, Ubuntu Touch dan sistem perangkat komputer berbasis OS Windows, OS X, Linux. Para user dapat mengirim pesan dan mengirim foto, mengirim video, mengirim stiker, mengirim audio, dan mengirim tipe berkas lainnya. Kelebihan telegram dibandingkan dengan aplikasi pengirim pesan lainya yaitu pesan yang dikirim oleh telegram terenkripsi dengan baik.

### Topologi Jaringan

Topologi jaringan yang saya gunakan yaitu Modem -> Mikrotik -> Client.

### Membuat Bot

Langkah selanjutnya yaitu membuat bot telegram, dalam pencarian carilah @BotFather lalu klik “start” dan pilihlah /newbot
 
Anda akan diminta untuk memasukkan nama bot yang akan dibuat, nama tersebut harus berakhiran dengan kata ‘bot’ sebagai contoh saya membuatnya dengan nama utikutikbot.
Apabila proses verifikasi berhasil dan nama bot yang dibuat tidak digunakan oleh orang lain maka bot tersebut dapat kita gunakan.
 	 
Cari bot yang telah kita buat dan klik start
Apabila Bot berhasil dibuat akan muncul informasi Token HTTP API, catat dan simpanlah informasi Token yang nanti akan kita gunakan di langkah selanjutnya.
 

### Melihat Chat ID

Untuk melihat Chat ID yaitu dengan menggunakan perintah getUpdates pada browser kita: https://api.telegram.org/bot(Token Anda)/getUpdates lalu akan muncul informasi chat id sebagai berikut:
 
Chat ID dengan perintah getUpdates catat dan simpanlah chat id anda.

### Pengecekan

Untuk mengecek anda dapat menggunakan alamat dibawah ini di browser:
https://api.telegram.org/bot(token anda)/sendMessage?chat_id=(chat id anda)&text=Ping AP Bullet UP
 
Apabila berhasil pesan akan masuk ke telegram anda
 
### Konfigurasi Netwach Script UP & Down

Setelah proses membuat bot berhasil kita tinggal memasukkannya kedalam netwach dengan Skrip:

```
:local CHID "XXXXXXXX"; (chat id)
:local BotID "XXXXXXXX-XXXXXXXXXXXXXXXXXXXXX"; (token dari BotFather)
:local HostStatus "down"; (untuk tab down) & "up"; (untuk tab up)
:local message "Ping $host $HostStatus";
/tool fetch url="https://api.telegram.org/bot$BotID/sendmessage\?chat_id=$CHID&text=$message";
```
 
Anda bisa membukanya dengan cara masuk ke Winbox menu “Tools” -> “Netwatch”.
 
Untuk menguji apakah skrip yang di masukkan kedalam netwach berjalan dengan baik anda bisa mencobanya dengan men-disable dan men-enable kan saja.
 
 
### Konfigurasi DHCP Lease Netwatch

Script ini akan otomatis memonitoring client yang terhubung ke DHCP Server Lease kemudian IP/Host Client tersebut akan dimasukkan kedalam Tool –> Netwatch, apabila host tersebut Up atau Down maka akan mengirimkan informasi ke Bot Telegram. Netwatch akan dihapus ketika IP/Host yang dimonitorng terhapus di DHCP Lease.

**Script di DHCP Server:**

```
:if ($leaseBound = "1") do={/tool netwatch add interval=00:00:05 down-script=":local BotID \"921464062:AAEbClkWr_r2dP5YBaVL009wRtOXb1Y_C6Q\
    \";\r\
    \n:local CHID \"-307150890\";\r\
    \n:local avgRtt;\r\
    \n:local pin\r\
    \n:local pout\r\
    \n:local datetime \"\$[/system clock get date] \$[/system clock get time]\
    \"\r\
    \n:local hostname [[/ip dhcp-server lease get [find address=\$host] host-n\
    ame]]\r\
    \n:local mac [[/ip dhcp-server lease get [find address=\$host] mac-address\
    ]]\r\
    \n:local server [[/ip dhcp-server lease get [find address=\$host] active-s\
    erver]]\r\
    \n#Ping it real good\r\
    \n/tool flood-ping \$host count=10 do={\r\
    \n:if (\$sent = 10) do={\r\
    \n:set avgRtt \$\"avg-rtt\"\r\
    \n:set pout \$sent\r\
    \n:set pin \$received\r\
    \n}\r\
    \n}\r\
    \n:local ploss (100 - ((\$pin * 100) / \$pout))\r\
    \n:local logmsg (\"Ping Average for \$host - \".[:tostr \$avgRtt].\"ms - p\
    acket loss: \".[:tostr \$ploss].\"%\")\r\
    \n:log info \$logmsg\r\
    \n:local text \"Router Id:* \$[/system identity get name] * %0A\\\r\
    \nTanggal : _\$datetime_%0A\\\r\
    \nPing : _\$host_%0A\\\r\
    \nHost Name : _\$hostname_%0A\\\r\\
    \nMAC : _\$mac_%0A\\\r\\
    \nServer : _\$server_%0A\\\r\\
    \nLog : _\$logmsg_\"\r\
    \n/tool fetch url=\"https://api.telegram.org/bot\$BotID/sendmessage\?chat_\
    id=\$CHID&text=\$text\" keep-result=no;\r\
    \n" host=$leaseActIP up-script=":local BotID \"921464062:AAEbClkWr_r2dP5YBaVL009wRtOXb1Y_C6Q\
    \";\r\
    \n:local CHID \"-307150890\";\r\
    \n:local avgRtt;\r\
    \n:local pin\r\
    \n:local pout\r\
    \n:local datetime \"\$[/system clock get date] \$[/system clock get time]\
    \"\r\
    \n:local hostname [[/ip dhcp-server lease get [find address=\$host] host-n\
    ame]]\r\
    \n:local mac [[/ip dhcp-server lease get [find address=\$host] mac-address\
    ]]\r\
    \n:local server [[/ip dhcp-server lease get [find address=\$host] server]]\
    \r\
    \n#Ping it real good\r\
    \n/tool flood-ping \$host count=10 do={\r\
    \n:if (\$sent = 10) do={\r\
    \n:set avgRtt \$\"avg-rtt\"\r\
    \n:set pout \$sent\r\
    \n:set pin \$received\r\
    \n}\r\
    \n}\r\
    \n:local ploss (100 - ((\$pin * 100) / \$pout))\r\
    \n:local logmsg (\"Ping Average for \$host - \".[:tostr \$avgRtt].\"ms - p\
    acket loss: \".[:tostr \$ploss].\"%\")\r\
    \n:log info \$logmsg\r\
    \n:local text \"Router Id:* \$[/system identity get name] * %0A\\\r\
    \nTanggal : _\$datetime_%0A\\\r\
    \nPing : _\$host_%0A\\\r\
    \nHost Name : _\$hostname_%0A\\\r\\
    \nMAC : _\$mac_%0A\\\r\\
    \nServer : _\$server_%0A\\\r\\
    \nLog : _\$logmsg_\"\r\
    \n/tool fetch url=\"https://api.telegram.org/bot\$BotID/sendmessage\?chat_\
    id=\$CHID&text=\$text\" keep-result=no;\r\
    \n"
} else={
/tool netwatch remove [find host=$leaseActIP]
}
```

Simpan Script ini di DHCP Server lalu pilih DHCP Server yang akan di Monitoring
 
Script ini akan membuat Netwatch baru apabila di DHCP Server Lease terdapat IP/Host baru yang terhubung ke DHCP Server
 
Hasilnya IP yang terhubung ke DHCP Server akan di Monitoring.
 
**Sumber Skrip Mikrotik:** https://pastebin.com/F5f4D0xg

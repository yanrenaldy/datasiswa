var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var path2 = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var conn = mysql.createConnection({
  host: "localhost", //nama host database mysql
  user: "root", //user mysql
  password: "", //password mysql
  database: "siswaMetho",
});

conn.connect((err) => {
  if (err) console.log("Problem with MySQL " + err);
  else {
    console.log("Connected with Database");
  }
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  if (req.method === "OPTIONS") {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    return res.status(200).json({});
  }
  next();
});

app.use(
  "/server/images",
  express.static(path2.join(__dirname, "server/images"))
);

app.get("/tahunajaran", (req, res) => {
  conn.query(
    "show tables from siswaMetho where Tables_in_siswaMetho like 'dataSiswa%'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.get("/daftarkelas", (req, res) => {
  conn.query("select * from daftarKelas", (err, rows) => {
    res.json(rows);
  });
});

app.get("/datasiswa/:kelas&:ta", (req, res) => {
  var kelas = req.params.kelas;
  var ta = req.params.ta;
  conn.query(
    "select * from " + ta + " where kelas='" + kelas + "'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.get("/siswa/:id&:ta", (req, res) => {
  var ta = req.params.ta;
  var id = req.params.id;
  conn.query("select * from " + ta + " where id=" + id, (err, rows) => {
    res.json(rows);
  });
});

app.post("/datasiswa", (req, res) => {
  var namaSiswa = req.body.namaSiswa;
  var tahunAjaran = req.body.tahunAjaran;
  var kelas = req.body.kelas;
  var jenisKelamin = req.body.jenisKelamin;
  var nis = req.body.nis;
  var nisn = req.body.nisn;
  var nik = req.body.nik;
  var tempatLahirSiswa = req.body.tempatLahirSiswa;
  var tanggalLahirSiswa = req.body.tanggalLahirSiswa;
  var jlhSaudara = req.body.jlhSaudara;
  var agama = req.body.agama;
  var namaAyah = req.body.namaAyah;
  var pekerjaanAyah = req.body.pekerjaanAyah;
  var tempatLahirAyah = req.body.tempatLahirAyah;
  var tanggalLahirAyah = req.body.tanggalLahirAyah;
  var pendidikanAyah = req.body.pendidikanAyah;
  var penghasilanAyah = req.body.penghasilanAyah;
  var namaIbu = req.body.namaIbu;
  var pekerjaanIbu = req.body.pekerjaanIbu;
  var tempatLahirIbu = req.body.tempatLahirIbu;
  var tanggalLahirIbu = req.body.tanggalLahirIbu;
  var pendidikanIbu = req.body.pendidikanIbu;
  var penghasilanIbu = req.body.penghasilanIbu;
  var namaWali = req.body.namaWali;
  var pekerjaanWali = req.body.pekerjaanWali;
  var tempatLahirWali = req.body.tempatLahirWali;
  var tanggalLahirWali = req.body.tanggalLahirWali;
  var pendidikanWali = req.body.pendidikanWali;
  var penghasilanWali = req.body.penghasilanWali;
  var jenisTinggal = req.body.jenisTinggal;
  var noHandphone = req.body.noHandphone;
  var alamat = req.body.alamat;
  var tinggiAnak = req.body.tinggiAnak;
  var beratAnak = req.body.beratAnak;
  var berkebutuhanKhusus = req.body.berkebutuhanKhusus;
  var jarakRumah = req.body.jarakRumah;
  var alatTransportasi = req.body.alatTransportasi;
  var emailSiswa = req.body.emailSiswa;
  var query =
    "insert into " +
    tahunAjaran +
    " (namaSiswa, kelas, jenisKelamin, nis, nisn, nik, tempatLahirSiswa, tanggalLahirSiswa, jlhSaudara, agama, namaAyah, pekerjaanAyah, tempatLahirAyah, tanggalLahirAyah, pendidikanAyah, penghasilanAyah, namaIbu, pekerjaanIbu, tempatLahirIbu, tanggalLahirIbu, pendidikanIbu, penghasilanIbu, namaWali, pekerjaanWali, tempatLahirWali, tanggalLahirWali, pendidikanWali, penghasilanWali, jenisTinggal, noHandphone, alamat, tinggiAnak, beratAnak, berkebutuhanKhusus, jarakRumah, alatTransportasi, emailSiswa) values ('" +
    namaSiswa +
    "','" +
    kelas +
    "','" +
    jenisKelamin +
    "','" +
    nis +
    "','" +
    nisn +
    "','" +
    nik +
    "','" +
    tempatLahirSiswa +
    "','" +
    tanggalLahirSiswa +
    "','" +
    jlhSaudara +
    "','" +
    agama +
    "','" +
    namaAyah +
    "','" +
    pekerjaanAyah +
    "','" +
    tempatLahirAyah +
    "','" +
    tanggalLahirAyah +
    "','" +
    pendidikanAyah +
    "','" +
    penghasilanAyah +
    "','" +
    namaIbu +
    "','" +
    pekerjaanIbu +
    "','" +
    tempatLahirIbu +
    "','" +
    tanggalLahirIbu +
    "','" +
    pendidikanIbu +
    "','" +
    penghasilanIbu +
    "','" +
    namaWali +
    "','" +
    pekerjaanWali +
    "','" +
    tempatLahirWali +
    "','" +
    tanggalLahirWali +
    "','" +
    pendidikanWali +
    "','" +
    penghasilanWali +
    "','" +
    jenisTinggal +
    "','" +
    noHandphone +
    "','" +
    alamat +
    "','" +
    tinggiAnak +
    "','" +
    beratAnak +
    "','" +
    berkebutuhanKhusus +
    "','" +
    jarakRumah +
    "','" +
    alatTransportasi +
    "','" +
    emailSiswa +
    "')";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.post("/daftarkelas", (req, res) => {
  var namaKelas = req.body.namaKelas;
  var query =
    "insert into daftarKelas (namaKelas) values ('" + namaKelas + "')";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.post("/salinta", (req, res) => {
  var taLama = req.body.taLama;
  var taBaru = req.body.taBaru;
  var query = "create table dataSiswa" + taBaru + " like " + taLama;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.post("/salinta2", (req, res) => {
  var taLama = req.body.taLama;
  var taBaru = req.body.taBaru;
  var query = "insert into dataSiswa" + taBaru + " select * from " + taLama;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.put("/datasiswa/:id&:ta", (req, res) => {
  var namaSiswa = req.body.namaSiswa;
  var kelas = req.body.kelas;
  var jenisKelamin = req.body.jenisKelamin;
  var nis = req.body.nis;
  var nisn = req.body.nisn;
  var nik = req.body.nik;
  var tempatLahirSiswa = req.body.tempatLahirSiswa;
  var tanggalLahirSiswa = req.body.tanggalLahirSiswa;
  var jlhSaudara = req.body.jlhSaudara;
  var agama = req.body.agama;
  var namaAyah = req.body.namaAyah;
  var pekerjaanAyah = req.body.pekerjaanAyah;
  var tempatLahirAyah = req.body.tempatLahirAyah;
  var tanggalLahirAyah = req.body.tanggalLahirAyah;
  var pendidikanAyah = req.body.pendidikanAyah;
  var penghasilanAyah = req.body.penghasilanAyah;
  var namaIbu = req.body.namaIbu;
  var pekerjaanIbu = req.body.pekerjaanIbu;
  var tempatLahirIbu = req.body.tempatLahirIbu;
  var tanggalLahirIbu = req.body.tanggalLahirIbu;
  var pendidikanIbu = req.body.pendidikanIbu;
  var penghasilanIbu = req.body.penghasilanIbu;
  var namaWali = req.body.namaWali;
  var pekerjaanWali = req.body.pekerjaanWali;
  var tempatLahirWali = req.body.tempatLahirWali;
  var tanggalLahirWali = req.body.tanggalLahirWali;
  var pendidikanWali = req.body.pendidikanWali;
  var penghasilanWali = req.body.penghasilanWali;
  var jenisTinggal = req.body.jenisTinggal;
  var noHandphone = req.body.noHandphone;
  var alamat = req.body.alamat;
  var tinggiAnak = req.body.tinggiAnak;
  var beratAnak = req.body.beratAnak;
  var berkebutuhanKhusus = req.body.berkebutuhanKhusus;
  var jarakRumah = req.body.jarakRumah;
  var alatTransportasi = req.body.alatTransportasi;
  var emailSiswa = req.body.emailSiswa;
  var ta = req.params.ta;
  var id = req.params.id;
  var query =
    "update " +
    ta +
    " set namaSiswa = '" +
    namaSiswa +
    "', kelas ='" +
    kelas +
    "', jenisKelamin ='" +
    jenisKelamin +
    "', nis ='" +
    nis +
    "', nisn ='" +
    nisn +
    "', nik ='" +
    nik +
    "', tempatLahirSiswa ='" +
    tempatLahirSiswa +
    "', tanggalLahirSiswa ='" +
    tanggalLahirSiswa +
    "', jlhSaudara ='" +
    jlhSaudara +
    "', agama ='" +
    agama +
    "', namaAyah ='" +
    namaAyah +
    "', pekerjaanAyah ='" +
    pekerjaanAyah +
    "', tempatLahirAyah ='" +
    tempatLahirAyah +
    "', tanggalLahirAyah ='" +
    tanggalLahirAyah +
    "', pendidikanAyah ='" +
    pendidikanAyah +
    "', penghasilanAyah ='" +
    penghasilanAyah +
    "', namaIbu ='" +
    namaIbu +
    "', pekerjaanIbu ='" +
    pekerjaanIbu +
    "', tempatLahirIbu ='" +
    tempatLahirIbu +
    "', tanggalLahirIbu ='" +
    tanggalLahirIbu +
    "', pendidikanIbu ='" +
    pendidikanIbu +
    "', penghasilanIbu ='" +
    penghasilanIbu +
    "', namaWali ='" +
    namaWali +
    "', pekerjaanWali ='" +
    pekerjaanWali +
    "', tempatLahirWali ='" +
    tempatLahirWali +
    "', tanggalLahirWali ='" +
    tanggalLahirWali +
    "', pendidikanWali ='" +
    pendidikanWali +
    "', penghasilanWali ='" +
    penghasilanWali +
    "', jenisTinggal ='" +
    jenisTinggal +
    "', noHandphone ='" +
    noHandphone +
    "', alamat ='" +
    alamat +
    "', tinggiAnak ='" +
    tinggiAnak +
    "', beratAnak ='" +
    beratAnak +
    "', berkebutuhanKhusus ='" +
    berkebutuhanKhusus +
    "', jarakRumah ='" +
    jarakRumah +
    "', alatTransportasi ='" +
    alatTransportasi +
    "', emailSiswa ='" +
    emailSiswa +
    "' where id = " +
    id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.put("/naikkelas/:ta", (req, res) => {
  var ta = req.params.ta;
  var kelasBefore = req.body.kelasBefore;
  var kelasAfter = req.body.kelasAfter;
  var query =
    "update " +
    ta +
    " set kelas='" +
    kelasAfter +
    "' where kelas='" +
    kelasBefore +
    "'";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.put("/daftarkelas", (req, res) => {
  var namaKelas = req.body.namaKelas;
  var id = req.body.id;
  var query =
    "update daftarKelas set namaKelas='" + namaKelas + "' where id=" + id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.delete("/datasiswa/:id&:ta", (req, res) => {
  var id = req.params.id;
  var ta = req.params.ta;
  var query = "delete from " + ta + " where id='" + id + "'";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.delete("/daftarkelas/:id", (req, res) => {
  var id = req.params.id;
  var query = "delete from daftarKelas where id=" + id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

http.createServer(app).listen(8087, () => {
  console.log("Server is running on port 8087");
});

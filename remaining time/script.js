const gunE = document.getElementById("gun");
const saatE = document.getElementById("saat");
const dakikaE = document.getElementById("dakika");
const saniyeE = document.getElementById("saniye");

const gecmisgunE = document.getElementById("gecmisgun");
const gecmissaatE = document.getElementById("gecmissaat");
const gecmisdakikaE = document.getElementById("gecmisdakika");
const gecmissaniyeE = document.getElementById("gecmissaniye");

const yeniyil = "1 Jan 2023";
const gecmis = "1 Jan 2022";
function gerisayim() {
  const yeniyilzaman = new Date(yeniyil);
  const suan = new Date();

  const kalansaniye = (yeniyilzaman - suan) / 1000;
  const gun = Math.floor(kalansaniye / 3600 / 24);
  const saat = Math.floor(kalansaniye / 3600) % 24;
  const dakika = Math.floor(kalansaniye / 60) % 60;
  const saniye = Math.floor(kalansaniye) % 60;

  gunE.innerHTML = gun;
  saatE.innerHTML = kontrol(saat);
  dakikaE.innerHTML = kontrol(dakika);
  saniyeE.innerHTML = kontrol(saniye);
}
function nekadargecti() {
  const simdi = new Date();
  const gecmisy = new Date(gecmis);

  const gecensaniye = (simdi - gecmisy) / 1000;
  const gecmisgun = Math.floor(gecensaniye / 3600 / 24);
  const gecmissaat = Math.floor(gecensaniye / 3600) % 24;
  const gecmisdakika = Math.floor(gecensaniye / 60) % 60;
  const gecmissaniye = Math.floor(gecensaniye) % 60;

  gecmisgunE.innerHTML = gecmisgun;
  gecmissaatE.innerHTML = kontrol(gecmissaat);
  gecmisdakikaE.innerHTML = kontrol(gecmisdakika);
  gecmissaniyeE.innerHTML = kontrol(gecmissaniye);
}
function degerlendirme() {

  gyil++;
  yil++;
  yeniyil = "1 Jan " + yil;
  gecmis = "1 Jan " + gyil;
}

function kontrol(kontrol) {
  return kontrol < 10 ? `0${kontrol}` : kontrol;
}

gerisayim();
nekadargecti();
setInterval(gerisayim, 1000);
setInterval(nekadargecti, 1000);

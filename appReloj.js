const seconds = document.querySelector(".segundo");
const minute = document.querySelector(".minuto");
const hor = document.querySelector(".hora");
const relojColor = document.querySelector(".reloj");
const diasemana = document.getElementById("diaSemana");
const day = document.getElementById("dia");
const month = document.getElementById("mes");
const year = document.getElementById("year");
const h = document.getElementById("hour");
const m = document.getElementById("minute");
const s = document.getElementById("seconds");
const signo = document.getElementById("signo");
const img = document.getElementById("img");
const signo2 = document.getElementById("signo2");
const img2 = document.getElementById("img2");
const signo3 = document.getElementById("signo3");
const img3 = document.getElementById("img3");
const dat = document.querySelector(".fecha");
const submit = document.querySelector(".submit");
let semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
];
//con el numero de get() day se asigna el dia con el array
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
let tiempo = new Date();
let fech = tiempo.getDate();
let mes = tiempo.getMonth();
let año = tiempo.getFullYear();
function zodiaco(fech,mes) {
  if ((mes === 11 && fech >= 22) || (mes === 0 && fech <= 20)) {
    signo.textContent = "Capricornio";
    img.style.backgroundImage =
      "url(imagenes/shutterstock_1094544740-e1560007878303.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 0 && fech >= 21) || (mes === 1 && fech <= 19)) {
    signo.textContent = "Acuario";
    img.style.backgroundImage = "url(imagenes/hqdefault.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 1 && fech >= 20) || (mes === 2 && fech <= 20)) {
    signo.textContent = "Piscis";
    img.style.backgroundImage = "url(imagenes/piscis.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 2 && fech >= 21) || (mes === 3 && fech <= 20)) {
    signo.textContent = "Aries";
    img.style.backgroundImage = "url(imagenes/aries.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 3 && fech >= 21) || (mes === 4 && fech <= 20)) {
    signo.textContent = "Tauro";
    img.style.backgroundImage = "url(imagenes/tauro.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 4 && fech >= 21) || (mes === 5 && fech <= 24)) {
    signo.textContent = "Geminis";
    img.style.backgroundImage = "url(imagenes/geminis.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 5 && fech >= 25) || (mes === 6 && fech <= 22)) {
    signo.textContent = "Cancer";
    img.style.backgroundImage = "url(imagenes/cancer.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 6 && fech >= 23) || (mes === 7 && fech <= 23)) {
    signo.textContent = "Leo";
    img.style.backgroundImage = "url(imagenes/leo.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 7 && fech >= 24) || (mes === 8 && fech <= 23)) {
    signo.textContent = "Virgo";
    img.style.backgroundImage = "url(imagenes/virgo.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 8 && fech >= 24) || (mes === 9 && fech <= 22)) {
    signo.textContent = "Libra";
    img.style.backgroundImage = "url(imagenes/libra.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 9 && fech >= 23) || (mes === 10 && fech <= 22)) {
    signo.textContent = "Escorpio";
    img.style.backgroundImage = "url(imagenes/escorpio.jpg)";
    img.style.backgroundSize = "cover";
  } else if ((mes === 10 && fech >= 23) || (mes === 11 && fech <= 21)) {
    signo.textContent = "Sagitario";
    img.style.backgroundImage = "url(imagenes/sagitario.jpg)";
    img.style.backgroundSize = "cover";
  }
}
function sideral(fech,mes) {
  if ((mes === 0 && fech >= 9) || (mes === 1 && fech <= 15)) {
    signo2.textContent = "Capricornio";
    img2.style.backgroundImage =
      "url(imagenes/shutterstock_1094544740-e1560007878303.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 1 && fech >= 16) || (mes === 2 && fech <= 11)) {
    signo2.textContent = "Acuario";
    img2.style.backgroundImage = "url(imagenes/hqdefault.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 2 && fech >= 12) || (mes === 3 && fech <= 18)) {
    signo2.textContent = "Piscis";
    img2.style.backgroundImage = "url(imagenes/piscis.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 3 && fech >= 19) || (mes === 4 && fech <= 13)) {
    signo2.textContent = "Aries";
    img2.style.backgroundImage = "url(imagenes/aries.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 4 && fech >= 14) || (mes === 5 && fech <= 19)) {
    signo2.textContent = "Tauro";
    img2.style.backgroundImage = "url(imagenes/tauro.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 5 && fech >= 20) || (mes === 6 && fech <= 20)) {
    signo2.textContent = "Geminis";
    img2.style.backgroundImage = "url(imagenes/geminis.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 6 && fech >= 21) || (mes === 7 && fech <= 9)) {
    signo2.textContent = "Cancer";
    img2.style.backgroundImage = "url(imagenes/cancer.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 7 && fech >= 10) || (mes === 8 && fech <= 15)) {
    signo2.textContent = "Leo";
    img2.style.backgroundImage = "url(imagenes/leo.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 8 && fech >= 16) || (mes === 9 && fech <= 30)) {
    signo2.textContent = "Virgo";
    img2.style.backgroundImage = "url(imagenes/virgo.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 9 && fech >= 31) || (mes === 10 && fech <= 22)) {
    signo2.textContent = "Libra";
    img2.style.backgroundImage = "url(imagenes/libra.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 10 && fech >= 23) || (mes === 10 && fech <= 29)) {
    signo2.textContent = "Escorpio";
    img2.style.backgroundImage = "url(imagenes/escorpio.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 10 && fech >= 30) || (mes === 11 && fech <= 17)) {
    signo2.textContent = "Ofiuco";
    img2.style.backgroundImage = "url(imagenes/ophiuchus1.jpg)";
    img2.style.backgroundSize = "cover";
  } else if ((mes === 11 && fech >= 18) || (mes === 0 && fech <= 8)) {
    signo2.textContent = "Sagitario";
    img2.style.backgroundImage = "url(imagenes/sagitario.jpg)";
    img2.style.backgroundSize = "cover";
  }
}
function añoChino(año) {
  if (año === 1971 ||año === 1983 ||año === 1995 ||año === 2007 || año === 2019 || año === 2031) {
    signo3.textContent = "Cerdo";
    img3.style.backgroundImage = "url(imagenes/cerdo.png)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1972 ||año === 1984 ||año === 1996 ||año === 2008 || año === 2020 || año === 2032) {
    signo3.textContent = "Rata";
    img3.style.backgroundImage = "url(imagenes/rata.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1973 ||año === 1985 ||año === 1997 ||año === 2009 || año === 2021 || año === 2033) {
    signo3.textContent = "Buey";
    img3.style.backgroundImage = "url(imagenes/buey.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1974 ||año === 1986 ||año === 1998 ||año === 2010 || año === 2022 || año === 2034) {
    signo3.textContent = "Tigre";
    img3.style.backgroundImage = "url(imagenes/tigre.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1975 ||año === 1987 ||año === 1999 ||año === 2011 || año === 2023 || año === 2035) {
    signo3.textContent = "Conejo";
    img3.style.backgroundImage = "url(imagenes/conejo.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1976 ||año === 1988 ||año === 2000 ||año === 2012 || año === 2024 || año === 2036) {
    signo3.textContent = "Dragon";
    img3.style.backgroundImage = "url(imagenes/dragon.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1977 ||año === 1989 ||año === 2001 ||año === 2013 || año === 2025 || año === 2037) {
    signo3.textContent = "Serpiente";
    img3.style.backgroundImage = "url(imagenes/serpiente.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1978 ||año === 1990 ||año === 2002 ||año === 2014 || año === 2026 || año === 2038) {
    signo3.textContent = "Caballo";
    img3.style.backgroundImage = "url(imagenes/caballo.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1979 ||año === 1991 ||año === 2003 ||año === 2015 || año === 2027 || año === 2039) {
    signo3.textContent = "Cabra";
    img3.style.backgroundImage = "url(imagenes/cabra.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1980 ||año === 1992 ||año === 2004 ||año === 2016 || año === 2028 || año === 2040) {
    signo3.textContent = "Mono";
    img3.style.backgroundImage = "url(imagenes/mono.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1981 ||año === 1993 ||año === 2005 ||año === 2017 || año === 2029 || año === 2041) {
    signo3.textContent = "Gallo";
    img3.style.backgroundImage = "url(imagenes/gallo.jpg)";
    img3.style.backgroundSize = "cover";
  } else if (año === 1982 ||año === 1994 ||año === 2006 ||año === 2018 || año === 2030 || año === 2042) {
    signo3.textContent = "Perro";
    img3.style.backgroundImage = "url(imagenes/perro.jpg)";
    img3.style.backgroundSize = "cover";
  }
}
zodiaco(fech,mes);
sideral(fech,mes);
añoChino(año);

submit.addEventListener("click", cambiar);
  function cambiar() {
      // se detiene el intervalo para q las funciones se apliquen y no cambien con el intervalo
    dat.innerHTML ='';
    let form=document.createElement('form');//se crea el formulario y todos sus elementos
    form.setAttribute('name','formulario');
    form.innerHTML='<input  class="formu" name="idia" id="idia" type="number" min="1" max="31"placeholder="Dia" required><input  class="formu" min="1" max="12" name="imes" id="imes"type="number" placeholder="Mes" required><input  class="formu" type="number" name="iaño" min="1970" max="2050" id="iaño" placeholder="Año" required>'
    dat.appendChild(form);
    let boton=document.createElement('button');
    boton.textContent='Ingresar'
    boton.className='boton';
    
    form.appendChild(boton);
    boton.addEventListener('click',remplazar);
    function remplazar(e){
        
        e.preventDefault()       
        let idia=document.getElementById('idia'); //tomamos los id y sus valores creador con el formulario
        let imes=document.getElementById('imes');
        let iaño=document.getElementById('iaño');
        let xdia=idia.value;
        xdia=parseInt(xdia); //transforma xdia a numero
        
        let xmes=imes.value;
        xmes=parseInt(xmes);
        xmes=xmes-1; //trasformar xnes a tipo numero y restarle uno para asignar en array de meses
        let xaño=iaño.value;
        xaño=parseInt(xaño);//trasformar xaño a tipo numero
        console.log(xmes);
        console.log(xdia);
        

        dat.innerHTML=`<p>Dia</p><p>${xdia}</p><p>de</p><p>${meses[xmes]}</p><p>del</p><p>${iaño.value}</p>`;
        
        zodiaco(xdia,xmes);
        sideral(xdia,xmes);
        añoChino(xaño);
        

    }  
  }
//con el numero del get month()  se asigan en el array para obtener el mes



function fecha() {
  let tiempo = new Date();
  let dia = tiempo.getDay(); //se obtiene un numero del 0 al 6
  let fech = tiempo.getDate();
  
  diasemana.textContent = semana[dia];
  day.textContent = fech;

  let mes = tiempo.getMonth(); //se obtiene un numero del 0 al 11
  month.textContent = meses[mes];
  let año = tiempo.getFullYear();
  year.textContent = año;

  let segundos = tiempo.getSeconds();
  if (segundos < 10) {
    //para q los segundo a empezar no solo tengan un digito
    segundos = "0" + segundos;
  }
  let segundosGrados = (segundos / 60) * 360;
  seconds.style.transform = `rotate(${segundosGrados}deg)`;
  s.textContent = segundos;

  let minutos = tiempo.getMinutes();
  if (minutos < 10) {
    minutos = "0" + minutos; //para q minutos al inicioar aparesca con un 0
  }
  let minutosGrados = (minutos / 60) * 360;
  minute.style.transform = `rotate(${minutosGrados}deg)`;
  m.textContent = minutos;

  let horas = tiempo.getHours();
  if (horas < 10) {
    horas = "0" + horas; //para q horas al inicioar aparesca con un 0
  }
  let horasGrados = (horas / 12) * 360;
  hor.style.transform = `rotate(${horasGrados}deg)`;
  h.textContent = horas;

  
  
 
}

var id=setInterval(fecha, 1000);

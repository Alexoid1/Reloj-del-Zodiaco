const seconds : HTMLInputElement = document.querySelector(".segundo");
const minute : HTMLInputElement = document.querySelector(".minuto");
const hor :  HTMLInputElement = document.querySelector(".hora");
const relojColor : HTMLInputElement = document.querySelector(".reloj");
const diasemana : HTMLElement = document.getElementById("diaSemana");
let day  = document.getElementById("dia")as HTMLInputElement;
let month = document.getElementById("mes")as HTMLInputElement;
let year = document.getElementById("year")as HTMLInputElement;
const h :  HTMLElement = document.getElementById("hour");
const m :  HTMLElement = document.getElementById("minute");
const s :  HTMLElement = document.getElementById("seconds");
const signo :  HTMLElement = document.getElementById("signo");
const img :  HTMLElement = document.getElementById("img");
const signo2 :  HTMLElement = document.getElementById("signo2");
const img2 :  HTMLElement = document.getElementById("img2");
const signo3 :  HTMLElement = document.getElementById("signo3");
const img3 :  HTMLElement = document.getElementById("img3");
const dat :  HTMLElement = document.querySelector(".fecha");
const submit :  HTMLElement = document.querySelector(".submit");
let semana : string[] = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
];
//con el numero de get() day se asigna el dia con el array
let meses : string[] = [
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

let tiempo : Date = new Date();
let fech : number = tiempo.getDate();
let mes : number = tiempo.getMonth();
let año : number = tiempo.getFullYear();

function zodiaco(fech:number,mes:number):void {
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
  function sideral(fech:number,mes:number):void {
    if ((mes === 0 && fech >= 21) || (mes === 1 && fech <= 15)) {
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
    } else if ((mes === 11 && fech >= 18) || (mes === 0 && fech <= 20)) {
      signo2.textContent = "Sagitario";
      img2.style.backgroundImage = "url(imagenes/sagitario.jpg)";
      img2.style.backgroundSize = "cover";
    }
  }
  function añoChino(año:number):void {
    if (año === 1935 ||año === 1947 ||año === 1959 ||año === 1971 ||año === 1983 ||año === 1995 ||año === 2007 || año === 2019 || año === 2031|| año === 2043) {
      signo3.textContent = "Cerdo";
      img3.style.backgroundImage = "url(imagenes/cerdo.png)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1936 ||año === 1948 ||año === 1960 ||año === 1972 ||año === 1984 ||año === 1996 ||año === 2008 || año === 2020 || año === 2032|| año === 2044) {
      signo3.textContent = "Rata";
      img3.style.backgroundImage = "url(imagenes/rata.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1937 ||año === 1949 ||año === 1961 ||año === 1973 ||año === 1985 ||año === 1997 ||año === 2009 || año === 2021 || año === 2033|| año === 2045) {
      signo3.textContent = "Buey";
      img3.style.backgroundImage = "url(imagenes/buey.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1938 ||año === 1950 ||año === 1962 ||año === 1974 ||año === 1986 ||año === 1998 ||año === 2010 || año === 2022 || año === 2034|| año === 2046) {
      signo3.textContent = "Tigre";
      img3.style.backgroundImage = "url(imagenes/tigre.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1939 ||año === 1951 ||año === 1963 ||año === 1975 ||año === 1987 ||año === 1999 ||año === 2011 || año === 2023 || año === 2035|| año === 2047) {
      signo3.textContent = "Conejo";
      img3.style.backgroundImage = "url(imagenes/conejo.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1940 ||año === 1952 ||año === 1964 ||año === 1976 ||año === 1988 ||año === 2000 ||año === 2012 || año === 2024 || año === 2036|| año === 2048) {
      signo3.textContent = "Dragon";
      img3.style.backgroundImage = "url(imagenes/dragon.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1941 ||año === 1953 ||año === 1965 ||año === 1977 ||año === 1989 ||año === 2001 ||año === 2013 || año === 2025 || año === 2037|| año === 2049) {
      signo3.textContent = "Serpiente";
      img3.style.backgroundImage = "url(imagenes/serpiente.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1942 ||año === 1954 ||año === 1966 ||año === 1978 ||año === 1990 ||año === 2002 ||año === 2014 || año === 2026 || año === 2038|| año === 2050) {
      signo3.textContent = "Caballo";
      img3.style.backgroundImage = "url(imagenes/caballo.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1943 ||año === 1955 ||año === 1967 ||año === 1979 ||año === 1991 ||año === 2003 ||año === 2015 || año === 2027 || año === 2039|| año === 2051) {
      signo3.textContent = "Cabra";
      img3.style.backgroundImage = "url(imagenes/cabra.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1944 ||año === 1956 ||año === 1968 ||año === 1980 ||año === 1992 ||año === 2004 ||año === 2016 || año === 2028 || año === 2040|| año === 2052) {
      signo3.textContent = "Mono";
      img3.style.backgroundImage = "url(imagenes/mono.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1945 ||año === 1957 ||año === 1969 ||año === 1981 ||año === 1993 ||año === 2005 ||año === 2017 || año === 2029 || año === 2041|| año === 2053) {
      signo3.textContent = "Gallo";
      img3.style.backgroundImage = "url(imagenes/gallo.jpg)";
      img3.style.backgroundSize = "cover";
    } else if (año === 1946 ||año === 1958 ||año === 1970 ||año === 1982 ||año === 1994 ||año === 2006 ||año === 2018 || año === 2030 || año === 2042|| año === 2054) {
      signo3.textContent = "Perro";
      img3.style.backgroundImage = "url(imagenes/perro.jpg)";
      img3.style.backgroundSize = "cover";
    }
  }
  zodiaco(fech,mes);
  sideral(fech,mes);
  añoChino(año);
  submit.addEventListener("click", cambiar);
  function cambiar():void {
      // se detiene el intervalo para q las funciones se apliquen y no cambien con el intervalo
    dat.innerHTML ='';
    let form=document.createElement('form');//se crea el formulario y todos sus elementos
    form.setAttribute('name','formulario');
    form.innerHTML='<input  class="formu" name="idia" id="idia" type="number" min="1" max="31"placeholder="Dia" required><input  class="formu" min="1" max="12" name="imes" id="imes"type="number" placeholder="Mes" required><input  class="formu" type="number" name="iaño" min="1940" max="2050" id="iaño" placeholder="Año" required>'
    dat.appendChild(form);
    let boton=document.createElement('button');
    boton.textContent='Ingresar'
    boton.className='boton';
    
    form.appendChild(boton);
    boton.addEventListener('click',remplazar);
    function remplazar(e){
        
        e.preventDefault()       
        let idia=document.getElementById('idia') as HTMLInputElement; //tomamos los id y sus valores creador con el formulario
        let imes=document.getElementById('imes') as HTMLInputElement;
        let iaño=document.getElementById('iaño') as HTMLInputElement;
        let xdia:any=idia.value;
        xdia=parseInt(xdia)as number; //transforma xdia a numero
        
        let xmes:any=imes.value;
        xmes=parseInt(xmes)as number;
        xmes=xmes-1; //trasformar xnes a tipo numero y restarle uno para asignar en array de meses
        let xaño:any=iaño.value;
        xaño=parseInt(xaño)as number;//trasformar xaño a tipo numero
       
        

        dat.innerHTML=`<p>Dia</p><p>${xdia}</p><p>de</p><p>${meses[xmes]}</p><p>del</p><p>${iaño.value}</p>`;
        
        zodiaco(xdia,xmes);
        sideral(xdia,xmes);
        añoChino(xaño);
        

    }  
  }
//con el numero del get month()  se asigan en el array para obtener el mes



function fecha() {
  let tiempo:Date = new Date();
  let dia:number = tiempo.getDay(); //se obtiene un numero del 0 al 6
  let fech:number = tiempo.getDate();
  
  diasemana.textContent = semana[dia];
  
  day.textContent = fech.toString();

  let mes:number = tiempo.getMonth(); //se obtiene un numero del 0 al 11
  month.textContent = meses[mes];
  let año = tiempo.getFullYear();
  year.textContent = año.toString();

  let segundos:number = tiempo.getSeconds();
  if (segundos < 10) {
    //para q los segundo a empezar no solo tengan un digito
    segundos = 0 + segundos;
  }
  let segundosGrados = (segundos / 60) * 360;
  seconds.style.transform = `rotate(${segundosGrados}deg)`;
  s.textContent = segundos.toString();

  let minutos = tiempo.getMinutes();
  if (minutos < 10) {
    minutos = 0 + minutos; //para q minutos al inicioar aparesca con un 0
  }
  let minutosGrados = (minutos / 60) * 360;
  minute.style.transform = `rotate(${minutosGrados}deg)`;
  m.textContent = minutos.toString();

  let horas = tiempo.getHours();
  if (horas < 10) {
    horas = 0 + horas; //para q horas al inicioar aparesca con un 0
  }
  let horasGrados = (horas / 12) * 360;
  hor.style.transform = `rotate(${horasGrados}deg)`;
  h.textContent = horas.toString();

  
  
 
}

var id=setInterval(fecha, 1000);
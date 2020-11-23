const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e =>{
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

xhr.open("POST", url, true);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    console.lo("yhteys toimii")
   }

}
};
var data = JSON.stringify({
  "EmailMsg": "Tähän tulee postin sisältö", //kirjoittaa sähköpostin sisällön
  "EmailAddress": "seve9191@gmail.com", //viestin kirjoittajan sähköposti
  "EmailTo": "severi.kerkka@edu.salpaus.fi", //oma sähköposti
  "EmailName": "Teppo Tyyppi" //nimi kentän sisältö
  
});
  let xhr = new XMLHttpRequest();
xhr.open("POST", true);


xhr.send(data);

xhr.open("POST", true);

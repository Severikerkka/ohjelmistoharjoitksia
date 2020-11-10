
const nimi=`Severi Kerkkä`; 
const ikä=`16`; 
const opiskelija=true; 

if(opiskelija === true){
  console.log('olen opiskelija');
  }else if(numero === 18){
    console.log ('olen ammattilainen');
  }
console.log("Hei sivullani surffaaja, nimeni on" + nimi + " " + " ja ikäni on " + ikä);

var k1 = 'Niko Maklin'
var k2 = 'Janne jantti'
var k3 = 'Joonas Halttu'
var k4 = 'Samu Ojala'
console.log(k1.split(" ")[0]);
console.log(k2.split(" ")[0]);
console.log(k3.split(" ")[0]);
console.log(k4.split(" ")[0]);



const perhe = [ 
    {name: "Severi", ikä: "16", täysiikäinen:false}, 
    {name: "Antti", ikä: "19", täysiikäinen:true}, 
    {name: "Julius", ikä: "7", täysiikäinen:false}, 
    {name: "Karita", ikä: "44", täysiikäinen:true}, 
    {name: "Teppo", ikä: "54", täysiikäinen:true} 
]; 
  
var output =  perhe.filter(perhe => perhe.ikä >18); 
for(var i=0;i<output.length;i++){ 
}; 
console.log(output);
var outputt =  perhe.filter(perhe => perhe.ikä <18); 
for(var i=0;i<output.length;i++){ 
}; 
console.log(outputt);






console.log(16 + 19 +7 +44 +54);
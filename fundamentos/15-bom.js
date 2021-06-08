//Browser Object Model (BOM)
//El objeto window representa la ventana que contiene un documento DOM

//navigator
let browser;
let userAgent = navigator.userAgent;
if (userAgent.indexOf("Chrome") > -1) {
  browser = "Google Chrome";
} else if (userAgent.indexOf("Safari") > -1) {
  browser = "Apple Safari";
} else if (userAgent.indexOf("Firefox") > -1) {
  browser = "Mozilla Firefox";
}
alert(`Usted está usando ${browser}`);

//location
// location.reload() //recargar la página
// location.assign('https://www.google.com/')
// location.replace('https://rollingcodeschool.com')
// function sendData(data) {

//   location.search = data;
// }

// sendData("Hola");


//history
// history.go(1); //Nos movemos hacia adelante en el historial
// history.go(-2); //Nos movemos hacia atrás en el historial
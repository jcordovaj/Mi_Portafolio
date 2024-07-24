// Función que detecta el lenguaje del browser y de acuerdo a ello despliega
// despliega la versión de la página en inglés o en español
// English: Function which detect browser language, default to Spanish
// *************************************************************************

// Se capturan los parámetros del lenguaje del entorno
// ***************************************************
const browserLang = navigator.language || navigator.userLanguage;
const idiomaBrowser = navigator.language || navigator.userLanguage;

// Constantes que almacenan info al chequear lenguaje 
// English: Check if language is English or Spanish
// **************************************************
const esIng = idiomaBrowser.toLowerCase().includes('en');
const esEsp = idiomaBrowser.toLowerCase().includes('es');

// De acuerdo al resultado, se redirecciona a la versión en español o inglés
// English: Redirect to index page based on language
function detecta() {
  if (esIng) {
    window.location.href = "index_en.html";
  } else if (esEsp) {
    window.location.href = "index.html";
  } else {
    // La página por defecto es en español, si el lenguaje no es inglés o español 
    // English: Default to Spanish page if language is not English or Spanish
    window.location.href = "index.html";
  }
}

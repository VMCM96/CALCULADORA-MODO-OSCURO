const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

/* Funcion de la calculadora:

Por cada numb (boton en el que se haga click) cumplir una funcion*/

buttons.forEach((numb) => {
  numb.onclick = () => {

    /*Si (boton es igual a C, entonces el display sale vacio)*/
    if (numb.id == "clear") {
      display.innerText = "";
    } 
    
    /*Pero si, (Boton es igual a >, Convierte el Array (innerText) a un String (numero) y elimina el ultimo numero) */
      else if (numb.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } 
      
    /*Pero si, El display no esta vacio y se hace Click en la Igualdad (=), va ser evaluado el InnerText (Suma,Resta,Multiplicacion,Division,Exponencial)*/
      else if (display.innerText != "" && numb.id == "equal") {
      display.innerText = eval(display.innerText);
    } 
    
    /*Pero si el display esta vacio y se hace Click en la Igualdad (=) Arroja el mensaje de Vacio! y desaparece despues de 2 segundos */
      else if (display.innerText == "" && numb.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } 
    /*Muestra el digito en el Display */
      else {
      display.innerText += numb.id;
    }
  };
});

/*Modo Oscuro */

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

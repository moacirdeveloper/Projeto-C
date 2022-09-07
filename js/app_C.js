let divNavBar = document.getElementsByClassName("navbar");
let divConteudo = document.getElementsByClassName("conteudo")
let divFooter = document.getElementsByTagName("footer");
let divNovo = document.createElement("DIV");
let divNovoConteudo = document.createElement("DIV");
let divContato = document.getElementById("divContato");

//console.log(divNavBar[0]);
console.log(divFooter);

/*MENU*/
divNavBar[0].children[2].innerHTML = "VENDAS";
divNovo.innerHTML = "MARKETING";
divNovo.setAttribute("class", "mnuMARKETING");
divNavBar[0].appendChild(divNovo);

console.log(divContato);

divContato.style.color = "blue";

/*CONTEUDO*/
console.log(divConteudo[0]);
divConteudo[0].children[1].innerHTML = "Hello World !!!";
divNovoConteudo.innerHTML = `ipsa qui earum consectetur, quam vero deserunt ullam laboriosam
					        cupiditate quidem voluptatem consequuntur eveniet il`;
divConteudo[0].appendChild(divNovoConteudo);

/*FOOTER*/
console.log(divFooter[0].getElementsByTagName("span")[0].innerText);
console.log(divFooter[0].getElementsByTagName("span")[0].getElementsByTagName("small"));
//divFooter[0].getElementsByTagName("span")[1].innerText = "contato@mysite.com";
divFooter[0].getElementsByTagName("span")[1].getElementsByTagName("small")[0].innerText = "contato@mysite.com";

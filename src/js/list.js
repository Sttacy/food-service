import menuTpl from "../templates/listMenu.hbs";
import cards from "../js/menu.json";
import "../styles.css";

const menu = document.querySelector(".js-menu");

const menuCards = menuTpl(cards);
menu.insertAdjacentHTML("afterbegin", menuCards);

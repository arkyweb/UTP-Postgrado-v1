let
  doc_html = document.documentElement,
  head = document.querySelector(".header"),
  slideshow = document.querySelectorAll("[uk-slideshow]"),
  contacto = document.querySelector("#contacto"),
	btn = document.querySelectorAll("[data-opens]"),
  btn_menu = document.querySelectorAll("#menu [data-opens]");
for (k = 0; k < btn_menu.length; k++) {
  let op_menu = btn_menu[k].getAttribute("data-opens");
  btn_menu[k].addEventListener("click", (() => {
    let id_menu = "#" + op_menu;
    doc_html.classList.add('modal-page-menu');
    UIkit.util.on(id_menu, "hide", (function() {
      doc_html.classList.remove('modal-page-menu')
    }))
  }))
}
for (k = 0; k < btn.length; k++) {
	let op = btn[k].getAttribute("data-opens");
	btn[k].addEventListener("click", (() => {
		let
      bt = document.createElement("button"),
			id = "#" + op + "";
    doc_html.classList.add('modal-page-header'),
		head.appendChild(bt),
    bt.setAttribute("data-closes", op),
    bt.classList.add("header_closes"),
    bt.classList.add("activo"),
    bt.addEventListener("click", ((e) => {
      bt.classList.remove("activo"),
      bt.remove(),
      UIkit.modal(id).hide(),
      console.log(e.target)
		})),
    UIkit.util.on(id, "hide", (function() {
      doc_html.classList.remove('modal-page-header'),
      bt.classList.remove("activo"),
      bt.remove()
		}))
	}))
};

/*
let modales = document.querySelectorAll('[uk-modal]');
let dialogs = document.querySelectorAll('.uk-modal-dialog');
for (i = 0; i < modales.length; i++) {
  modales[i].addEventListener("click", () => {
    document.querySelectorAll('[data-closes]').forEach(el => el.remove());
  });
}
*/

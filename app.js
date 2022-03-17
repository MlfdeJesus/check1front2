(function() {

    var btnMenu = document.querySelector(".l-sidebar__btn");
    var menu = document.querySelector(".l-sidebar");
    var documento = document.body;
   

    btnMenu.addEventListener("click", function () {
        menu.classList.remove("l-sidebar--close");
        menu.classList.add("l-sidebar--open");
    });

    menu.addEventListener("click", function () {
        menu.classList.remove("l-sidebar--open");
        menu.classList.add("l-sidebar--close");
    });

    documento.addEventListener("keydown", function (event) {
        if (event.key == " ") {
            menu.classList.toggle("l-sidebar--close")
            menu.classList.add("l-sidebar--open");
        };
    });

})();
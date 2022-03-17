(function() {

    var btnMenu = document.querySelector(".l-sidebar__btn");
    var menu = document.querySelector(".l-sidebar");
    var documento = document.body;
   

    btnMenu.addEventListener("click", function () {
        menu.classList.add("l-sidebar--open");
    });

    menu.addEventListener("click", function () {
        menu.classList.remove("l-sidebar--open");
    });
    

})();
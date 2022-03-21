(function() {

    var btnMenu = document.querySelector(".l-sidebar__btn");
    var menu = document.querySelector(".l-sidebar");
    var documento = document.body;
    var textbox = document.getElementById('text');
   

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

    documento.addEventListener("dblclick", function () {
        menu.classList.toggle("l-sidebar--close")
        menu.classList.add("l-sidebar--open");
    });

    
    document.addEventListener('mousemove', function (eve) {
    textbox.style.left = eve.pageX + 'px';
    textbox.style.top = eve.pageY + 'px';
    });
    
    var btnContato = document.getElementById('btnContato')

        btnContato.addEventListener('click', function(e) {
        document.addEventListener('mousemove', function(e) {
        let body = document.querySelector('body');
        let box = document.getElementById('contato');
        let left = e.offsetX;
        let top = e.offsetY;
        box.style.left = left + 'px';
        box.style.top = top + 'px';
        setTimeout(function(){
        var a = document.getElementById("contato");
        a.style="display:none"
        }, 5000);
        })});

})();
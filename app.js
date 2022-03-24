(function () {

    var btnMenu = document.querySelector(".l-sidebar__btn");
    var menu = document.querySelector(".l-sidebar");
    var documento = document.body;
    var box1 = document.getElementById('contato');
    var box2 = document.getElementById('sobre');
    var secaoContato = document.getElementById('contatos')
    var a = document.getElementById("contato");
    var secaoSobre = document.getElementById('sobre-mim')
    var b = document.getElementById("sobre");


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


    secaoContato.addEventListener('mouseover', function (e) {
        a.style = "display: block"
        var left = e.pageX;
        var top = e.pageY;
        box1.style.left = left + 'px';
        box1.style.top = top + 'px';
        setTimeout(function () {
            a.style = "display: none"
        }, 5000);
    })

    secaoSobre.addEventListener('mouseover', function (e) {
        b.style = "display: block"
        var left = e.pageX;
        var top = e.pageY;
        box2.style.left = left + 'px';
        box2.style.top = top + 'px';
        setTimeout(function () {
            b.style = "display: none"
        }, 5000);
    })

})();
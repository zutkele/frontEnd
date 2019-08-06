let menus = document.querySelectorAll('.menu-toggle');
menus.forEach(function(item) {
    item.addEventListener('click', function() {
        let target = this.getAttribute("data-target");
        this.classList.toggle("open");
        document.getElementById(target).classList.toggle("open");
    });
});
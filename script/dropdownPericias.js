const dorpdowns = document.querySelectorAll('.dropdown');

dorpdowns.forEach(dorpdown => {
    const select = dorpdown.querySelector('.select');
    const caret = dorpdown.querySelector('.caret');
    const menu = dorpdown.querySelector('.menu');
    const options = dorpdown.querySelectorAll('.menu li');
    const selected = dorpdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('activex');
            });
            option.classList.add('activex');
        });
    });
});
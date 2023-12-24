const mode = document.getElementById('mode_icon')

document.addEventListener('click', function(e) {
    const form = document.getElementById('login_form');
    const event = e.target;
    if(event.classList.contains('fa-moon')){

        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')
        form.classList.add('dark')
        return
    }

    if(event.classList.contains('fa-sun')){

        mode.classList.remove('fa-sun')
        mode.classList.add('fa-moon')
        form.classList.remove('dark')
        return
    }
})
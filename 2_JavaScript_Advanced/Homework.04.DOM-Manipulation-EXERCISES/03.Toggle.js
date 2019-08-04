function toggle() {
    let span = document.getElementsByClassName('button')[0];
    let divExtra = document.getElementById('extra');
    if(divExtra.style.display == 'none'){
        divExtra.style.display = 'block';
        span.textContent = 'Less';
    }else{
        divExtra.style.display = 'none';
        span.textContent = 'More';
    }
}
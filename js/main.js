function about(y) {
    var x = document.getElementsByClassName('item');
    var content = document.getElementsByClassName('item-cont')
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('active');
        content[i].style.display='none';
    }
    x[y].classList.add('active');
    content[y].style.display='block';

}
function dropDownFunction(){
    document.querySelector('#myDropdown').classList.toggle("show");
}

window.onclick = function(e) {
    if( !e.target.matches('.btn-nav') ) {
        const dropDowns = document.querySelector('.dropdown-content');
        let x;

        for( x = 0; x < dropDowns.length; x++ ) {
            let openDropDown = dropDowns[x];

            if( openDropDown.classList.contains('show') ) {
                openDropDown.classList.remove('show');
            }
        }
    }
}

const akmalPhoto = document.querySelector('.myPhoto');

akmalPhoto.addEventListener('mouseover', function() {
    akmalPhoto.src = 'img/akmaladi.jpg';
})

akmalPhoto.addEventListener('mouseout', function() {
    akmalPhoto.src = 'img/akmal.jpg';
})
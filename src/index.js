window.onload = () => {
    window.onscroll = function (e) {
        let winy = window.scrolly;
        if (winy > 300) {
            progressbar();

            scrollbaranimation();

            winy = null;
        }
    };

    const scrolbtn = document.querySelector('.isshowbtn');
    window.onscroll = () => {
        if (window.scrollY > 300) {
            scrolbtn.classList.remove('isshowbtn__hide')
        } else if (window.scrollY < 300) {
            scrolbtn.classList.add('isshowbtn__hide')
        }
    };

    scrolbtn.onclick = () => {
        window.scrollTo(0, 0);

    };

}
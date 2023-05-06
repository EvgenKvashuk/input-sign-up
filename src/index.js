// modal

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

// scrol
window.onload = () => {
    window.onscroll = function (e) {
        let winy = window.scrolly;
        // if (winy > 1) {
        //     // progressbar();

        //     // scrollbaranimation();

        //     // winy = null;
        // }
    };

    const scrolbtn = document.querySelector('.isshowbtn');
    window.onscroll = () => {
        if (window.scrollY > 1) {
            scrolbtn.classList.remove('isshowbtn__hide')
        } else if (window.scrollY < 1) {
            scrolbtn.classList.add('isshowbtn__hide')
        }
    };

    scrolbtn.onclick = () => {
        window.scrollTo(0, 0);
    };

}
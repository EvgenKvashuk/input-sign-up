(()=>{const o={openModalBtn:document.querySelector("[data-modal-open-sign]"),closeModalBtn:document.querySelector("[data-modal-close-sign]"),modal:document.querySelector("[data-modal-sign]")};function e(){o.modal.classList.toggle("is-hidden")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)})(),window.onload=()=>{const o=document.querySelector(".isshowbtn");window.onscroll=()=>{window.scrollY>500?o.classList.remove("isshowbtn__hide"):window.scrollY<500&&o.classList.add("isshowbtn__hide")},o.onclick=o=>{window.scrollTo({top:0,behavior:"smooth"})}};
//# sourceMappingURL=index.da77f5b7.js.map

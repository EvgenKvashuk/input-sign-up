!function(){var o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function n(){o.modal.classList.toggle("is-hidden")}o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n)}(),window.onload=function(){window.onscroll=function(o){window.scrolly};var o=document.querySelector(".isshowbtn");window.onscroll=function(){window.scrollY>1?o.classList.remove("isshowbtn__hide"):window.scrollY<1&&o.classList.add("isshowbtn__hide")},o.onclick=function(){window.scrollTo(0,0)}};
//# sourceMappingURL=index.670872b8.js.map

window.onload=()=>{window.onscroll=function(o){let l=window.scrolly;l>300&&(progressbar(),scrollbaranimation(),l=null)};const o=document.querySelector(".isshowbtn");window.onscroll=()=>{window.scrollY>300?o.classList.remove("isshowbtn__hide"):window.scrollY<300&&o.classList.add("isshowbtn__hide")},o.onclick=()=>{window.scrollTo(0,0)}};
//# sourceMappingURL=index.38a84320.js.map

var L=document.querySelector(".favorite-coffee__video"),q=document.querySelector(".favorite-coffee"),I="../images/favorite-coffee.jpg";L.onended=()=>{L.style.display="none",q.style.backgroundImage=`url(${I})`};var r=document.querySelector(".main-nav"),w=document.querySelector(".main-nav__toggle"),i=document.querySelector(".main-nav__menu");r.classList.remove("main-nav--nojs");w.addEventListener("click",()=>{r.classList.contains("main-nav--opened")?(r.classList.remove("main-nav--opened"),r.style.paddingBottom="0px",i.style.position="fixed"):(r.classList.add("main-nav--opened"),i.addEventListener("transitionend",()=>{r.style.paddingBottom=`${i.offsetHeight}px`,i.style.position="absolute"},{once:!0}))});var b=document.querySelector(".slider__arrow--left"),C=document.querySelector(".slider__arrow--right"),s=document.querySelectorAll(".slider__item"),p=document.querySelectorAll(".slider__progress-bar-loading"),v=s.length-1,_=!0,y=()=>{for(let e=0;e<s.length;e++)if(s[e].classList.contains("slider__item--current"))return e},l=e=>{s[e].classList.add("slider__item--current"),p[e].classList.add("slider__progress-bar-loading--current")},f=e=>{s[e].classList.remove("slider__item--current"),p[e].classList.remove("slider__progress-bar-loading--current")},h=()=>{let e=document.querySelector(".slider__progress-bar-loading--current"),t=0,n=setInterval(()=>{_?t>=100?(clearInterval(n),e.style.width="0"):(t++,e.style.width=`${t}%`):(clearInterval(n),e.style.width="0")},50)},g=()=>{_=!1},S,E=()=>{h(),S=setInterval(()=>{let e=y();s[e].classList.add("slider__item--move-left"),s[e].addEventListener("transitionend",()=>{let t;e<v?t=e+1:t=0,l(t),f(e),s[e].classList.remove("slider__item--move-left"),h()},{once:!0})},5e3)},c=()=>{clearInterval(S)},u=()=>{_=!0,E()},m=e=>{g();let t=y();s.length>0&&(e==="left"?(s[t].classList.add("slider__item--move-left"),s[t].addEventListener("transitionend",()=>{let n;t<v?n=t+1:n=0,l(n),f(t),c(),u(),s[t].classList.remove("slider__item--move-left")},{once:!0})):e==="right"&&(s[t].classList.add("slider__item--move-right"),s[t].addEventListener("transitionend",()=>{t>0?l(t-1):l(v),f(t),c(),u(),s[t].classList.remove("slider__item--move-right")},{once:!0})))};b.addEventListener("click",()=>{m("right")});C.addEventListener("click",()=>{m("left")});E();var o=document.querySelector(".slider__list"),a,d;o.addEventListener("touchstart",e=>{a=e.touches[0].clientX,c(),g()});o.addEventListener("touchmove",e=>{d=e.touches[0].clientX});o.addEventListener("touchend",()=>{if(a&&d){let e=a-d;Math.abs(e)>50?e>0?m("left"):m("right"):(a=null,d=null,u())}});o.addEventListener("mouseover",()=>{c(),g()});o.addEventListener("mouseout",()=>{u()});
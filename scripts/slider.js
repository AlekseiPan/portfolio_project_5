var E=document.querySelector(".slider__arrow--left"),y=document.querySelector(".slider__arrow--right"),s=document.querySelectorAll(".slider__item"),g=document.querySelectorAll(".slider__progress-bar-loading"),u=s.length-1,_=!0,L=()=>{for(let e=0;e<s.length;e++)if(s[e].classList.contains("slider__item--current"))return e},i=e=>{s[e].classList.add("slider__item--current"),g[e].classList.add("slider__progress-bar-loading--current")},m=e=>{s[e].classList.remove("slider__item--current"),g[e].classList.remove("slider__progress-bar-loading--current")},f=()=>{let e=document.querySelector(".slider__progress-bar-loading--current"),t=0,r=setInterval(()=>{_?t>=100?(clearInterval(r),e.style.width="0"):(t++,e.style.width=`${t}%`):(clearInterval(r),e.style.width="0")},50)},v=()=>{_=!1},h,S=()=>{f(),h=setInterval(()=>{let e=L();s[e].classList.add("slider__item--move-left"),s[e].addEventListener("transitionend",()=>{let t;e<u?t=e+1:t=0,i(t),m(e),s[e].classList.remove("slider__item--move-left"),f()},{once:!0})},5e3)},d=()=>{clearInterval(h)},c=()=>{_=!0,S()},a=e=>{v();let t=L();s.length>0&&(e==="left"?(s[t].classList.add("slider__item--move-left"),s[t].addEventListener("transitionend",()=>{let r;t<u?r=t+1:r=0,i(r),m(t),d(),c(),s[t].classList.remove("slider__item--move-left")},{once:!0})):e==="right"&&(s[t].classList.add("slider__item--move-right"),s[t].addEventListener("transitionend",()=>{t>0?i(t-1):i(u),m(t),d(),c(),s[t].classList.remove("slider__item--move-right")},{once:!0})))};E.addEventListener("click",()=>{a("right")});y.addEventListener("click",()=>{a("left")});S();var l=document.querySelector(".slider__list"),n,o;l.addEventListener("touchstart",e=>{n=e.touches[0].clientX,d(),v()});l.addEventListener("touchmove",e=>{o=e.touches[0].clientX});l.addEventListener("touchend",()=>{if(n&&o){let e=n-o;Math.abs(e)>50?e>0?a("left"):a("right"):(n=null,o=null,c())}});l.addEventListener("mouseover",()=>{d(),v()});l.addEventListener("mouseout",()=>{c()});

(()=>{"use strict";const e=e=>{for(;e.lastChild&&e.children.length>1;)e.removeChild(e.lastChild)};window.onload=()=>{const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("nav"),t=document.createElement("ul"),n=document.createElement("a"),u=document.createElement("a"),i=document.createElement("a");n.textContent="Home",u.textContent="About",i.textContent="Contact";const o=[n,u,i];let c;for(let e=0;e<o.length;e+=1)c=document.createElement("li"),o[e].id=o[e].textContent.toLowerCase(),c.appendChild(o[e]),t.append(c);return e.appendChild(t),e}());const n=document.getElementById("home"),u=document.getElementById("about"),i=document.getElementById("contact");n.addEventListener("click",(()=>{e(t),t.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p");return t.textContent="Welcome to our Restaurant Page",n.textContent="Suspendisse potenti. Donec et iaculis ligula. Proin nibh risus, sodales ut fermentum nec, commodo quis dolor. Pellentesque tempus vehicula risus, ut faucibus erat feugiat vitae. Pellentesque pretium eros quam, id semper nibh euismod et. Integer bibendum cursus dolor, et porttitor enim scelerisque nec. Quisque pulvinar pharetra purus, vel condimentum metus accumsan nec. Donec justo leo, maximus quis finibus quis, placerat non sapien. Nam vel vulputate dolor. Nam fermentum tincidunt faucibus. Nullam in maximus nisl, in porttitor felis. Sed pretium, augue in consectetur tempus, diam quam suscipit mauris, eget pulvinar lacus risus ac ipsum. ",e.appendChild(t),e.appendChild(n),e}())})),u.addEventListener("click",(()=>{e(t),t.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p");return t.textContent="About us",n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae quam sollicitudin nunc ultricies efficitur. Maecenas vulputate dapibus luctus. Nam ultrices tellus ut sem ornare viverra. Nulla facilisi. Nam pretium fermentum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat accumsan tortor. Nullam molestie metus non velit hendrerit pellentesque. Integer non convallis mauris. Phasellus id orci a est suscipit luctus. Nunc libero ante, semper quis lectus sit amet, tincidunt pellentesque mi.\n   Curabitur finibus imperdiet massa ultricies tristique. Etiam purus sem, sollicitudin et volutpat ut, aliquet et orci. Sed commodo vestibulum tellus et placerat.",e.appendChild(t),e.appendChild(n),e}())})),i.addEventListener("click",(()=>{e(t),t.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h1"),u=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p");return n.textContent="Contact Us",u.textContent="Foo",i.textContent="foo@email.com",o.textContent=555555555,e.append(n,t),t.append(u,i,o),e}())}))}})();
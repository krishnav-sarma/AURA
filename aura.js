




// ------------------------------------------------------------------------------



const trigger = document.getElementById('popupTrigger');
  const card = document.getElementById('imgCard');
  const main = document.getElementById('mainContent');

  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);

  trigger.addEventListener('click', () => {
    main.classList.add('blur');
    overlay.classList.add('active');
    card.classList.remove('hidden');
    setTimeout(() => card.classList.add('show'), 10);
  });

  overlay.addEventListener('click', () => {
    card.classList.remove('show');
    main.classList.remove('blur');
    overlay.classList.remove('active');
    setTimeout(() => card.classList.add('hidden'), 300);
  });



// --------------------------------------------------------------------------------


const countEl = document.getElementById("count");
      countvisits();

      function countvisits() {
        fetch('https://api.countapi.xyz/update/laptop/mouse/?amount=1')
          .then((res) => res.json())
          .then((res) => {
            countEl.innerHTML = res.value;
          });
      }  



// --------------------------------------------------------------------------------


window.addEventListener("load", () => {
      const tl = gsap.timeline();

      tl.to("#preloader", {
        y: "-100%",
        duration: 0.8,
        delay: 1.5,
        ease: "power2.inOut"
      })
      .set("#preloader", { display: "none" })
      .set("#nonono", { display: "block" })
      .to("#nonono", {
        opacity: 1,
        duration: 0.2,
        ease: "power1.out"
      });
    });      



// -----------------------------------------------------------------------------------



const lenis = new Lenis()

function raf(time){
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




// -----------------------------------------------------------------------------------------


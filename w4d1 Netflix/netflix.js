const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 20,
    breakPoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: "auto"
        }

    }
})


const wrapMenu = document.getElementById('wrap-menu')
const collapseButton = document.getElementById('play-hamburger')



collapseButton.addEventListener('click', () => {
    wrapMenu.classList.toggle('active');
})


document.addEventListener('click', (e) => {
    console.log(e.target)

    const isClickInsideWrapMenu = wrapMenu.contains(e.target)
    const isClickOnToggle = collapseButton.contains(e.target)

     if (!isClickInsideWrapMenu && !isClickOnToggle) {
         wrapMenu.classList.remove('active')
     }
})

/*document.addEventListener('DOMContentLoaded', () => {
    const wrapMenu = document.querySelector('.wrap-menu');
    const collapseButton = document.querySelector('.play-hamburger');

    collapseButton.addEventListener('click', () => {
      wrapMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      const isClickInsideWrapMenu = wrapMenu.contains(e.target);
      const isClickOnToggle = collapseButton.contains(e.target);

      if (!isClickInsideWrapMenu && !isClickOnToggle) {
        wrapMenu.classList.remove('active');
      }
    });
  });*/


  /*document.addEventListener('DOMContentLoaded', function() {
    const cardHover = document.querySelector('.film-card');

    if (cardHover) {
        // Creazione dell'elemento
        const hoverElement = document.createElement('div');
        hoverElement.classList.add('hover-element');
        hoverElement.textContent = 'Elemento aggiunto';
        

        // Aggiunta dell'elemento a film-card
        cardHover.appendChild(hoverElement);
    }
});*/

const cardHover = document.querySelectorAll(`.filmcard`)

const createP = (paragraph) =>{
    const divp = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = `96m 15s`
    p.append(divp)
    divp.append(cardHover)


}
cardHover.addEventListener('mouseout', function() {
   console.log (createP)
})
console.log(cardHover)

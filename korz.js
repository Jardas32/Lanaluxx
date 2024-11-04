document.addEventListener(`DOMContentLoaded`, (e) => {
  document.getElementById(`btpopu`).addEventListener(`click`, (e) => {
    document.getElementById(`popupb`).classList.add(`popup-bg`);
    document.querySelector(`html`).classList.add(`no-scroll`);
  });

  document.getElementById(`closed-popu`).addEventListener(`click`, (e) => {
    document.getElementById(`popupb`).classList.remove(`popup-bg`);
    document.querySelector(`html`).classList.remove(`no-scroll`);
  });
});

const gridnone = document.querySelector(`.gridnone`);
//  const divx = document.querySelector(`.divx`);
const pp2 = document.querySelector(`.pp2`);
const span4 = document.querySelector(`.span4`);
const span5 = document.querySelector(`.span5`);
const container = document.querySelector(`.container`);
const h2korzina = document.querySelector(`.h2korzina`);

// divx.addEventListener(`click`, function() {

//     if (gridnone.style.display = `none`) {
//         span4.innerHTML = `0 <img src="img/Far.png" alt="">`
//         span5.innerHTML = `0 шт`
//         container.style.height = `1000px`
//         h2korzina.innerHTML = `Ваша корзина Пуста`
//         span6.innerHTML = `0`

//     }

// });

const divx2 = document.querySelector(`.divx2`);
const grid2none = document.querySelector(`.grid2none`);
const grid01 = document.querySelector(`.grid01`);
const suma = document.querySelector(`.suma`);
// const span6 = document.querySelector(`.span6`);
const openpopup = document.querySelector(`.open-popup`);

// divx2.addEventListener(`click`, function() {

//      if (grid2none.style.display = `none`) {
//         grid01.style.display = `none`
//         span4.innerHTML = `32 000 <img src="img/Far.png" alt="">`
//         span5.innerHTML = `4 шт`
//         suma.style.top = `500px`
//         span6.innerHTML = `4`
//      }

// });

openpopup.addEventListener(`click`, function () {
  let style = getComputedStyle(ul2);

  if (style.display === `block`) ul2.style.display = `none`;
  ul3.style.display = `none`;
});

//  Popup

document.addEventListener(`DOMContentLoaded`, (e) => {
  document.getElementById(`btpopu`).addEventListener(`click`, (e) => {
    e.preventDefault();
    document.getElementById(`popupb`).classList.add(`pupUpbg`);
    document.getElementById(`popupbg`).classList.remove(`popup-bgr`);
  });

  document.getElementById(`closed-popu`).addEventListener(`click`, (e) => {
    document.getElementById(`popupb`).classList.remove(`pupUpbg`);
    document.querySelector(`html`).classList.remove(`no-scroll`);
  });
});

//    PopUp Спасибо

document.addEventListener(`DOMContentLoaded`, (e) => {
  document.getElementById(`Inputb`).addEventListener(`click`, (e) => {
    e.preventDefault();
    document.getElementById(`pupbgr`).classList.add(`pupUpbg`);
    document.getElementById(`popupbg`).classList.remove(`popup-bgr`);
    document.getElementById(`popupb`).classList.remove(`pupUpbg`);
  });

  document.getElementById(`divclose`).addEventListener(`click`, (e) => {
    document.getElementById(`pupbgr`).classList.remove(`pupUpbg`);
    document.querySelector(`html`).classList.remove(`no-scroll`);
  });
});

const bt = document.querySelector(`.bt`);
const divinp = document.querySelector(`.divinp`);
const bt99 = document.querySelector(`.bt99`);
const li1 = document.querySelector(`.li1`);
const li01 = document.querySelector(`.li01`);
const ul2 = document.querySelector(`.ul2`);
const linext2 = document.querySelector(`.linext2`);
const ul3 = document.querySelector(`.ul3`);
const linext = document.querySelector(`.linext`);
const li2 = document.querySelector(`.li2`);
const ul4 = document.querySelector(`.ul4`);
const img5 = document.querySelector(`.img5`);
const divcall = document.querySelector(`.divcall`);
const licall = document.querySelector(`.licall`);
const goup = document.querySelector(`.go-up`);
const btUp = document.querySelector(`.btUp`);
const img4 = document.querySelector(`.img4`);
const li03 = document.querySelector(`.li03`);
const imgli03 = document.querySelector(`.imgli03`);
const li04 = document.querySelector(`.li04`);
const imgli04 = document.querySelector(`.imgli04`);
const li05 = document.querySelector(`.li05`);
const imgli05 = document.querySelector(`.imgli05`);
const li06 = document.querySelector(`.li06`);
const imgli06 = document.querySelector(`.imgli06`);
const li07 = document.querySelector(`.li07`);
const imgli07 = document.querySelector(`.imgli07`);
const li08 = document.querySelector(`.li08`);
const imgli08 = document.querySelector(`.imgli08`);
const li09 = document.querySelector(`.li09`);
const imgli09 = document.querySelector(`.imgli09`);
const li010 = document.querySelector(`.li010`);
const imgli010 = document.querySelector(`.imgli010`);

li03.addEventListener(`click`, function () {
  let style = getComputedStyle(imgli03);

  if (style.rotate === `none`) {
    imgli03.style.rotate = `-90deg`;
  } else if (style.rotate !== `none`) {
    imgli03.style.rotate = `none`;
  }
});

li04.addEventListener(`click`, function () {
  let style = getComputedStyle(imgli04);

  if (style.rotate === `none`) {
    imgli04.style.rotate = `-90deg`;
  } else if (style.rotate !== `none`) {
    imgli04.style.rotate = `none`;
  }
});

li05.addEventListener(`click`, function () {
  let style = getComputedStyle(imgli05);

  if (style.rotate === `none`) {
    imgli05.style.rotate = `-90deg`;
  } else if (style.rotate !== `none`) {
    imgli05.style.rotate = `none`;
  }
});

li06.addEventListener(`click`, function () {
  let style = getComputedStyle(imgli06);

  if (style.rotate === `none`) {
    imgli06.style.rotate = `-90deg`;
  } else if (style.rotate !== `none`) {
    imgli06.style.rotate = `none`;
  }
});

li07.addEventListener(`click`, function () {
  let style = getComputedStyle(imgli07);

  if (style.rotate === `none`) {
    imgli07.style.rotate = `-90deg`;
  } else if (style.rotate !== `none`) {
    imgli07.style.rotate = `none`;
  }
});

li08.addEventListener(`click`, function () {
  let style = getComputedStyle(imgli08);

  if (style.rotate === `none`) {
    imgli08.style.rotate = `-90deg`;
  } else if (style.rotate !== `none`) {
    imgli08.style.rotate = `none`;
  }
});

li09.addEventListener(`click`, function () {
  let style = getComputedStyle(imgli09);

  if (style.rotate === `none`) {
    imgli09.style.rotate = `-90deg`;
  } else if (style.rotate !== `none`) {
    imgli09.style.rotate = `none`;
  }
});

li010.addEventListener(`click`, function () {
  let style = getComputedStyle(imgli010);

  if (style.rotate === `none`) {
    imgli010.style.rotate = `-90deg`;
  } else if (style.rotate !== `none`) {
    imgli010.style.rotate = `none`;
  }
});

li01.addEventListener(`click`, function () {
  if ((img5.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((imgli03.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((imgli04.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((imgli05.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((imgli06.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((imgli07.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((imgli08.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((imgli09.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((imgli09.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((imgli010.style.rotate = `none`)) {
  }
});

li01.addEventListener(`click`, function () {
  if ((ul3.style.display = `none`)) {
  }
});

btUp.addEventListener(`click`, function () {
  let style = getComputedStyle(img4);

  if (style.rotate === `none`) {
    img4.style.rotate = `180deg`;
  } else if (style.rotate !== `none`) {
    img4.style.rotate = `none`;
  }
});

bt.addEventListener(`click`, function () {
  let style = getComputedStyle(divinp);

  if (style.display === "none") {
    divinp.style.display = "initial";
  } else if (style.display !== "none") {
    divinp.style.display = "none";
  }
});

bt99.addEventListener(`click`, function () {
  let style = getComputedStyle(divinp);

  if (style.display === "none") {
    divinp.style.display = "initial";
  } else if (style.display !== "none") {
    divinp.style.display = "none";
  }
});

li1.addEventListener(`click`, function () {
  let style = getComputedStyle(ul2);

  if (style.display === "none") {
    ul2.style.display = "initial";
  } else if (style.display !== `initial`) {
    ul2.style.display = `none`;
  }
});

linext2.addEventListener(`click`, function () {
  let style = getComputedStyle(ul3);

  if (style.display === "none") {
    ul3.style.display = "initial";
  } else if (style.display !== "none") {
    ul3.style.display = "none";
  }
});

linext.addEventListener(`click`, function () {
  let style = getComputedStyle(ul4);

  if (style.display === `none`) {
    ul4.style.display = `initial`;
  } else if (style.display !== `none`) {
    ul4.style.display = `none`;
  }
});

li2.addEventListener(`click`, function () {
  let style = getComputedStyle(img5);

  if (style.rotate === `none`) {
    img5.style.rotate = `-90deg`;
  } else if (style.rotate !== `none`) {
    img5.style.rotate = `none`;
  }
});

                 //   Добавление товара

const cartSide = document.querySelector(`.cart`);
const scrollbar = document.querySelector(`.divkorz`);
let storage = JSON.parse(localStorage.getItem("cart"));

const renderCart = () => {
  cartSide.innerHTML = "";
  if (storage.length > 0) {
    storage.forEach((el, index) => {
      const { ptitle, pcena } = el;
      const newCard = document.createElement("li");
      newCard.innerHTML = `
      <div class="cart">
      <div class="grid02 cart">
      <div class="box">
      <img src="img/Group 106.png" alt="">
      </div>
      <div class="box">
      <p class="p1"> ${ptitle} </p>
      <p class="p2">Размер: <span>XXXL(54)</span> <span class="span2">Рост: 170</span></p>
      </div>
      <div class="box">
      <p class="p3"> ${pcena} <img src="img/Far.png" alt=""></p>
      </div>
      <div class="box">
      <div class="calculato counter" data-counter>
      <div class="divcalcul divcalc counter__button counter__button__minus">-</div>
      <div class="divcalcul counter__input"><input class="inputcount" type="text" value="1"></div>
      <div class="divcalcul divcalc2 counter__button counter__button__plus">+</div> 
      </div>
      </div>
      <div class="box">
      <div class="content">
      <p class="p4">Cумма</p>
      <div class="p5 divcalcul counter__input"><input class="inputsuma" type="text" value="8 000">  
      <img class="imggap" src="img/Far.png" alt=""></div>
      </div>
      </div>
      <div class="box">
      <button class="divx btkk" card-count="${index}">
      <span></span>
      <span></span>
      </button>
      </div>
      </div>
      </div>`;
      cartSide.appendChild(newCard);
    });
  } else {
    h2korzina.innerHTML = `Ваша Корзина Пуста`;
  }
};

renderCart();

document.onclick = (event) => {
  const cardPosition = event.target.getAttribute("card-count");

  if (event.target.classList.contains(`divx`) && cardPosition !== null) {
    storage.splice(cardPosition, 1);

    localStorage.setItem("cart", JSON.stringify(storage));

    renderCart();
  }
};

const p5 = document.querySelector(`.p5`);
const inputsuma = document.querySelector(`.inputsuma`);

const counters = document.querySelectorAll(`[data-counter]`);
if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener(`click`, (e) => {
      const target = e.target;

      if (target.closest(`.counter__button`)) {
        let value = parseInt(
          target.closest(`.counter`).querySelector(`input`).value,
        );

        if (target.classList.contains(`counter__button__plus`)) {
          value++;
        } else {
          value--;
        }
        if (value <= 0) {
          value = 0;
        }
        target.closest(`.counter`).querySelector(`input`).value = value;
      }
    });
  });
}

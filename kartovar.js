const gridnone = document.querySelector(`.gridnone`);
const divx = document.querySelector(`.divx`);
const pp2 = document.querySelector(`.pp2`);
const span4 = document.querySelector(`.span4`);
const span5 = document.querySelector(`.span5`);
const container = document.querySelector(`.container`);
const h2korzina = document.querySelector(`.h2korzina`);
const divx2 = document.querySelector(`.divx2`);
const grid2none = document.querySelector(`.grid2none`);
const grid01 = document.querySelector(`.grid01`);
const suma = document.querySelector(`.suma`);
// const span6 = document.querySelector(`.span6`);
const openpopup = document.querySelector(`.open-popup`);

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

//    Добавление товара

const cards = document.querySelectorAll(`.card`);

const countValue = document.querySelector("#count-value");
const cardStoreg = JSON.parse(localStorage.getItem(`cart`)) || [];

countValue.value = cardStoreg.length;

cards.forEach((el) => {
  //   console.dir(el)
  const ptitle = el.childNodes[3].innerText;
  const cena = el.childNodes[5].innerText;
  const pcena = el.childNodes[7].innerText;
  const btkk = el.childNodes[11];

  btkk.addEventListener(`click`, () => {
    const cardStoreg = localStorage.getItem(`cart`) || "[]";

    const cart = JSON.parse(cardStoreg);

    const card = { ptitle, pcena, btkk };
    localStorage.setItem(`cart`, JSON.stringify([...cart, card]));
  });
});

                   //  Счетчик

const counters = document.querySelectorAll(`[data-counter]`);
const sp3 = document.querySelector(".sp3");

let number = parseInt(sp3.textContent.replace(/\s/g, ""), 10);

if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener(`click`, (e) => {
      const target = e.target;

      if (target.closest(`.counter__button`)) {
        let inputField = target.closest(`.counter`).querySelector(`input`);
        let value = parseInt(inputField.value);

        if (isNaN(value) || value <= 0) value = 1;

        if (target.classList.contains(`counter__button__plus`)) {
          value++;
          number += 8000;
          sp3.textContent = number.toLocaleString();
        } else if (target.classList.contains(`counter__button__minus`)) {
          if (value > 1) {
            value--;
            number -= 8000;
            sp3.textContent = number.toLocaleString();
          }
        }

        inputField.value = value;
      }
    });
  });
}

                 //     Карусель карточек

const btleft = document.querySelector(`.btleft`);
const btrigt = document.querySelector(`.btrigt`);
const horizontScrol = document.querySelector(`.box4-2`);
const circleeleft = document.querySelector(`.circleeleft`);
const btritgh = document.querySelector(`.circleright`);
const horizontScroll = document.querySelector(`.box4`);
const buttonup = document.querySelector(`.buttonup`);
const buttondown = document.querySelector(`.buttondown`);
const vertikalScroll = document.querySelector(`.divgrid2`);

                 //   Вертикальная Карусель

buttonup.addEventListener(`click`, function () {
  if ((buttonup.style.backgroundColor = `rgb(207, 179, 156)`)) {
    buttondown.style.backgroundColor = `rgba(240, 235, 231, 1)`;
  }
  vertikalScroll.style.scrollBehavior = `smooth`;
  vertikalScroll.scrollTop += 151;
});

buttondown.addEventListener(`click`, function () {
  if ((buttondown.style.backgroundColor = `rgb(207, 179, 156)`)) {
    buttonup.style.backgroundColor = `rgba(240, 235, 231, 1)`;
  }
  vertikalScroll.style.scrollBehavior = `smooth`;
  vertikalScroll.scrollTop -= 151;
});
                 //     Горизонтальная Карусель

btritgh.addEventListener(`click`, function () {
  if ((btritgh.style.backgroundColor = `rgb(207, 179, 156)`)) {
    circleeleft.style.backgroundColor = `rgba(240, 235, 231, 1)`;
  }

  horizontScroll.style.scrollBehavior = `smooth`;
  horizontScroll.scrollLeft += 1195;
});

circleeleft.addEventListener(`click`, function () {
  if ((circleeleft.style.backgroundColor = `rgb(207, 179, 156)`)) {
    btritgh.style.backgroundColor = `rgba(240, 235, 231, 1)`;
  }
  horizontScroll.style.scrollBehavior = `smooth`;
  horizontScroll.scrollLeft -= 1195;
});

                       //     Карусель 2

btrigt.addEventListener(`click`, function () {
  if ((btrigt.style.backgroundColor = `rgb(207, 179, 156)`)) {
    btleft.style.backgroundColor = `rgba(240, 235, 231, 1)`;
  }
  horizontScrol.style.scrollBehavior = `smooth`;
  horizontScrol.scrollLeft += 1195;
});

btleft.addEventListener(`click`, function () {
  if ((btleft.style.backgroundColor = `rgb(207, 179, 156)`)) {
    btrigt.style.backgroundColor = `rgba(240, 235, 231, 1)`;
  }
  horizontScrol.style.scrollBehavior = `smooth`;
  horizontScrol.scrollLeft -= 1195;
});

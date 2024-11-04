const bt = document.querySelector(`.bt`);
const divinp = document.querySelector(`.divinp`);
const bt99 = document.querySelector(`.bt99`);
const li1 = document.querySelector(`.li1`);
const li01 =document.querySelector(`.li01`);
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
const li011 = document.querySelector(`.li011`);
const imgli011 = document.querySelector(`.imgli011`);
const ulkatalog = document.querySelector(`.ulkatalog`);


li03.addEventListener(`click`, function () {
     
     let style = getComputedStyle(imgli03);

     if (style.rotate === `none`) {
          imgli03.style.rotate = `-90deg`
     }
     else if (style.rotate !== `none`) {
          imgli03.style.rotate = `none`
     }

});

li04.addEventListener(`click`, function () {
     
     let style = getComputedStyle(imgli04);

     if (style.rotate === `none`) {
          imgli04.style.rotate = `-90deg`
     }
     else if (style.rotate !== `none`) {
          imgli04.style.rotate = `none`
     }

});

li05.addEventListener(`click`, function () {
     
     let style = getComputedStyle(imgli05);

     if (style.rotate === `none`) {
          imgli05.style.rotate = `-90deg`
     }
     else if (style.rotate !== `none`) {
          imgli05.style.rotate = `none`
     }

});

 li06.addEventListener(`click`, function () {
     
      let style = getComputedStyle(imgli06);

     if (style.rotate === `none`) {
         imgli06.style.rotate = `-90deg`
   }
      else if (style.rotate !== `none`) {
          imgli06.style.rotate = `none`
     }

});

li07.addEventListener(`click`, function () {
     
     let style = getComputedStyle(imgli07);

     if (style.rotate === `none`) {
          imgli07.style.rotate = `-90deg`
     }
     else if (style.rotate !== `none`) {
          imgli07.style.rotate = `none`
     }

});

li08.addEventListener(`click`, function () {
     
     let style = getComputedStyle(imgli08);

     if (style.rotate === `none`) {
          imgli08.style.rotate = `-90deg`
     }
     else if (style.rotate !== `none`) {
          imgli08.style.rotate = `none`
     }

});

li09.addEventListener(`click`, function () {
     
     let style = getComputedStyle(imgli09);

     if (style.rotate === `none`) {
          imgli09.style.rotate = `-90deg`
     }
     else if (style.rotate !== `none`) {
          imgli09.style.rotate = `none`
     }

});

li010.addEventListener(`click`, function () {
     
     let style = getComputedStyle(imgli010);

     if (style.rotate === `none`) {
          imgli010.style.rotate = `-90deg`
     }
     else if (style.rotate !== `none`) {
          imgli010.style.rotate = `none`
     }

});

li011.addEventListener(`click`, function() {

     let style = getComputedStyle(imgli011);

     if(style.rotate === `none`) {
        imgli011.style.rotate = `-90deg`
        ulkatalog.style.display = `block`
     }
     else if (style.rotate !== `none`) {
        imgli011.style.rotate = `none`
        ulkatalog.style.display = `none`
     }
});

li01.addEventListener(`click`, function() {

     if (img5.style.rotate = `none`) {
          ulkatalog.style.display = `none`
          imgli011.style.rotate = `none`
          imgli010.style.rotate = `none`
          imgli09.style.rotate = `none`
          imgli08.style.rotate = `none`
          imgli07.style.rotate = `none`
          imgli06.style.rotate = `none`
          imgli05.style.rotate = `none`
          imgli04.style.rotate = `none`
          imgli03.style.rotate = `none`
          ul3.style.display = `none`
     } 

});

btUp.addEventListener(`click`, function() {
    
     let style = getComputedStyle(img4);

    if (style.rotate === `none`) {
         img4.style.rotate = `180deg`
    }
      else if (style.rotate !== `none`) {
         img4.style.rotate = `none`
    }
 });

bt.addEventListener(`click`, function() {

    let style = getComputedStyle(divinp);

    if ( style.display === 'none' )  {
         divinp.style.display = 'initial'
    } 
    else if (style.display !== 'none') {
         divinp.style.display = 'none' 
     }
    
} );

bt99.addEventListener(`click`, function() {

    let style = getComputedStyle(divinp);

    if ( style.display === 'none' )  {
         divinp.style.display = 'initial'
    } 
    else if (style.display !== 'none') {
         divinp.style.display = 'none' 
     }
    
} );

li1.addEventListener(`click`, function() {

    let style = getComputedStyle(ul2);

    if ( style.display === 'none' )  {
         ul2.style.display = 'initial'
   
    } 
     else if (style.display !==`initial`) {
          ul2.style.display = `none`
     }

} );

linext2.addEventListener(`click`, function() {
   let style = getComputedStyle(ul3);

   if ( style.display === 'none' )  {
        ul3.style.display = 'initial'
   } 
   else if (style.display !== 'none') {
        ul3.style.display = 'none' 
    }

  });

linext.addEventListener(`click`, function () {

   let style = getComputedStyle(ul4);

   if (style.display === `none`) {
     ul4.style.display = `initial`
   }
   else if (style.display !== `none`) {
     ul4.style.display = `none`
   }

});

li2.addEventListener(`click`, function () {
     
     let style = getComputedStyle(img5);

     if (style.rotate === `none`) {
         img5.style.rotate = `-90deg`
  
     }
     else if (style.rotate !== `none`) {
          img5.style.rotate = `none`

     }

});

licall.addEventListener(`click`, function () {
    let style = getComputedStyle(divcall);

    if (style.display === `none`) {
       divcall.style.display = `initial`
    }
    else if (style.display !== `none`) {
       divcall.style.display = `none`
    }

});

               // Go-up

goup.addEventListener(`click`, goTop);
window.addEventListener(`scroll`, traksscroll);

function traksscroll() {
   const offset = window.pageYOffset;
   const coords = document.documentElement.clientHeight;
   if (offset > coords) {
     goup.classList.add(`go-up--show`);
   } else {
     goup.classList.remove(`go-up--show`);
   }

};

function goTop() {
   if (window.pageYOffset > 0) {
      window.scrollBy(0, -60);
      setTimeout(goTop, 0);
   }
};
    
const p0pp = document.querySelector(`.p0pp`);
const divnav = document.querySelector(`.divnav`);
const imgdow = document.querySelector(`.imgdow`);
const card2 = document.querySelector(`.card2`);
const imgdow22 = document.querySelector(`.imgdow22`);
const imgdow33 = document.querySelector(`.imgdow33`);
const p0pp1 = document.querySelector(`.p0pp1`);

p0pp.addEventListener(`click`, function () {
     
     let style = getComputedStyle(divnav);

     if (style.display === `none`) {
          divnav.style.display = `block`
          p0pp.innerHTML=`скрыть подразделы`
          imgdow.style.rotate = `-180deg`

     }
     else if (style.display !== `none`) {
          divnav.style.display = `none`
          p0pp.innerHTML=`показать подразделы`
          imgdow.style.rotate = `none`
          imgdow22.style.rotate =`none`
          imgdow33.style.rotate =`none`
          pbefor2.innerHTML=`показать подразделы`
          pbefor3.innerHTML=`показать подразделы`
     }

});

const pbefor2 = document.querySelector(`.pbefor2`);
const imgdow2 = document.querySelector(`.imgdow2`);
const imgdow11 = document.querySelector(`.imgdow11`);
pbefor2.addEventListener(`click`, function() {
    
     let style = getComputedStyle(divnav);

     if (style.display === `none`) {
          divnav.style.display = `block`
          pbefor2.innerHTML=`скрыть подразделы`
          imgdow2.style.rotate =`-180deg`
          imgdow11.style.rotate =`none`
          
     }
     else if (style.display !== `none`) {
          divnav.style.display = `none`
          pbefor2.innerHTML=`показать подразделы`
          imgdow2.style.rotate =`none`
          imgdow11.style.rotate =`none`
          imgdow33.style.rotate =`none`
          p0pp.innerHTML=`показать подразделы`
          pbefor3.innerHTML=`показать подразделы`
          
     }      

});

const pbefor3 = document.querySelector(`.pbefor3`);
const imgdow3 = document.querySelector(`.imgdow3`);

pbefor3.addEventListener(`click`, function() {

     let style = getComputedStyle(divnav);

     if (style.display === `none`) {
          divnav.style.display = `block`
          pbefor3.innerHTML=`скрыть подразделы`
          imgdow3.style.rotate =`-180deg`
          imgdow11.style.rotate =`none`
     }
     else if (style.display !== `none`) {
          divnav.style.display = `none`
          pbefor3.innerHTML=`показать подразделы`
          imgdow3.style.rotate =`none`
          imgdow11.style.rotate =`none`
          imgdow33.style.rotate =`none`
          imgdow2.style.rotate =`none`
          pbefor2.innerHTML=`показать подразделы`
          p0pp.innerHTML=`показать подразделы`
     }

});
    
                    //    Поиск

document.addEventListener(`DOMContentLoaded`, (e) => {
        document.getElementById(`bt`).addEventListener(`click`, (e) => {
        document.getElementById(`input`).classList.add(`divinp--show`)
})

document.getElementById(`closed`).addEventListener(`click`, (e) => {
     document.getElementById(`input`).classList.remove(`divinp--show`)
})

});
        
          //    popup

document.addEventListener(`DOMContentLoaded`, (e) => {
     document.getElementById(`btpopup`).addEventListener(`click`, (e) => { 
     document.getElementById(`popupbg`).classList.add(`popup-bgr`)
     document.querySelector(`html`).classList.add(`no-scroll`)
})
  
document.getElementById(`closed-popup`).addEventListener(`click`, (e) => {
     document.getElementById(`popupbg`).classList.remove(`popup-bgr`)
     document.querySelector(`html`).classList.remove(`no-scroll`)
})
});

                    //  PopUp2

document.addEventListener(`DOMContentLoaded`, (e) => {
     document.getElementById(`Inputbt`).addEventListener(`click`, (e) => { 
          e.preventDefault();
     document.getElementById(`pupbgr`).classList.add(`pupUpbg`)
     document.getElementById(`popupbg`).classList.remove(`popup-bgr`)
     
})

document.getElementById(`divclose`).addEventListener(`click`, (e) => {
     document.getElementById(`pupbgr`).classList.remove(`pupUpbg`)
     document.querySelector(`html`).classList.remove(`no-scroll`)
})

});

               //     PoupTablet

document.addEventListener(`DOMContentLoaded`, (e) => {
     document.getElementById(`btCall`).addEventListener(`click`, (e) => { 
     document.getElementById(`popupbg`).classList.add(`popup-bgr`)
     document.querySelector(`html`).classList.add(`no-scroll`)
})
  
document.getElementById(`closed-popup`).addEventListener(`click`, (e) => {
     document.getElementById(`popupbg`).classList.remove(`popup-bgr`)
     document.querySelector(`html`).classList.remove(`no-scroll`)
})
});

const openpopup = document.querySelector(`.open-popup`);
openpopup.addEventListener(`click`, function () {

     if (ul2.style.display = `none`) {
          ul3.style.display = `none`
     }
});

const btcal = document.querySelector(`#btCall`);
btcal.addEventListener(`click`, function () {
     
     if (ul2.style.display = `none`) {
          ul3.style.display = `none`
     }
});



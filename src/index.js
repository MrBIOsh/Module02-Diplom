import 'normalize.css';
import './styles/main.scss';

/*------------------------------------------------------------------------------------------------*/

const selectSingle = document.querySelectorAll('.dropdown');
const popupBtn = document.querySelectorAll('.btn-popup');
const popupBtnClose = document.querySelector('.popup__btn-close');
const popupWin = document.getElementById('popup');
const darkLayer = document.getElementById('shadow');
const modalWin = document.getElementById('modal');
const prevent = ev => ev.preventDefault();
const btnOpenModal = document.querySelector('.header').querySelector('.header__menu');
const btnCloseModal = document.getElementById('modal').querySelector('.modal__btn-close');
const forms = document.querySelectorAll('.form');

//Modal Menu

//Open modalWin by click on burger button

btnOpenModal.addEventListener('click', () => {
  modalWin.style.top = "0px";
  modalWin.style.zIndex = "10";
  darkLayer.style.opacity = '.8';
  darkLayer.style.zIndex = '9';
  document.addEventListener('touchmove', prevent, {passive: false});
  document.addEventListener('wheel', prevent, {passive: false});
})

  //Close modalWin by click on cross

btnCloseModal.addEventListener('click', () => {
  darkLayer.style.opacity = '0';
  darkLayer.style.zIndex = '-10';
  modalWin.style.top = "-580px";        
  document.removeEventListener('touchmove', prevent);  
  document.removeEventListener('wheel', prevent);    
})

  //Close modalWin by click on shadow div

document.getElementById('shadow').addEventListener('click', (evt) => {
  if (!evt.composedPath().includes(modalWin)) {
    modalWin.style.top = "-580px"
    darkLayer.style.opacity = '0';
    darkLayer.style.zIndex = '-10';
    document.removeEventListener('wheel', prevent);
    document.removeEventListener('touchmove', prevent);
  }
})

  //Close modalWin by link

modalWin.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', () => {
    darkLayer.style.opacity = '0';
    darkLayer.style.zIndex = '-10';
    modalWin.style.top = "-580px";        
    document.removeEventListener('touchmove', prevent);  
    document.removeEventListener('wheel', prevent);  
  })
})

//DropDown list

selectSingle.forEach(e => {
  let selectSingle_title = e.querySelector('.dropdown__title');
  let selectSingle_labels = e.querySelectorAll('.dropdown__label');

  // Toggle menu
  selectSingle_title.addEventListener('click', () => {    
    if ('active' === e.getAttribute('data-state')) {
      e.setAttribute('data-state', '');
    } else {
      e.setAttribute('data-state', 'active');
      for (let i = 0; i < selectSingle_labels.length; i++) {
          if (selectSingle_title.textContent === selectSingle_labels[i].textContent) {
              selectSingle_labels[i].setAttribute('id', 'block');
              document.getElementById('block').style.display = 'none';        
              selectSingle_labels[i].removeAttribute('id');
              break;
          }
      }
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      e.setAttribute('data-state', '');
      for (let i = 0; i < selectSingle_labels.length; i++) {
          selectSingle_labels[i].setAttribute('id', 'block');
          document.getElementById('block').style.display = 'block';
          selectSingle_labels[i].removeAttribute('id');
      }
    });
  }

  // Close when click to outside
  document.addEventListener('click', (evt) => {
    if (!evt.composedPath().includes(e)) {
      e.setAttribute('data-state', '');
    }
  })

})

//Circle red to grey
const socials = document.querySelectorAll('.socials__link');
for (let k = 1; k < socials.length; k++) {
  if (k === 1) {
    socials[k].addEventListener('mouseover', () => {
      document.querySelector('.socials').setAttribute('data-state', 'circle-grey');
    })
    socials[k].addEventListener('mouseout', () => {
    document.querySelector('.socials').setAttribute('data-state', 'circle-red');
    })
  }
  if (k === 2) {
    socials[k].addEventListener('mouseover', () => {
      document.querySelector('.socials').setAttribute('data-state', 'circle-grey-reverse');
    })
    socials[k].addEventListener('mouseout', () => {
    document.querySelector('.socials').setAttribute('data-state', 'circle-red');
    })
  }
}

//Scroll

document.querySelectorAll('.header__nav, .footer__nav').forEach(nav => {
  nav.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);
      const topOffset = 100;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
  })  
});

//PopUp

for (let i = 0; i < popupBtn.length; i++) {
  popupBtn[i].addEventListener('click', () => {    
    popupWin.style.visibility = 'visible';
    popupWin.style.transform = 'scale(1)';
    darkLayer.style.opacity = '.8';
    darkLayer.style.zIndex = '3';
    document.addEventListener('wheel', prevent, {passive: false});
    document.addEventListener('touchmove', prevent, {passive: false});
  })
}

popupBtnClose.addEventListener('click', () => {
  popupWin.style.visibility = 'hidden';
  popupWin.style.transform = 'scale(0)';
  darkLayer.style.opacity = '0';
  darkLayer.style.zIndex = '-10';
  document.removeEventListener('wheel', prevent);
  document.removeEventListener('touchmove', prevent);
})

document.getElementById('shadow').addEventListener('click', (evt) => {
  if (!evt.composedPath().includes(popupWin)) {
    popupWin.style.visibility = 'hidden';
    popupWin.style.transform = 'scale(0)';
    darkLayer.style.opacity = '0';
    darkLayer.style.zIndex = '-10';
    document.removeEventListener('wheel', prevent);
    document.removeEventListener('touchmove', prevent);
  }
})

// Validation

document.addEventListener('DOMContentLoaded', () => {

  forms.forEach(form => {

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let formInput = form.querySelector('.form__input'); 

      if (formInput == "") {
        formInput.style.border = "1px solid rgba(243, 242, 240, 0)";
      } else { 
        if ((!emailTest(formInput)) && (!telTest(formInput))) {
        formInput.style.border = "1px solid rgb(234, 14, 0)";
          formInput.onfocus = () => {
            if (getComputedStyle(formInput).border == "1px solid rgb(234, 14, 0)") {
                formInput.style.border = "1px solid rgba(243, 242, 240, 0)";
                formInput.value = "";
            }
          }
        }
      }

      function emailTest(formInput) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(formInput.value);
      }
      
      function telTest(formInput) {
        return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(formInput.value);
      }

    })
  })  
});


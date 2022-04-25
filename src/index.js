import 'normalize.css';
import './styles/main.scss';

const selectSingle = document.querySelector('.dropdown');
const selectSingle_title = selectSingle.querySelector('.dropdown__title');
const selectSingle_labels = selectSingle.querySelectorAll('.dropdown__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {    
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    document.getElementById('active').style.display = 'block';
  } else {
    selectSingle.setAttribute('data-state', 'active');
    for (let i = 0; i < selectSingle_labels.length; i++) {
        if (selectSingle_title.textContent === selectSingle_labels[i].textContent) {
            selectSingle_labels[i].setAttribute('id', 'block');
            document.getElementById('block').style.display = 'none';
        }        
        selectSingle_labels[i].removeAttribute('id');
    }
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].setAttribute('id', 'block');
        document.getElementById('block').style.display = 'block';
        selectSingle_labels[i].removeAttribute('id');
    }
  });
}
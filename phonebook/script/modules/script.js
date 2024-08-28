import {deleteControl, formControl, modalControl} from './control.js';
import {renderContacts, renderPhoneBook} from './render.js';
import hoverRow from './render.js';
import {getStorage} from './serviceStorage.js';


{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = renderPhoneBook(app, title);


    // Функционал

    const data = getStorage('contacts');

    const allRow = renderContacts(list, data);
    const {closeModal} = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    modalControl(btnAdd, formOverlay);
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);

    document.addEventListener('touchstart', e => {
      console.log(e.type);
    });
    document.addEventListener('touchmove', e => {
      console.log(e.type);
    });
    document.addEventListener('touchend', e => {
      console.log(e.type);
    });
  };

  window.phoneBookInit = init;
}

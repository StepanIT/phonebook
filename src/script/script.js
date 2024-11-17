import {deleteControl, formControl, modalControl} from './control';
import {renderContacts, renderPhoneBook} from './render';
import hoverRow from './render';
import {getStorage} from './serviceStorage';


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

const data = [
  {
    name: 'Иван',
    surname: 'Петров',
    phone: '+79514545454',
  },
  {
    name: 'Игорь',
    surname: 'Семёнов',
    phone: '+79999999999',
  },
  {
    name: 'Семён',
    surname: 'Иванов',
    phone: '+79800252525',
  },
  {
    name: 'Мария',
    surname: 'Попова',
    phone: '+79876543210',
  },
];

export const getStorage = key => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};


export const setStorage = (key, object) => {
  const data = getStorage(key);
  data.push(object);
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeStorage = (key, phone) => {
  let data = getStorage(key);
  data = data.filter(contact => contact.phone !== phone);
  localStorage.setItem(key, JSON.stringify(data));
};

export const addContactData = contact => {
  data.push(contact);
  console.log('data:', data);
};


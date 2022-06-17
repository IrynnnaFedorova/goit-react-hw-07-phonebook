const BASE_URL = 'https://61d9a966ce86530017e3cbd2.mockapi.io';

const endpoints = {
  contacts: '/contacts',
};

const fetchURL = `${BASE_URL}${endpoints.contacts}`;

async function fetchCreator(fetchURL = '', options = {}) {
  const responce = await fetch(fetchURL, options);

  const result = await responce.json();

  return result;
}

export function fetchAllItems() {
  return fetchCreator(fetchURL);
}

export function fetchSendData(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetchCreator(fetchURL, options);
}

export function fetchDeleteById(id) {
  const options = {
    method: 'DELETE',
  };

  return fetchCreator(`${fetchURL}/${id}`, options);
}

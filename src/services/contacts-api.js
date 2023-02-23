// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });
import { instance } from './auth-api';

export const getContacts = async () => {
  const { data } = await instance.get(`/contacts`);
  return data;
};

export const postContact = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};

export const patchContact = async contact => {
  const { data } = await instance.patch(`/contacts/${contact.id}`, {
    name: contact.name,
    number: contact.number,
  });
  return data;
};

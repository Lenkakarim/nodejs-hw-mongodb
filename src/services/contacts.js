import { Contact } from '../models/contactModel.js';

export const getAllContacts = async () => {
  return await Contact.find();
};

export const getContactById = async (id) => {
  return await Contact.findById(id);
};

export const addContact = async (contactData) => {
  const contact = new Contact(contactData);
  return await contact.save();
};
// export const getAllContacts = async () => {
//   try {
//     const contacts = await Contact.find();
//     return contacts;
//   } catch (err) {
//     console.error('Error fetching contacts:', err);
//     return null;
//   }
// };
// export const getContactById = async (id) => {
//   try {
//     const contact = await Contact.findById(id);
//     return contact;
//   } catch (err) {
//     console.error('Error fetching contact by ID:', err);
//     return null;
//   }
// };
// export const addContact = async (contactData) => {
//   try {
//     const contact = new Contact(contactData);
//     const savedContact = await contact.save();
//     return savedContact;
//   } catch (err) {
//     console.error('Error adding contact:', err);
//     return null;
//   }
// };

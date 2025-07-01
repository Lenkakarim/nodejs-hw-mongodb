import Contact from '../models/contactModel.js';

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

export const removeContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

export const updateContact = async (id, updateData) => {
  return await Contact.findByIdAndUpdate(id, updateData, { new: true });
};

export const patchContact = async (id, updateData) => {
  return await Contact.findByIdAndUpdate(id, updateData, { new: true });
};

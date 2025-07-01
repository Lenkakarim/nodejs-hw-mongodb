import createError from 'http-errors';
import {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  patchContact,
} from '../services/contacts.js';

export async function getAllContactsController(req, res) {
  const contacts = await getAllContacts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
}

export async function getContactByIdController(req, res) {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    throw createError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
}

export async function createContactController(req, res) {
  const { name, phoneNumber, contactType, email, isFavourite } = req.body;

  if (!name || !phoneNumber || !contactType) {
    throw createError(
      400,
      'Missing required fields: name, phoneNumber, contactType',
    );
  }

  const newContact = await addContact({
    name,
    phoneNumber,
    contactType,
    email,
    isFavourite,
  });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
}

export async function deleteContactController(req, res) {
  const { contactId } = req.params;
  const deletedContact = await removeContact(contactId);

  if (!deletedContact) {
    throw createError(404, 'Contact not found');
  }

  res.status(204).end();
}

export async function updateContactController(req, res) {
  const { contactId } = req.params;
  const updateData = req.body;
  const updatedContact = await updateContact(contactId, updateData);

  if (!updatedContact) {
    throw createError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Contact with id ${contactId} updated successfully!`,
    data: updatedContact,
  });
}

export async function patchContactController(req, res) {
  const { contactId } = req.params;
  const updateData = req.body;

  if (!updateData || Object.keys(updateData).length === 0) {
    throw createError(400, 'No data provided for update');
  }

  const updatedContact = await patchContact(contactId, updateData);

  if (!updatedContact) {
    throw createError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: updatedContact,
  });
}

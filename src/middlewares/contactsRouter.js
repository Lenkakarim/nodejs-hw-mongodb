import express from 'express';
import contactsController from '../controllers/contactsController.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import {
  addContactSchema,
  updateContactSchema,
} from '../validation/contactsSchemas.js';

const router = express.Router();

router.get('/', contactsController.getAllContacts);

router.get('/:contactId', isValidId, contactsController.getContactById);

router.post('/', validateBody(addContactSchema), contactsController.addContact);

router.delete('/:contactId', isValidId, contactsController.deleteContact);

router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  contactsController.updateContact,
);

export default router;

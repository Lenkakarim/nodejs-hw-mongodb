import Joi from 'joi';

const name = Joi.string().min(3).max(20).required();
const email = Joi.string().email().min(3).max(20).required();
const phoneNumber = Joi.string().min(3).max(20).required();
const isFavourite = Joi.boolean().optional();
const contactType = Joi.string().valid('personal', 'work', 'other').optional();

export const addContactSchema = Joi.object({
  name,
  email,
  phoneNumber,
  isFavourite,
  contactType,
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('personal', 'work', 'other'),
}).min(1);

import Joi from "joi";

const CURRENT_YEAR = new Date().getFullYear();

const requiredMessage = 'You must fill this field to continue';

const carValidator = Joi.object(
{
    brand: Joi.string().pattern(/^[A-Za-z\u0400-\u04FF]{1,20}$/).required().messages(
    {
        'string.empty': requiredMessage,
        'any.required': requiredMessage,
        'string.pattern.base': 'Brand must contain only letters (Latin or Cyrillic), 1 to 20 characters'
    }),

    year: Joi.number().empty('').integer().min(1990).max(CURRENT_YEAR).required().messages(
    {
        'any.required': requiredMessage,
        'number.base': 'Year must be a number',
        'number.integer': 'Year must be a whole number',
        'number.min': 'Year must be 1990 or later',
        'number.max': `Year must not be later than ${CURRENT_YEAR}`
    }),
    price: Joi.number().empty('').integer().min(0).max(1_000_000).required().messages(
    {
        'any.required': requiredMessage,
        'number.base': 'Price must be a number',
        'number.integer': 'Price must be a whole number',
        'number.min': 'Price must not be negative',
        'number.max': 'Price must not exceed 1 000 000$'
    }),
});

export default carValidator;
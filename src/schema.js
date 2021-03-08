const Joi = require('joi')
    .extend(require('@joi/date'));

export const validateSchema = Joi.object()
  .keys({
    name: Joi.string().trim().allow('', null),
    emailId: Joi.string().email({ tlds: { allow: false } }).required(),
    aadharNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required().allow('', null),
    panNumber: Joi.string().alphanum().min(10).max(10).required().allow('', null),
    employeeType: Joi.string().trim().allow('', null),
    joiningDate: Joi.date().format('DD-MM-YYYY')
  })
  .default()
  .unknown();
  
import Joi from 'joi';
import messages from './messages';

const schema = Joi.object().keys({
  id: Joi.number().allow(null).messages(messages),
  name: Joi.string().required().label('Nome').messages(messages),
  token: Joi.string().required().label('Senha').min(8).messages(messages),
  email: Joi.string().required().label('E-mail').messages(messages),
  isAdmin: Joi.boolean().required().label('É Administrador?').messages(messages),
  departments: Joi.array().required().min(1).label('Departamento').messages(messages),
});

export default schema;

import Joi from 'joi';
import messages from './messages';

const schema = Joi.object().keys({
  title: Joi.string().required().label('Título').messages(messages),
  link: Joi.string().allow('').label('Link').messages(messages),
  message: Joi.string().required().label('Mensagem').messages(messages),
  allUsers: Joi.boolean().label('Todos usuários').messages(messages),
  allDepartments: Joi.boolean().label('Todos departamentos').messages(messages),
  departments: Joi.array().required().min(1).label('Departamento').messages(messages),
  to: Joi.array().required().min(1).label('Usuário').messages(messages),
});

export default schema;

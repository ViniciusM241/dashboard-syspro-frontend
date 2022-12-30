import Joi from 'joi';
import messages from './messages';

const schema = Joi.object().keys({
  id: Joi.number().allow(null).messages(messages),
  name: Joi.string().required().label('Nome').messages(messages),
});

export default schema;

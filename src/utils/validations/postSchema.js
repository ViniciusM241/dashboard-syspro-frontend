import Joi from 'joi';
import messages from './messages';

const schema = Joi.object().keys({
  id: Joi.number().allow(null).messages(messages),
  title: Joi.string().required().label('Título').messages(messages),
  subtitle: Joi.string().required().label('Subtítulo').messages(messages),
  content: Joi.string().required().label('Conteúdo').messages(messages),
  thumbnailUrl: Joi.string().required().allow(null).label('URL imagem de capa').messages(messages),
  draft: Joi.boolean().required().label('Rascunho').messages(messages),
});

export default schema;

import * as Joi from 'joi';

export const get: any ={
  params: Joi.object({
    id: Joi.string().required()
  })
}

export const create: any = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    crew: Joi.number().required(),
    defense: Joi.number().required(),
    weapon: Joi.number().required(),
  }),
};

export const update: any = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    crew: Joi.number().required(),
    defense: Joi.number().required(),
    weapon: Joi.number().required(),
  }),
};


export const deleteSchema: any = {
  params: Joi.object({
    id: Joi.string().required()
  }),
};

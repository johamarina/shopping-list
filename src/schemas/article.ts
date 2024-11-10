import joi from "joi";

export const ArticleSchema = joi
  .object({
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required(),
    purchased: joi.boolean().allow(null),
  })
  .prefs({ convert: false });

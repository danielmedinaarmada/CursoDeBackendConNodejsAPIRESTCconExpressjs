import Joi from "joi";

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15).messages({
  "string.base": "Name must be a string",
  "string.min": "Name must be min 3 characters",
  "string.max": "Name must be max 15 characters",
  "string.empty": "Name is required",
});
const price = Joi.number().integer().min(30).positive().messages({
  "number.base": "Price must be a number",
  "number.integer": "Price must be a number without decimal",
  "number.min": "Price must be min 30 number",
  "number.positive": "Price must be positive",
  "number.empty": "Price is required",
});
const image = Joi.string().uri().messages({
  "string.uri": "Image must be a url",
});;

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name,
  price,
  image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

export {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
}

import boom from '@hapi/boom';

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const options = { abortEarly: false };
    //la info viene de varios lugares.
    //post -> req.body;
    // get -> req.params;
    //     -> req.query;
    const { error } = schema.validate(data, options);
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
}

export default validatorHandler;

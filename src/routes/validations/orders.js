const { validateRoute } = require('express-ajv-middleware');

const validateCreateOrders = validateRoute({
    body: {
      type: 'object',
      properties: {
        userId: {
          type: "string"
        },
        status: {
          type: "string"
        },
        adress: {
            type: "string"
        }
      },
      required: [
        "userId",
        "status",
        "adress"
      ]
    }
  });

  module.exports = {
    validateCreateOrders,
  } 
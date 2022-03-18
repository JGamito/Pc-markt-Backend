const { validateRoute } = require('express-ajv-middleware');

const validateCreateOrderProducts = validateRoute({
    body: {
      type: 'object',
      properties: {
        productId: {
          type: "string"
        },
        orderId: {
          type: "string"
        },
        quantify: {
            type: "number"
        }
      },
      required: [
        "productId",
        "orderId",
        "quantify"
      ]
    }
  });


  module.exports = {
    validateCreateOrderProducts,
  } 
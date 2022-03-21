const { validateRoute } = require("express-ajv-middleware");

const validateCreateOrderProducts = validateRoute({
  body: {
    type: "object",
    properties: {
      productId: {
        type: "string",
      },
      orderId: {
        type: "string",
      },
      quantity: {
        type: "number",
      },
    },
    required: ["productId", "orderId", "quantity"],
  },
});

module.exports = {
  validateCreateOrderProducts,
};

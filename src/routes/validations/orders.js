const { validateRoute } = require("express-ajv-middleware");

const validateCreateOrders = validateRoute({
  body: {
    type: "object",
    properties: {
      userId: {
        type: "string",
      },
      status: {
        const: "pending",
      },
      adress: {
        type: "string",
      },
    },
    required: ["userId", "status", "adress"],
  },
});

const validateUpdateOrders = validateRoute({
  body: {
    type: "object",
    properties: {
      userId: {
        type: "string",
      },
      status: {
        const: "pending",
      },
      adress: {
        type: "string",
      },
    },
    required: ["userId", "status", "adress"],
  },
});

module.exports = {
  validateCreateOrders,
  validateUpdateOrders,
};

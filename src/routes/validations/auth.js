const { validateRoute } = require("express-ajv-middleware");

const validateLogin = validateRoute({
  body: {
    type: "object",
    properties: {
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
    },
    required: ["email", "password"],
  },
});

const validateRegister = validateRoute({
  body: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      surname: {
        type: "string",
      },
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
      street: {
        type: "string",
      },
      city: {
        type: "string",
      },
      province: {
        type: "string",
      },
      postalCode: {
        type: "number",
      },
      streetExtra: {
        type: "string",
      },
      phone: {
        type: "number",
      },
      status: {
        type: "string",
      },
    },
    required: [
      "name",
      "surname",
      "email",
      "password",
      "street",
      "city",
      "province",
      "postalCode",
      "phone",
      "status",
    ],
  },
});

module.exports = {
  validateLogin,
  validateRegister,
};

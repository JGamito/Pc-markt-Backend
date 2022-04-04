const { validateRoute } = require("express-ajv-middleware");

const validateCreateUsers = validateRoute({
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
        type: "tel",
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

const validateUpdateUsers = validateRoute({
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
        type: "tel",
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

const validatePatchUsers = validateRoute({
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
        type: "tel",
      },
      status: {
        type: "string",
      },
    },
  },
  required: [],
});

module.exports = {
  validateCreateUsers,
  validatePatchUsers,
  validateUpdateUsers,
};

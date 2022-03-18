const { validateRoute } = require('express-ajv-middleware');

const validateCreateUsers = validateRoute({
  body: {
    type: 'object',
    properties: {
      name: {
        type: "string"
      },
      surname: {
        type: "string"
      },
      email: {
        type: "string"
      },
      password: {
        type: "string"
      },
      adress: {
        type:"string"
      },
      phone: {
          type: "number"
      },
      status: {
          type "string"
      },

    },

    required: [
      "name",
      "surname",
      "email",
      "password",
      "adress",
      "phone",
      "status"
    ]
  }
});

const validateUpdateUsers = validateRoute({
    body: {
        type: 'object',
        properties: {
          name: {
            type: "string"
          },
          surname: {
            type: "string"
          },
          email: {
            type: "string"
          },
          password: {
            type: "string"
          },
          adress: {
            type: "string"
          },
          phone: {
              type: "number"    
          },

          status: {
              type "string"
          },
          completed: {
              type: "boolean"
          }
    
        },
    required: [
        "name",
        "surname",
        "email",
        "password",
        "adress",
        "phone",
        "status"
    ]
  }
});

const validatePatchUsers = validateRoute({
    body: {
        type: 'object',
        properties: {
          name: {
            type: "string"
          },
          surname: {
            type: "string"
          },
          email: {
            type: "string"
          },
          password: {
            type: "string"
          },
          adress: {
            type: "string"
          },
          phone: {
              type: "number"
          },
          status: {
              type "string"
          },
          completed {
            type "boolean"
          },
    
        },
    required: [],
  }
});

module.exports = {
  validateCreateUsers,
  validatePatchUsers,
  validateUpdateUsers,
} 
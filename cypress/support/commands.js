import Ajv from 'ajv';
import addFormats from 'ajv-formats';

Cypress.Commands.add('validateSchema', (data, schema) => {
  const ajv = new Ajv({ strict: false });
  addFormats(ajv);
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    throw new Error(`Schema validation failed: ${JSON.stringify(validate.errors)}`);
  }
});

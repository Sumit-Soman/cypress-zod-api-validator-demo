import UserSchema  from '../../schemas/open-api-schemas/userschema.json';
import NotFoundSchema  from '../../schemas/open-api-schemas/notfoundschema.json';

describe('API Schema Validation', () => {
  it('Validates the GET /users/1 response schema', () => {
    cy.request('GET', '/users/1').then(response => {
        cy.validateSchema(response.body, UserSchema.components.schemas.User, {status: 200});
    });
  });

  // throws validation error on missing age
  it('Validates the GET /users/2 response schema', () => {
    cy.request('GET', '/users/2').then(response => {
        cy.validateSchema(response.body, UserSchema.components.schemas.User, {status: 200});
    });
  });

  it('Validates the GET /users/4 response 404 not found', () => {
    cy.request({method: 'GET', url: '/users/4', failOnStatusCode: false}).then(response => {
        cy.validateSchema(response.body, NotFoundSchema.components.schemas.error, {status: 404});
    });
  });
});

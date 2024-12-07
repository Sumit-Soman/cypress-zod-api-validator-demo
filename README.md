# **Cypress-Zod-OpenAPI Schema Validation**

This project demonstrates how to:  
1. Start a server that provides user information.  
2. Generate an OpenAPI specification dynamically from Zod schemas.  
3. Validate API responses using Cypress and OpenAPI schema definitions.  

By following this guide, you'll ensure API consistency, schema compliance, and prevent breaking changes at the pull request level.

---

## **Features**
- **Server Setup**: Simple API to fetch user details.  
- **Dynamic Schema Generation**: Use `zod-to-openapi` to create OpenAPI specs from Zod schemas.  
- **End-to-End Testing**: Validate API responses with Cypress and `zod-to-json-schema`.  

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone <repository_url>
cd cypress-zod-api-validator
npm install
```

### **Start the Server**

To start the Express server and serve API endpoints, use the following command:  
```bash
npm run start

```
This starts the server at http://localhost:3003,

Endpoints:

GET /users: Returns a list of users.
GET /users/:id: Fetches a specific user or returns 404 if the user doesn't exist.

### Generate OpenAPI Specification
Generate the OpenAPI specification dynamically from Zod schemas using:
```
npm run generate:openapi
```
The generated OpenAPI file is saved at schemas/open-api-schemas

### **Run Cypress Tests**

Start Cypress to validate API responses against the generated OpenAPI specification. You can use either the interactive GUI mode or headless mode for testing.

#### **Run in GUI Mode**
To open Cypress in GUI mode for interactive testing, use:
```bash
npm run cypress:open
```
#### **Run in Headless Mode**
To open Cypress in GUI mode for interactive testing, use:
```bash
npm run cypress:run

```
### **Additional Information**

#### **Prerequisites**
- **Node.js**: v16 or higher  

#### **Key Dependencies**
- **Express**: For the server.  
- **Zod**: For schema validation.  
- **zod-to-openapi**: To convert Zod schemas to OpenAPI specifications.  
- **Cypress**: For end-to-end API testing.  

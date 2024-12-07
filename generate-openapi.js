import fs from 'fs';
import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import * as schemaslist from './schemas/zod-schemas/index.js'

Object.entries(schemaslist).forEach((schema) => {
    const generator = new OpenApiGeneratorV3([schema[1]]);
    const components = generator.generateComponents();
    const fileName = schema[0];

    fs.writeFileSync(`./schemas/open-api-schemas/${fileName.toLowerCase()}.json`, JSON.stringify(components, null, 2));
    console.log(`OpenAPI spec generated at ${fileName.toLowerCase()}.json`);
})
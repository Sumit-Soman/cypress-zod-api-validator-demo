import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

const NotFoundSchema = z
    .object({
        error: z.string().openapi({ example: 'User with ID 3 not found' }),
    })
.openapi('error');

export { NotFoundSchema };

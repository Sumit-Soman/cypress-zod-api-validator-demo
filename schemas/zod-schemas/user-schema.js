import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

const UserSchema = z
    .object({
        id: z.string().openapi({ example: '1' }),
        name: z.string().openapi({ example: 'John Doe' }),
        age: z.number().openapi({ example: 10 }),
    })
.openapi('User');

export { UserSchema };

import { defineEventHandler, readBody } from 'h3';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string({required_error: "Username is required"}).min(4, { message: "Invalid username" }),
  password: z.string({required_error: "Password is required"}).min(4, { message: "Password must be at least 4 characters" }),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    loginSchema.parse(body);
  } catch (err: any) {
    return { error: err.errors };
  }

  let user = null;
  if (body.username === 'admin' && body.password === 'admin') {
    user = { username: 'admin', role: 'admin' };
  } else if (body.username === 'employee' && body.password === 'employee') {
    user = { username: 'employee', role: 'employee' };
  } else {
    return { error: 'Invalid credentials' };
  }

  return { success: true, data: user  };
});

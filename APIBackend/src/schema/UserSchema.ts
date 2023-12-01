import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "Name must be greater than 1 characters!" }),
    passWord: z
      .string()
      .min(4, { message: "PassWord must be greater than 4 characters!" }),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
      passWord: z
        .string()
        .min(4, { message: "passWord must be greater than 4 characters!" }),
    })
    .partial(),
});
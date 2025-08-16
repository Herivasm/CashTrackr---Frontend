import * as z from 'zod'

export const RegisterSchema = z.object({
    email: z.email({ message: 'Correo no válido' })
        .min(1, { message: 'El correo es obligadorio' }),
    name: z.string()
        .min(1, { message: 'Tu nombre no puede ir vacío' }),
    password: z.string()
        .min(8, { message: 'La contraseña debe tener mínimo 8 caracteres' }),
    password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
    message: 'Las contraseñas no coinciden',
    path: ['password_confirmation']
})

export const TokenSchema = z.string({ message: 'Token no válido' })
    .length(6, { message: 'Token no válido' })

export const LoginSchmea = z.object({
    email: z.email({ message: 'Correo no válido' })
        .min(1, { message: 'El correo es obligatorio' }),
    password: z.string()
        .min(1, { message: 'La contraseña no puede ir vacía' })
})

export const SuccessSchema = z.string()
export const ErrorResponseSchema = z.object({
    error: z.string()
})

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.email()
})

export const ForgotPasswordSchema = z.object({
    email: z.email({ message: 'Correo no válido' })
        .min(1, { message: 'El correo es obligatorio' })
})

export const ResetPasswordSchema = z.object({
    password: z.string()
        .min(8, { message: 'La contraseña debe tener mínimo 8 caracteres' }),
    password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
    message: 'Las contraseñas no coinciden',
    path: ['password_confirmation']
})

export const DraftBudgetSchema = z.object({
    name: z.string()
        .min(1, { message: 'El nombre del presupuesto es obligatorio' }),
    amount: z.coerce.
        number({ message: 'Cantidad no válida' })
        .min(1, { message: 'Cantidad no válida' }),
})

export const PasswordValidationSchema = z.string()
    .min(8, { message: 'Contraseña no válida' })

export const DraftExpenseSchema = z.object({
    name: z.string()
        .min(1, { message: 'El nombre del gasto es obligatorio' }),
    amount: z.coerce.number()
        .min(1, { message: 'Cantidad no válida' })
})

export const UpdatePasswordSchema = z.object({
    current_password: z.string()
        .min(1, { message: 'La contraseña no puede ir vacía' }),
    password: z.string()
        .min(8, { message: 'La nueva contraseña debe tener mínimo 8 caracteres' }),
    password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
    message: 'Las contraseñas no coinciden',
    path: ['password_confirmation']
})

export const ProfileFormSchema = z.object({
    name: z.string()
        .min(1, { message: 'Tu nombre no puede ir vacio' }),
    email: z.email({ message: 'Correo no válido' })
        .min(1, { message: 'El correo es obligatorio' })
})

export const ExpenseAPIResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    amount: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    budgetId: z.number()
})


export const BudgetAPIResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    amount: z.string(),
    userId: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    expenses: z.array(ExpenseAPIResponseSchema)
})
export const BudgetsAPIResponseSchema = z.array(BudgetAPIResponseSchema.omit({ expenses: true }))


export type User = z.infer<typeof UserSchema>
export type Budget = z.infer<typeof BudgetAPIResponseSchema>
export type Expense = z.infer<typeof ExpenseAPIResponseSchema>
export type DraftExpense = z.infer<typeof DraftExpenseSchema>


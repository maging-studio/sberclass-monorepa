import {
    createSchema,
    Type,
    ExtractProps,
    typedModel,
} from 'ts-mongoose';

export enum userRole {
    ADMIN = 'ADMIN',
    TEACHER = 'TEACHER',
    CORRECTOR = 'CORRECTOR',
    DESIGNER = 'DESIGNER',
    METODOLOGIST = 'METODOLOGIST',
}

export const userSchema = createSchema({
    phone: Type.string({ default: null, required: true }),
    login: Type.string({ default: null, required: true }),
    email: Type.string({ default: null }),
    firstName: Type.string({ default: null }),
    lastName: Type.string({ default: null }),
    middleName: Type.string({ default: null }),
    role: Type.string({ required: true, default: 'ADMIN', enum: Object.values(userRole) }),
    confirmed: Type.boolean({ default: false }),
});

export type UserProps = ExtractProps<typeof userSchema>;

export const UserModel = typedModel('User', userSchema, undefined, true);

export const models = {
    user: UserModel
};
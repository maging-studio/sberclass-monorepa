import { Field, ObjectType } from '@nestjs/graphql';
import { userRole } from 'src/domain/sber/user/user.data';

@ObjectType()
export class User {
    @Field({ nullable: false })
    _id: string;

    @Field({ nullable: false })
    firstName: string;

    @Field({ nullable: false })
    lastName: string;

    @Field({ nullable: false })
    phone: string;

    @Field({ nullable: false })
    login: string;

    @Field({ nullable: false })
    email: string;

    @Field({ nullable: false })
    middleName: string;

    // @Field({ nullable: false })
    // role: userRole;

    @Field({ nullable: false })
    confirmed: boolean;
}
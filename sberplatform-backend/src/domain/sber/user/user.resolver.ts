import { Resolver, Query, ResolveField, Parent, Args } from '@nestjs/graphql';
import { UserService } from 'src/domain/sber/user/user.service';
import { User } from './user.gql';

@Resolver(of => User)
export class UserResolver {
    constructor(
        private userService: UserService,
    ) { }

    @Query(returns => User, { name: 'user' })
    async author(@Args('id') id: string): Promise<User> {
        return this.userService.findById(id);
    }
}
import {
    Body,
    Controller, Get, Inject, Put, Request,
} from '@nestjs/common';
import { createAppError } from 'src/lib/error';
import { UserService } from './user.service';


@Controller('/user')
export class UserController {
    constructor(
        @Inject(UserService)
        private readonly userService: UserService,
    ) { }

    @Get('/kek')
    async kek() {
        return this.userService.kek();
    }

    @Put('/create')
    async create(@Body() body: any) {
        return this.userService.create(body);
    }

    // @Put('profile/subscribe')
    // async subscribe(@Request() req): Promise<any> {
    //     const user = await this.userService.checkAuth(req);

    //     const result = await this.userService.subscribe({ userId: user.id });

    //     if (result) {
    //         return 'ok';
    //     }

    //     throw createAppError('DOMAIN_ERROR');
    // }

    // @Put('profile/unsubscribe')
    // async unsubscribe(@Request() req): Promise<any> {
    //     const user = await this.userService.checkAuth(req);

    //     const result = await this.userService.unsubscrive({ userId: user.id });

    //     if (result) {
    //         return 'ok';
    //     }

    //     throw createAppError('DOMAIN_ERROR');
    // }

    // @Put('profile/setNfc')
    // async setNfc(@Request() req): Promise<any> {
    //     const { token } = req.body;
    //     const user = await this.userService.checkAuth(req);

    //     return this.userService.addNfc({ userId: user.id, nfcToken: token });
    // }

    // @Put('profile/bindDeviceToUser')
    // async bindDeviceToUser(@Request() req): Promise<any> {
    //     const { deviceId } = req.body;
    //     const user = await this.userService.checkAuth(req);

    //     return this.userService.addDeviceToUser({ userId: user.id, deviceId });
    // }

    // @Put('profile/addFavoritePlace')
    // async addFavoritePlace(@Request() req): Promise<any> {
    //     const { place } = req.body;
    //     const user = await this.userService.checkAuth(req);

    //     return this.userService.addFavoritePlace({ userId: user.id, place });
    // }

    // @Put('profile/removeFavoritePlace')
    // async removeFavoritePlace(@Request() req): Promise<any> {
    //     const { placeId } = req.body;
    //     const user = await this.userService.checkAuth(req);

    //     return this.userService.removeFavoritePlace({ userId: user.id, placeId });
    // }

    // @Put('/user/authNfc')
    // async authNfc(@Request() req): Promise<any> {
    //     const { nfc } = req.body;

    //     const user: any = await this.userService.getUserByNfc({ nfc });

    //     console.log(user);

    //     if (!user) {
    //         throw createAppError('UNAUTHORIZED');
    //     }

    //     return this.userService.createJwtToken({ id: user.id });
    // }

    // @Put('/user/authOrCreateUserFirebase')
    // async authOrCreateUserFirebase(@Request() req): Promise<any> {
    //     const { idToken } = req.body;

    //     const user = await this.userService.authOrCreateUserFirebase(idToken);

    //     return this.userService.createJwtToken({ id: user.id });
    // }

    // @Put('/user/updateUserInfo')
    // async updateUserInfo(@Request() req): Promise<any> {
    //     const { id }: any = await this.userService.checkAuth(req);

    //     const { userInfo } = req.body;

    //     const updated = this.userService.updateUserInfo(id, userInfo);

    //     return updated ? 'OK' : 'ERROR';
    // }

    // @Put('/user/me')
    // async me(@Request() req): Promise<any> {
    //     try {
    //         return this.userService.checkAuth(req);
    //     } catch (e) {
    //         throw createAppError('UNAUTHORIZED');
    //     }
    // }

    // @Put('/user/getMyVehicles')
    // async getMyVehicles(@Request() req): Promise<any> {
    //     try {
    //         const user = await this.userService.checkAuth(req);

    //         return user.profile.vehicles;
    //     } catch (e) {
    //         throw createAppError('DOMAIN_ERROR');
    //     }
    // }

}

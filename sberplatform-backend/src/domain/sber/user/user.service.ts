
import * as _ from 'lodash/fp';
import { Injectable, Inject } from '@nestjs/common';
import * as jsonWebToken from 'jsonwebtoken';
import * as admin from 'firebase-admin';

import { createAppError } from 'src/lib/error';
import { JWTData } from './user.types';

import {
    UserModel,
    UserProps
} from './user.data';

import { Request } from 'express';

@Injectable()
export class UserService {
    constructor(
        @Inject(UserModel.modelName)
        private readonly userModel: typeof UserModel,
    ) { }

    // AUTH
    async validateUser(tokenData: JWTData) {
        const user = await this.userModel.findById(tokenData.id);

        if (!user) {
            throw createAppError('UNAUTHORIZED');
        }

        return user;
    }

    async kek() {
        return 'kek'
    }

    async findById(id: string) {
        return this.userModel.findById(id);
    }

    async create(data: any) {
        return this.userModel.create(data);
    }

    // async checkAuth(req: Request) {
    //     const { authorization } = req.headers;

    //     const token = authorization.replace('Bearer ', '');

    //     try {
    //         const tokenData = jsonWebToken.verify(token, JWT_SECRET) as JWTData;

    //         return this.validateUser(tokenData);
    //     } catch (e) {
    //         throw createAppError('UNAUTHORIZED');
    //     }
    // }

    // async createJwtToken(data: JWTData) {
    //     return jsonWebToken.sign(data, JWT_SECRET);
    // }

    // PROFILE

    // async updateUserInfo(userId: string, userInfo: UserProps) {
    //     const userPatch: Partial<UserProps> = _.pick([
    //         'firstName',
    //         'lastName',
    //         'middleName',
    //         'email',
    //     ], userInfo);

    //     return this.userModel.findByIdAndUpdate(userId, {
    //         // @ts-ignore
    //         $set: { ...userPatch, userInfoFilled: true }
    //     });
    // }

    // SUBSCRIPTION

    // async subscribe({ userId }: { userId: string }) {
    //     const user = await this.userModel.findById(userId);

    //     // @ts-ignore
    //     user.profile = user.profile || {};

    //     // @ts-ignore
    //     user.profile.subscription = {
    //         type: subscriptionType.STANDARD,
    //         status: subscriptionStatuses.ACTIVE,
    //     };

    //     return await user.save();
    // }

    // async unsubscrive({ userId }: { userId: string }) {
    //     const user = await this.userModel.findById(userId);

    //     // @ts-ignore
    //     user.profile = user.profile || {};

    //     user.profile.subscription = null;

    //     return await user.save();
    // }

    // DEVICES

    // async addDeviceToUser({ userId, deviceId }: { userId: string, deviceId: string }) {
    //     return await this.userModel.findByIdAndUpdate(userId, {
    //         $push: { 'profile.devices': deviceId },
    //     });
    // }

    // PLACES

    // async addFavoritePlace({ userId, place }) {
    //     return await this.userModel.findByIdAndUpdate(userId, {
    //         $push: { 'profile.favoritePlaces': place },
    //     });
    // }


    // async removeFavoritePlace({ userId, placeId }) {
    //     return await this.userModel.findByIdAndUpdate(userId, {
    //         $pull: { 'profile.favoritePlaces': { _id: placeId } },
    //     });
    // }

    // // NFC

    // async addNfc({ userId, nfcToken }) {
    //     return this.userModel.findByIdAndUpdate(userId, { $set: { 'profile.nfc': { token: nfcToken } } });
    // }

    // async getUserByNfc({ nfc }) {
    //     return this.userModel.findOne({ 'profile.nfc.token': nfc });
    // }

}

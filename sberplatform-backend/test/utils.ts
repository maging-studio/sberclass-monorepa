import { Test } from '@nestjs/testing';
import { AppModule } from 'src/module';
import * as mockingoose from 'mockingoose';
import { providers as dbProviders } from 'src/infrastructure/db/db.module';
import * as mocks from './mocks';

const getProvider = (name, providers) => providers.find(p => p.provide === name);

const mongoProvider = getProvider('mongoConnection', dbProviders);

const mockedMongoFactory = async () => {
    const provider = await mongoProvider.useFactory();

    const mockedModel = (name, schema) => {
        const model = provider.createModel(name, schema);

        if (mocks[name]) {
            const operations = Object.keys(mocks[name]);

            // @ts-ignore
            const mocked = mockingoose.model(model);

            operations.forEach((operation) => {
                mocked.toReturn(mocks[name][operation], operation);
            });
        }

        return model;
    };

    return {
        createModel: mockedModel,
        connection: provider.connection,
        factory: () => null,
    };
};

export const createTestAppModule = () => Test
    .createTestingModule({
        imports: [AppModule],
    })
    .overrideProvider('mongoConnetion')
    .useFactory({ factory: mockedMongoFactory })
    .compile();

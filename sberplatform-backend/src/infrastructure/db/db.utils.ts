import { connect, Schema, set } from 'mongoose';
import { Config } from 'src/config/config.types';

set('useCreateIndex', true);

export function decorateSchema(schema: Schema): Schema {
    // Duplicate the ID field.
    schema.virtual('id').get(function id(): string {
        return this._id.toHexString();
    });

    // Ensure virtual fields are serialised.
    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
    });

    schema.set('toObject', {
        virtuals: true,
        versionKey: false,
    });

    return schema;
}

export function createModelProvider({ modelName, schema }) {
    return {
        provide: modelName,
        useFactory: ({ createModel }) => createModel(modelName, schema),
        inject: ['mongoConnection'],
    };
}

export async function createConnection(config: Config) {
    const conenction = await connect(config.mongo.conenctionString);

    const modelFactory = (name, schema) => {
        const mpdel = conenction.model(name, decorateSchema(schema));
        mpdel.on('index', (x, a) => {
            console.log(x, a);
        });
        return mpdel;
    };

    return {
        connection: conenction,
        createModel: modelFactory,
    };
}

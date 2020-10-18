/* eslint no-undef: 0, @typescript-eslint/explicit-function-return-type: 0 */
import 'module-alias/register';

// const mongo = new MongoClient(
//     testConfig.mongo.conenctionString,
//     {
//         useNewUrlParser: true,
//     },
// );

// const storage: any = {};
//
// const mockMailer = {
//     sendTemplate: async (email, tempName, params) => {
//         storage.mailer = storage.mailer || {};
//         storage.mailer[tempName] = params;
//         storage.mailer[tempName].receiver = email;
//
//         return params;
//     },
// };
//
// let db;

describe('Lock App (e2e)', () => {
  let app;
  //
  // beforeAll(async (done) => {
  //     const moduleFixture: TestingModule = await Test.createTestingModule({
  //         imports: [AppModule],
  //     })
  //         .overrideProvider('config')
  //         .useValue(testConfig)
  //         .overrideProvider('mailer')
  //         .useValue(mockMailer)
  //         .compile();
  //
  //     app = moduleFixture.createNestApplication();
  //     await app.init();
  //     await mongo.connect();
  //     db = mongo.db();
  //
  //     await db.dropDatabase();
  //
  //     done();
  // });

  describe('Lock', () => {
    it('create new lock', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock')
      //     .expect(200)
      //     .then((res) => {
      //         storage.lock = res.body;
      //
      //         expect(res.body).toMatchObject({
      //             id: expect.stringMatching(/[a-z0-9]/),
      //             activated: false,
      //         });
      //
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('auth lock by token', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('send lock command', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('send lock command concurrency (x2)', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('create order BOOKING', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('create order BOOKING concurency (x2)', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('create order PARKING', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('complete order PARKING', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });


    it('process order PARKING', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('complete order PARKING', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('create order RIDE', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('process order RIDE', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('complete order RIDE', async (done) => {
      // const lockFromDb = await db.collection('locks')
      //     .findOne({ _id: new ObjectId(storage.lock._id) });
      //
      // await mongo.close();
      //
      // storage.lockToken = lockFromDb.lockToken; // eslint-disable-line
      //
      // await request(app.getHttpServer())
      //     .put('/lock/activate')
      //     .send({ token: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             activated: true,
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('add lockData', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/user/login')
      //     .send({ email: `${storage.lock.id}@lock.com`, password: storage.lockToken })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             accessToken: expect.any(String),
      //         });
      //
      //         storage.userToken = res.body.accessToken;
      //     })
      //     .catch(done);
      //
      // await request(app.getHttpServer())
      //     .put('/lock/getConfig')
      //     .set('Authorization', `Bearer ${storage.userToken}`)
      //     .send({ lockId: storage.lock.id })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             config: expect.objectContaining({
      //                 eventsEnabled: true,
      //                 historyEnabled: true,
      //                 notesEnabled: true,
      //             }),
      //             contentItems: expect.any(Array),
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('should fail UNAUTHORIZED access to lock', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock/getConfig')
      //     .send({ lockId: storage.lock.id })
      //     .expect(401)
      //     .then(() => done())
      //     .catch(done);

      done();
    });

    it('add vehicle', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock/addContentItem')
      //     .set('Authorization', `Bearer ${storage.userToken}`)
      //     .send({ lockId: storage.lock.id, contentItem: { type: 'note', title: 'kek' } })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             contentItems: expect.arrayContaining([expect.objectContaining({ title: 'kek' })]),
      //         });
      //
      //         done();
      //     })
      //     .catch(done);
      //
      done();
    });

    it('bind vehicle to device', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock/addContentItem')
      //     .set('Authorization', `Bearer ${storage.userToken}`)
      //     .send({ lockId: storage.lock.id, contentItem: { type: 'succ', title: 'kek' } })
      //     .expect(500)
      //     .then(() => done())
      //     .catch(done);

      done();
    });

    it('create parkzone', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock/addLockEvent')
      //     .set('Authorization', `Bearer ${storage.userToken}`)
      //     .send({ lockId: storage.lock.id, event: { type: 'enter', message: 'kek', date: Date.now() } })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             type: 'enter',
      //             message: 'kek',
      //             lock: storage.lock.id,
      //         });
      //
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('bind device to parkzone', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock/addLockEvent')
      //     .set('Authorization', `Bearer ${storage.userToken}`)
      //     .send({ lockId: storage.lock.id, event: { type: 'alarm', message: 'kek', date: Date.now() } })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             type: 'alarm',
      //             message: 'kek',
      //             lock: storage.lock.id,
      //         });
      //
      //         expect(storage.mailer.alarmEvent).toMatchObject({
      //             type: 'alarm',
      //             message: 'kek',
      //             receiver: [`${storage.lock.id}@lock.com`],
      //         });
      //
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('geo search', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock/getHistory')
      //     .set('Authorization', `Bearer ${storage.userToken}`)
      //     .send({ lockId: storage.lock.id, pagination: { page: 1, limit: 10 } })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             events: expect.arrayContaining([expect.objectContaining({ type: 'enter' })]),
      //         });
      //
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('geocoder', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock/updateLockConfig')
      //     .set('Authorization', `Bearer ${storage.userToken}`)
      //     .send({ lockId: storage.lock.id, config: { weatherEnabled: false } })
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             config: expect.objectContaining({
      //                 weatherEnabled: false,
      //                 trafficJamsEnabled: true,
      //             }),
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('create content item', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock/getMyLocks')
      //     .set('Authorization', `Bearer ${storage.userToken}`)
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             locks: expect.arrayContaining([expect.objectContaining({
      //                 id: storage.lock.id,
      //             })]),
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });

    it('get content item', async (done) => {
      // await request(app.getHttpServer())
      //     .put('/lock/getMyLocks')
      //     .set('Authorization', `Bearer ${storage.userToken}`)
      //     .expect(200)
      //     .then((res) => {
      //         expect(res.body).toMatchObject({
      //             locks: expect.arrayContaining([expect.objectContaining({
      //                 id: storage.lock.id,
      //             })]),
      //         });
      //         done();
      //     })
      //     .catch(done);

      done();
    });
  });

  //     describe('User managment', () => {
  //         const creds: any = {
  //             email: 'kek@mail.ru',
  //             password: 'meow',
  //         };
  //
  //         it('should success user registration', async (done) => {
  //             await request(app.getHttpServer())
  //                 .put('/user/registration')
  //                 .send(creds)
  //                 .expect(200)
  //                 .then(() => done())
  //                 .catch(done);
  //         });
  //
  //         it('should fail unconfirmed user login', async (done) => {
  //             await request(app.getHttpServer())
  //                 .put('/user/login')
  //                 .send(creds)
  //                 .expect(401)
  //                 .then(() => done())
  //                 .catch(done);
  //         });
  //
  //         it('should success user confirm', async (done) => {
  //             await request(app.getHttpServer())
  //                 .put('/user/confirm')
  //                 .send({ token: storage.mailer.registration.confirmationLink })
  //                 .expect(200)
  //                 .then(() => done())
  //                 .catch(done);
  //         });
  //
  //         it('should success user login', async (done) => {
  //             await request(app.getHttpServer())
  //                 .put('/user/login')
  //                 .send(creds)
  //                 .expect(200)
  //                 .then((res) => {
  //                     expect(res.body).toMatchObject({
  //                         accessToken: expect.any(String),
  //                     });
  //
  //                     creds.token = res.body.accessToken;
  //                     done();
  //                 })
  //                 .catch(done);
  //         });
  //
  //         it('should success user auth', async (done) => {
  //             await request(app.getHttpServer())
  //                 .put('/user/me')
  //                 .set('Authorization', `Bearer ${creds.token}`)
  //                 .expect(200)
  //                 .then((res) => {
  //                     expect(res.body).toMatchObject({
  //                         email: creds.email,
  //                     });
  //
  //                     creds.token = res.body.accessToken;
  //                     done();
  //                 })
  //                 .catch(done);
  //         });
  //
  //         it('should success user reset pass start', async (done) => {
  //             await request(app.getHttpServer())
  //                 .put('/user/resetPasswordStart')
  //                 .send({ email: creds.email })
  //                 .expect(200)
  //                 .then(() => {
  //                     expect(storage.mailer.resetPassword).toMatchObject({
  //                         token: expect.any(String),
  //                     });
  //                     done();
  //                 })
  //                 .catch(done);
  //         });
  //
  //         it('should success user reset pass complete', async (done) => {
  //             await request(app.getHttpServer())
  //                 .put('/user/resetPasswordComplete')
  //                 .send({ token: storage.mailer.resetPassword.token, newPass: 'succ' })
  //                 .expect(200);
  //
  //             await request(app.getHttpServer())
  //                 .put('/user/login')
  //                 .send(creds)
  //                 .expect(401);
  //
  //             await request(app.getHttpServer())
  //                 .put('/user/me')
  //                 .set('Authorization', `Bearer ${creds.token}`)
  //                 .expect(401);
  //
  //             await request(app.getHttpServer())
  //                 .put('/user/login')
  //                 .send({ email: creds.email, password: 'succ' })
  //                 .expect(200);
  //
  //             done();
  //         });
  //     });
  // });
  //
  // afterAll(async (done) => {
  //     await mongo.close();
  //     done();
  // });
});

const config = {
    mongo: {
        conenctionString: 'mongodb://admin:password@localhost:27017/sberclass?authSource=admin',
    },
    jwt: {
        sk: 'kek',
    },
    mailer: {
        APP_NAME: 'Lockey',
        APP_ADDRESS: 'http://example.com',
        SMTP_HOST: 'smtp.gmail.com',
        SMTP_SERVICE: 'GMAIL',
        SMTP_PORT: 465,
        SMTP_USER: 'xxxxxx',
        SMTP_PASSWORD: 'xxxxxxxx',
        SMTP_SECURE: true,
    },
    logger: {
        file: null,
    },
};

export default config;
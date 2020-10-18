export const mock = {
    educationModule: [{
        name: "Модуль на Цифровом прорыве",
        description: '"Модуль на Цифровом прорыв описание',
        field: {
            name: 'Математика'
        },
        topics: [{
            name: "Тема на Цифровом прорыве",
            description: '"Тема на Цифровом прорыв описание',
            taskGroups: [{
                name: "Задачки на Цифровом прорыве",
                description: '"Задачки на Цифровом прорыв описание',
                content: {
                    blocks: [
                        {
                            type: 'textQuestion',
                            data: {
                                title: 'Вопросик',
                                description: 'Расскажи ка',
                                answers: ['чук', 'кек']
                            }
                        },
                        {
                            type: 'testSingle',
                            data: {
                                title: 'Вопросик',
                                description: 'Расскажи ка',
                                options: [
                                    'Раз',
                                    'На раз'
                                ],
                                answer: ['Раз']
                            }
                        },
                        {
                            type: 'richContent',
                            data: {
                                time: 1.2,
                                verion: '1.2',
                                blocks: [{
                                    type: 'testSingle',
                                    data: {
                                        title: 'Вопросик',
                                        description: 'Расскажи ка',
                                        options: [
                                            'Раз',
                                            'На раз'
                                        ],
                                        answer: ['Раз']
                                    }
                                }]
                            }
                        }
                    ]
                }
            }]
        }]
    }]

}
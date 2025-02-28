export const CONFIG = {
    // Базовая стоимость за 1 кв. см
    BASE_PRICE_PER_CM2: 10,
    
    // Коэффициенты для прямоугольных/квадратных картин
    RECTANGLE_THRESHOLDS: [
        { area: 400, // 20x20 см
          coefficient: 1.2 
        },
        { area: 900, // 30x30 см
          coefficient: 1.5 
        }
    ],
    
    // Коэффициенты для круглых картин
    CIRCLE_THRESHOLDS: [
        { diameter: 30, // 30 см в диаметре
          coefficient: 1.2 
        },
        { diameter: 50, // 50 см в диаметре
          coefficient: 1.5 
        }
    ],

    // Коэффициенты сложности для разных типов работ
    COMPLEXITY_COEFFICIENTS: {
        LANDSCAPE: 1.0,    // Пейзаж (базовая сложность)
        STILL_LIFE: 1.2,   // Натюрморт
        PORTRAIT: 1.5,     // Портрет
        MULTI_PORTRAIT: 2.0, // Групповой портрет
        ABSTRACT: 1.3,     // Абстракция
        ANIMALS: 1.4       // Анималистика
    },

    // Коэффициенты срочности (множитель к базовой цене)
    URGENCY_COEFFICIENTS: {
        STANDARD: 1.0,     // Стандартный срок (2-3 недели)
        FAST: 1.3,         // Срочный (1-2 недели)
        URGENT: 1.6,       // Очень срочный (3-7 дней)
        EMERGENCY: 2.0     // Экстренный (1-2 дня)
    },

    // Стили картин
    PAINTING_STYLES: {
        REALISTIC: {
            name: 'Реализм',
            description: 'Точная передача действительности',
            color: '#2C3E50',
            colorLight: '#34495E',
            examples: [
                'https://images.metmuseum.org/CRDImages/ep/web-large/DP-416-001.jpg',
                'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg',
                'https://images.metmuseum.org/CRDImages/ep/web-large/DP169542.jpg'
            ]
        },
        IMPRESSIONISM: {
            name: 'Импрессионизм',
            description: 'Передача непосредственного впечатления',
            color: '#8E44AD',
            colorLight: '#9B59B6',
            examples: [
                'https://images.metmuseum.org/CRDImages/ep/web-large/DT1877.jpg',
                'https://images.metmuseum.org/CRDImages/ep/web-large/DT1565.jpg',
                'https://images.metmuseum.org/CRDImages/ep/web-large/DP-974-001.jpg'
            ]
        },
        EXPRESSIONISM: {
            name: 'Экспрессионизм',
            description: 'Эмоциональная выразительность',
            color: '#C0392B',
            colorLight: '#E74C3C',
            examples: [
                'https://images.metmuseum.org/CRDImages/ma/web-large/DP-14936-001.jpg',
                'https://images.metmuseum.org/CRDImages/ma/web-large/DP-16784-001.jpg',
                'https://images.metmuseum.org/CRDImages/ep/web-large/DP-20101-001.jpg'
            ]
        },
        MODERN: {
            name: 'Современный стиль',
            description: 'Современные тенденции в живописи',
            color: '#16A085',
            colorLight: '#1ABC9C',
            examples: [
                'https://images.metmuseum.org/CRDImages/ep/web-large/DP346474.jpg',
                'https://images.metmuseum.org/CRDImages/ep/web-large/DP341201.jpg',
                'https://images.metmuseum.org/CRDImages/ep/web-large/DP-23489-001.jpg'
            ]
        }
    },

    // Цветовые гаммы
    COLOR_SCHEMES: {
        WARM: {
            name: 'Теплая',
            description: 'Красные, оранжевые, желтые тона',
            preview: '#FF9B50',
            styleExamples: {
                REALISTIC: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT877.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1565.jpg'
                ],
                IMPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1877.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1565.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT889.jpg'
                ],
                EXPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1494.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg'
                ],
                MODERN: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1935.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT889.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT945.jpg'
                ]
            }
        },
        COLD: {
            name: 'Холодная',
            description: 'Синие, голубые, фиолетовые тона',
            preview: '#7CB9E8',
            styleExamples: {
                REALISTIC: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1877.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT11.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT47.jpg'
                ],
                IMPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1876.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1568.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1570.jpg'
                ],
                EXPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1947.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1862.jpg'
                ],
                MODERN: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1494.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg'
                ]
            }
        },
        NEUTRAL: {
            name: 'Нейтральная',
            description: 'Бежевые, коричневые, серые тона',
            preview: '#C4A484',
            styleExamples: {
                REALISTIC: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1947.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1862.jpg'
                ],
                IMPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1935.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT889.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT945.jpg'
                ],
                EXPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1876.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1568.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1570.jpg'
                ],
                MODERN: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1877.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT11.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT47.jpg'
                ]
            }
        },
        CONTRAST: {
            name: 'Контрастная',
            description: 'Сочетание контрастных цветов',
            preview: '#B31312',
            styleExamples: {
                REALISTIC: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1494.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg'
                ],
                IMPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1947.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1862.jpg'
                ],
                EXPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1935.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT889.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT945.jpg'
                ],
                MODERN: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1876.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1568.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1570.jpg'
                ]
            }
        },
        PASTEL: {
            name: 'Пастельная',
            description: 'Мягкие, приглушенные тона',
            preview: '#FFE5E5',
            styleExamples: {
                REALISTIC: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1935.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT889.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT945.jpg'
                ],
                IMPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1876.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1568.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1570.jpg'
                ],
                EXPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1877.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT11.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT47.jpg'
                ],
                MODERN: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1947.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1862.jpg'
                ]
            }
        },
        VINTAGE: {
            name: 'Винтажная',
            description: 'Состаренные, приглушенные оттенки',
            preview: '#A67B5B',
            styleExamples: {
                REALISTIC: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1876.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1568.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1570.jpg'
                ],
                IMPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1877.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT11.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT47.jpg'
                ],
                EXPRESSIONISM: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1494.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg'
                ],
                MODERN: [
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1935.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT889.jpg',
                    'https://images.metmuseum.org/CRDImages/ep/web-large/DT945.jpg'
                ]
            }
        }
    },

    // Рекомендации по размерам для разных помещений
    ROOM_SIZE_RECOMMENDATIONS: {
        LIVING_ROOM: {
            name: 'Гостиная',
            description: 'Большая комната, центральная стена',
            sizes: [
                { width: 100, height: 70, description: 'Стандартный размер для гостиной' },
                { width: 150, height: 100, description: 'Большая картина для просторной гостиной' }
            ]
        },
        BEDROOM: {
            name: 'Спальня',
            description: 'Над кроватью или на противоположной стене',
            sizes: [
                { width: 80, height: 60, description: 'Над кроватью' },
                { width: 100, height: 70, description: 'На противоположной стене' }
            ]
        },
        KITCHEN: {
            name: 'Кухня',
            description: 'Небольшие картины или серия картин',
            sizes: [
                { width: 40, height: 30, description: 'Одиночная картина' },
                { width: 30, height: 30, description: 'Серия из нескольких картин' }
            ]
        },
        OFFICE: {
            name: 'Офис/Кабинет',
            description: 'Средний размер, деловой стиль',
            sizes: [
                { width: 60, height: 40, description: 'Стандартный размер для офиса' },
                { width: 80, height: 60, description: 'Большая картина для просторного кабинета' }
            ]
        }
    },

    // Рекомендации по размерам картины относительно стены
    WALL_SIZE_RECOMMENDATIONS: {
        MIN_COVERAGE: 0.2,    // Минимальное рекомендуемое покрытие стены
        MAX_COVERAGE: 0.6,    // Максимальное рекомендуемое покрытие стены
        OPTIMAL_COVERAGE: 0.4, // Оптимальное покрытие стены
        messages: {
            TOO_SMALL: 'Картина может быть слишком маленькой для этой стены. Рекомендуется увеличить размер.',
            TOO_LARGE: 'Картина может быть слишком большой для этой стены. Рекомендуется уменьшить размер.',
            OPTIMAL: 'Размер картины оптимален для данной стены.'
        }
    },

    // Информация для клиента
    CLIENT_INFO: {
        CREATION_PROCESS: {
            title: 'Процесс создания картины',
            steps: [
                {
                    title: 'Обсуждение деталей',
                    description: 'Мы обсудим все детали будущей картины: стиль, размеры, цветовую гамму, сюжет и особые пожелания.',
                    duration: '1-2 дня'
                },
                {
                    title: 'Эскиз',
                    description: 'Художник создает предварительный эскиз картины для вашего утверждения.',
                    duration: '2-3 дня'
                },
                {
                    title: 'Работа над картиной',
                    description: 'После утверждения эскиза начинается работа над картиной в выбранной технике.',
                    duration: 'Зависит от сложности и срочности'
                },
                {
                    title: 'Финальные штрихи',
                    description: 'Проработка деталей, при необходимости внесение финальных корректировок.',
                    duration: '2-3 дня'
                }
            ]
        },
        DELIVERY: {
            title: 'Доставка',
            options: [
                {
                    type: 'Самовывоз',
                    description: 'Бесплатно из нашей студии',
                    duration: 'В любое удобное время'
                },
                {
                    type: 'Курьер по городу',
                    description: 'Доставка до двери',
                    price: 'От 500 руб.',
                    duration: '1-2 дня'
                },
                {
                    type: 'Доставка по России',
                    description: 'Транспортной компанией',
                    price: 'По тарифам ТК',
                    duration: '3-7 дней'
                }
            ]
        },
        PAYMENT: {
            title: 'Условия оплаты',
            methods: [
                {
                    type: 'Предоплата',
                    description: '50% при заказе',
                    details: 'Для начала работы над картиной'
                },
                {
                    type: 'Полная оплата',
                    description: '50% перед отправкой',
                    details: 'После утверждения финального результата'
                }
            ],
            options: [
                'Наличные',
                'Банковская карта',
                'Банковский перевод'
            ]
        },
        TIMING: {
            title: 'Сроки выполнения',
            options: [
                {
                    type: 'Стандартный',
                    duration: '2-3 недели',
                    description: 'Оптимальное время для создания качественной работы'
                },
                {
                    type: 'Срочный',
                    duration: '1-2 недели',
                    description: 'Ускоренное выполнение заказа',
                    extraCharge: '+30% к стоимости'
                },
                {
                    type: 'Очень срочный',
                    duration: '3-7 дней',
                    description: 'Приоритетное выполнение заказа',
                    extraCharge: '+60% к стоимости'
                },
                {
                    type: 'Экстренный',
                    duration: '1-2 дня',
                    description: 'Максимально быстрое выполнение',
                    extraCharge: '+100% к стоимости'
                }
            ]
        }
    }
}; 
import React from 'react';
import { CONFIG } from '../config/env';
import './PriceCalculator.css';
import SizeVisualizer from './SizeVisualizer';
import ClientInfo from './ClientInfo';

type ShapeType = 'square' | 'circle';
type ComplexityType = 'LANDSCAPE' | 'STILL_LIFE' | 'PORTRAIT' | 'MULTI_PORTRAIT' | 'ABSTRACT' | 'ANIMALS';
type UrgencyType = 'STANDARD' | 'FAST' | 'URGENT' | 'EMERGENCY';
type StyleType = keyof typeof CONFIG.PAINTING_STYLES;
type ColorSchemeType = keyof typeof CONFIG.COLOR_SCHEMES;
type RoomType = keyof typeof CONFIG.ROOM_SIZE_RECOMMENDATIONS;

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className: string;
    onClick: (e: React.MouseEvent) => void;
}

interface PaintingStyle {
    name: string;
    description: string;
    color: string;
    colorLight: string;
    examples: string[];
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className, onClick }) => {
    const [isValid, setIsValid] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const img = new Image();
        img.src = src;
        
        img.onload = () => {
            setIsValid(true);
            setIsLoading(false);
        };
        
        img.onerror = () => {
            setIsValid(false);
            setIsLoading(false);
        };
    }, [src]);

    if (!isValid) {
        return null;
    }

    return (
        <div className={`image-container ${isLoading ? 'loading' : ''}`}>
            <img 
                src={src}
                alt={alt}
                className={className}
                onClick={onClick}
                style={{ display: isLoading ? 'none' : 'block' }}
            />
            {isLoading && (
                <div className="image-loader">
                    Загрузка...
                </div>
            )}
        </div>
    );
};

const PriceCalculator = () => {
    const [shape, setShape] = React.useState<ShapeType>('square');
    const [width, setWidth] = React.useState(40);
    const [height, setHeight] = React.useState(40);
    const [diameter, setDiameter] = React.useState(40);
    const [isUniform, setIsUniform] = React.useState(true);
    const [complexity, setComplexity] = React.useState<ComplexityType>('LANDSCAPE');
    const [urgency, setUrgency] = React.useState<UrgencyType>('STANDARD');
    const [style, setStyle] = React.useState<StyleType>('REALISTIC');
    const [colorScheme, setColorScheme] = React.useState<ColorSchemeType>('WARM');
    const [roomType, setRoomType] = React.useState<RoomType>('LIVING_ROOM');
    const [showExamples, setShowExamples] = React.useState(false);
    const [showColorExamples, setShowColorExamples] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    const calculateRectanglePrice = (width: number, height: number): number => {
        const area = width * height;
        let coefficient = 1;

        for (const threshold of CONFIG.RECTANGLE_THRESHOLDS) {
            if (area >= threshold.area) {
                coefficient = threshold.coefficient;
            }
        }

        return area * CONFIG.BASE_PRICE_PER_CM2 * coefficient * 
               CONFIG.COMPLEXITY_COEFFICIENTS[complexity] * 
               CONFIG.URGENCY_COEFFICIENTS[urgency];
    };

    const calculateCirclePrice = (diameter: number): number => {
        const area = Math.PI * Math.pow(diameter / 2, 2);
        let coefficient = 1;

        for (const threshold of CONFIG.CIRCLE_THRESHOLDS) {
            if (diameter >= threshold.diameter) {
                coefficient = threshold.coefficient;
            }
        }

        return area * CONFIG.BASE_PRICE_PER_CM2 * coefficient * 
               CONFIG.COMPLEXITY_COEFFICIENTS[complexity] * 
               CONFIG.URGENCY_COEFFICIENTS[urgency];
    };

    const calculatePrice = (): number => {
        if (shape === 'circle') {
            return calculateCirclePrice(diameter);
        } else {
            return calculateRectanglePrice(width, height);
        }
    };

    const handleSizeChange = (value: number, dimension: 'width' | 'height') => {
        if (dimension === 'width') {
            setWidth(value);
            if (isUniform) {
                setHeight(value);
            }
        } else {
            setHeight(value);
            if (isUniform) {
                setWidth(value);
            }
        }
    };

    const handleShapeChange = (newShape: ShapeType) => {
        setShape(newShape);
        if (newShape === 'square') {
            setIsUniform(true);
            setHeight(width);
        }
    };

    const handleRoomSizeSelect = (size: { width: number; height: number }) => {
        if (shape === 'circle') {
            const avgSize = Math.round((size.width + size.height) / 2);
            setDiameter(avgSize);
        } else {
            setWidth(size.width);
            setHeight(size.height);
            setIsUniform(size.width === size.height);
        }
    };

    const getComplexityName = (type: ComplexityType): string => {
        const names = {
            LANDSCAPE: 'Пейзаж',
            STILL_LIFE: 'Натюрморт',
            PORTRAIT: 'Портрет',
            MULTI_PORTRAIT: 'Групповой портрет',
            ABSTRACT: 'Абстракция',
            ANIMALS: 'Анималистика'
        };
        return names[type];
    };

    const getUrgencyName = (type: UrgencyType): string => {
        const names = {
            STANDARD: 'Стандартный (2-3 недели)',
            FAST: 'Срочный (1-2 недели)',
            URGENT: 'Очень срочный (3-7 дней)',
            EMERGENCY: 'Экстренный (1-2 дня)'
        };
        return names[type];
    };

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="calculator">
            <div className="logo">
                <span className="logo-text">
                    munsh<span className="logo-dot">.</span>punsh
                </span>
            </div>

            <h2>Калькулятор стоимости картин</h2>
            
            <div className="form-group">
                <label>Стиль картины:</label>
                <div className="style-schemes">
                    {Object.entries(CONFIG.PAINTING_STYLES).map(([key, value]) => (
                        <div 
                            key={key}
                            className={`style-scheme ${style === key ? 'selected' : ''}`}
                            onClick={() => setStyle(key as StyleType)}
                            style={{
                                '--scheme-color': value.color,
                                '--scheme-color-light': value.colorLight,
                                '--text-color': value.color?.startsWith('#f') || value.color?.startsWith('#e') ? '#333' : '#fff'
                            } as React.CSSProperties}
                        >
                            <span className="style-name">{value.name}</span>
                            <span className="style-description">{value.description}</span>
                        </div>
                    ))}
                </div>
                <button 
                    className="examples-button"
                    onClick={() => setShowExamples(!showExamples)}
                >
                    {showExamples ? 'Скрыть примеры' : 'Показать примеры'}
                </button>
                {showExamples && (
                    <div className="examples-grid">
                        {CONFIG.PAINTING_STYLES[style].examples.map((example, index) => (
                            <ImageWithFallback
                                key={index}
                                src={example}
                                alt={`Пример ${CONFIG.PAINTING_STYLES[style].name} ${index + 1}`}
                                className="example-image"
                                onClick={(e: React.MouseEvent) => handleImageClick(example)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="form-group">
                <label>Цветовая гамма:</label>
                <div className="color-schemes">
                    {Object.entries(CONFIG.COLOR_SCHEMES).map(([key, value]) => (
                        <div 
                            key={key}
                            className={`color-scheme ${colorScheme === key ? 'selected' : ''}`}
                            onClick={() => setColorScheme(key as ColorSchemeType)}
                            style={{
                                '--scheme-color': value.preview,
                                '--scheme-color-light': `${value.preview}88`,
                                '--text-color': value.preview.startsWith('#f') || value.preview.startsWith('#e') ? '#333' : '#fff'
                            } as React.CSSProperties}
                        >
                            <span className="color-name">{value.name}</span>
                            <span className="color-description">{value.description}</span>
                        </div>
                    ))}
                </div>
                <button 
                    className="examples-button"
                    onClick={() => setShowColorExamples(!showColorExamples)}
                >
                    {showColorExamples ? 'Скрыть примеры' : 'Показать примеры'}
                </button>
                {showColorExamples && (
                    <div className="examples-grid">
                        {CONFIG.COLOR_SCHEMES[colorScheme].styleExamples[style].map((example, index) => (
                            <ImageWithFallback
                                key={index}
                                src={example}
                                alt={`Пример ${CONFIG.COLOR_SCHEMES[colorScheme].name} ${index + 1}`}
                                className="example-image"
                                onClick={(e: React.MouseEvent) => handleImageClick(example)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="form-group">
                <label>Выберите помещение для подбора размера:</label>
                <div className="room-schemes">
                    {Object.entries(CONFIG.ROOM_SIZE_RECOMMENDATIONS).map(([key, value]) => (
                        <div 
                            key={key}
                            className={`room-scheme ${roomType === key ? 'selected' : ''}`}
                            onClick={() => setRoomType(key as RoomType)}
                        >
                            <span className="room-name">{value.name}</span>
                            <span className="room-description">{value.description}</span>
                        </div>
                    ))}
                </div>
                <div className="size-recommendations">
                    {CONFIG.ROOM_SIZE_RECOMMENDATIONS[roomType].sizes.map((size, index) => (
                        <div 
                            key={index}
                            className="size-recommendation"
                            onClick={() => handleRoomSizeSelect(size)}
                        >
                            <span className="size-dimensions">
                                {shape === 'circle' 
                                    ? `⌀ ${Math.round((size.width + size.height) / 2)} см`
                                    : `${size.width}x${size.height} см`
                                }
                            </span>
                            <span className="size-description">{size.description}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label>Форма картины:</label>
                <div className="shape-schemes">
                    <div 
                        className={`shape-scheme ${shape === 'square' ? 'selected' : ''}`}
                        onClick={() => handleShapeChange('square')}
                    >
                        <div className="shape-preview square-preview"></div>
                        <span className="shape-name">Квадратная</span>
                        <span className="shape-description">Классическая форма для большинства картин</span>
                    </div>
                    <div 
                        className={`shape-scheme ${shape === 'circle' ? 'selected' : ''}`}
                        onClick={() => handleShapeChange('circle')}
                    >
                        <div className="shape-preview circle-preview"></div>
                        <span className="shape-name">Круглая</span>
                        <span className="shape-description">Оригинальное решение для современных интерьеров</span>
                    </div>
                </div>
            </div>

            {shape === 'square' && (
                <>
                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={isUniform}
                                onChange={(e) => setIsUniform(e.target.checked)}
                            />
                            Одинаковые стороны
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Ширина (см):</label>
                        <input
                            type="number"
                            value={width}
                            onChange={(e) => handleSizeChange(Number(e.target.value), 'width')}
                            min="0"
                        />
                    </div>
                    {!isUniform && (
                        <div className="form-group">
                            <label>Высота (см):</label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => handleSizeChange(Number(e.target.value), 'height')}
                                min="0"
                            />
                        </div>
                    )}
                </>
            )}

            {shape === 'circle' && (
                <div className="form-group">
                    <label>Диаметр (см):</label>
                    <input
                        type="number"
                        value={diameter}
                        onChange={(e) => setDiameter(Number(e.target.value))}
                        min="0"
                    />
                </div>
            )}

            <SizeVisualizer 
                width={shape === 'circle' ? diameter : width}
                height={shape === 'circle' ? diameter : height}
                shape={shape}
            />

            <div className="form-group">
                <label>Сложность работы:</label>
                <div className="complexity-schemes">
                    {Object.entries(CONFIG.COMPLEXITY_COEFFICIENTS).map(([type, coefficient]) => (
                        <div 
                            key={type}
                            className={`complexity-scheme ${complexity === type ? 'selected' : ''}`}
                            onClick={() => setComplexity(type as ComplexityType)}
                        >
                            <span className="complexity-name">{getComplexityName(type as ComplexityType)}</span>
                            <span className="complexity-coefficient">x{coefficient}</span>
                            <span className="complexity-description">
                                {type === 'LANDSCAPE' && 'Изображение природы, городских или сельских пейзажей'}
                                {type === 'STILL_LIFE' && 'Композиция из неодушевленных предметов'}
                                {type === 'PORTRAIT' && 'Изображение одного человека'}
                                {type === 'MULTI_PORTRAIT' && 'Изображение группы людей'}
                                {type === 'ABSTRACT' && 'Абстрактная композиция'}
                                {type === 'ANIMALS' && 'Изображение животных'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label>Срочность:</label>
                <div className="urgency-schemes">
                    {Object.entries(CONFIG.URGENCY_COEFFICIENTS).map(([type, coefficient]) => (
                        <div 
                            key={type}
                            className={`urgency-scheme ${urgency === type ? 'selected' : ''}`}
                            onClick={() => setUrgency(type as UrgencyType)}
                        >
                            <span className="urgency-name">{getUrgencyName(type as UrgencyType).split(' (')[0]}</span>
                            <span className="urgency-coefficient">x{coefficient}</span>
                            <span className="urgency-description">
                                {type === 'STANDARD' && '2-3 недели'}
                                {type === 'FAST' && '1-2 недели'}
                                {type === 'URGENT' && '3-7 дней'}
                                {type === 'EMERGENCY' && '1-2 дня'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="result">
                <h3>Стоимость: {calculatePrice().toFixed(2)} руб.</h3>
                {shape === 'square' && (
                    <p className="dimensions">
                        Размеры: {width} x {height} см
                        <span> (площадь: {(width * height).toFixed(1)} см²)</span>
                    </p>
                )}
                {shape === 'circle' && (
                    <p className="dimensions">
                        Диаметр: {diameter} см
                        <span> (площадь: {(Math.PI * Math.pow(diameter / 2, 2)).toFixed(1)} см²)</span>
                    </p>
                )}
                <p className="price-details">
                    Стиль: {CONFIG.PAINTING_STYLES[style].name}<br/>
                    Цветовая гамма: {CONFIG.COLOR_SCHEMES[colorScheme].name}<br/>
                    Сложность: {getComplexityName(complexity)} (x{CONFIG.COMPLEXITY_COEFFICIENTS[complexity]})<br/>
                    Срочность: {getUrgencyName(urgency)} (x{CONFIG.URGENCY_COEFFICIENTS[urgency]})
                </p>
            </div>

            {selectedImage && (
                <div className="image-modal" onClick={closeModal}>
                    <button className="close-modal" onClick={closeModal}>×</button>
                    <ImageWithFallback
                        src={selectedImage}
                        alt="Увеличенный пример"
                        className="modal-image"
                        onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                        }}
                    />
                </div>
            )}

            <ClientInfo />
        </div>
    );
};

export default PriceCalculator; 
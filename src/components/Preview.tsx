import React from 'react';
import './Preview.css';

interface PreviewProps {
    shape: 'square' | 'circle';
    width: number;
    height: number;
    diameter: number;
}

const SCALE_FACTOR = 0.5; // 1см = 0.5px
const REFERENCE_ITEMS = [
    {
        name: 'А4 лист',
        width: 21,
        height: 29.7,
        color: '#f8f9fa'
    },
    {
        name: 'Дверь',
        width: 80,
        height: 200,
        color: '#e9ecef'
    }
];

const Preview: React.FC<PreviewProps> = ({ shape, width, height, diameter }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Очищаем канвас
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Рисуем референсные предметы
        REFERENCE_ITEMS.forEach((item, index) => {
            const x = 50 + index * 150;
            const y = 50;

            // Рисуем предмет
            ctx.fillStyle = item.color;
            ctx.fillRect(
                x,
                y,
                item.width * SCALE_FACTOR,
                item.height * SCALE_FACTOR
            );

            // Добавляем подпись
            ctx.fillStyle = '#333';
            ctx.font = '12px Arial';
            ctx.fillText(item.name, x, y + item.height * SCALE_FACTOR + 20);
        });

        // Рисуем картину
        ctx.fillStyle = '#007bff';
        if (shape === 'circle') {
            ctx.beginPath();
            ctx.arc(
                200,
                150,
                (diameter / 2) * SCALE_FACTOR,
                0,
                Math.PI * 2
            );
            ctx.fill();
        } else {
            ctx.fillRect(
                200,
                150,
                width * SCALE_FACTOR,
                height * SCALE_FACTOR
            );
        }

        // Добавляем размеры
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        if (shape === 'circle') {
            ctx.fillText(
                `⌀${diameter} см`,
                200,
                150 + (diameter / 2) * SCALE_FACTOR + 20
            );
        } else {
            ctx.fillText(
                `${width}x${height} см`,
                200,
                150 + height * SCALE_FACTOR + 20
            );
        }

    }, [shape, width, height, diameter]);

    return (
        <div className="preview">
            <h3>Предпросмотр размера</h3>
            <div className="preview-container">
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={300}
                    className="preview-canvas"
                />
                <div className="preview-info">
                    <p>Для сравнения:</p>
                    <ul>
                        <li>А4 лист: 21×29.7 см</li>
                        <li>Стандартная дверь: 80×200 см</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Preview; 
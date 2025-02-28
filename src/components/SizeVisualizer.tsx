import React from 'react';
import './SizeVisualizer.css';
import { CONFIG } from '../config/env';

interface SizeVisualizerProps {
    width: number;
    height: number;
    shape: 'square' | 'circle';
}

const SizeVisualizer: React.FC<SizeVisualizerProps> = ({ width, height, shape }) => {
    const [wallWidth, setWallWidth] = React.useState<number>(400);
    const [wallHeight, setWallHeight] = React.useState<number>(300);

    const getWallCoverageRecommendation = () => {
        const paintingArea = shape === 'circle' 
            ? Math.PI * Math.pow(width / 2, 2)
            : width * height;
        const wallArea = wallWidth * wallHeight;
        const coverage = paintingArea / wallArea;

        if (coverage < CONFIG.WALL_SIZE_RECOMMENDATIONS.MIN_COVERAGE) {
            return CONFIG.WALL_SIZE_RECOMMENDATIONS.messages.TOO_SMALL;
        }
        if (coverage > CONFIG.WALL_SIZE_RECOMMENDATIONS.MAX_COVERAGE) {
            return CONFIG.WALL_SIZE_RECOMMENDATIONS.messages.TOO_LARGE;
        }
        return CONFIG.WALL_SIZE_RECOMMENDATIONS.messages.OPTIMAL;
    };

    const calculateOptimalSize = () => {
        const wallArea = wallWidth * wallHeight;
        const optimalArea = wallArea * CONFIG.WALL_SIZE_RECOMMENDATIONS.OPTIMAL_COVERAGE;
        
        if (shape === 'circle') {
            const diameter = Math.sqrt(optimalArea / Math.PI) * 2;
            return `Рекомендуемый диаметр: ${Math.round(diameter)} см`;
        }

        const aspectRatio = width / height;
        const optimalHeight = Math.sqrt(optimalArea / aspectRatio);
        const optimalWidth = optimalHeight * aspectRatio;
        
        return `Рекомендуемые размеры: ${Math.round(optimalWidth)} x ${Math.round(optimalHeight)} см`;
    };

    return (
        <div className="size-visualizer">
            <div className="wall-size-input">
                <h3>Размеры стены</h3>
                <div className="input-group">
                    <label>
                        Ширина (см):
                        <input
                            type="number"
                            value={wallWidth}
                            onChange={(e) => setWallWidth(Number(e.target.value))}
                            min="100"
                        />
                    </label>
                    <label>
                        Высота (см):
                        <input
                            type="number"
                            value={wallHeight}
                            onChange={(e) => setWallHeight(Number(e.target.value))}
                            min="100"
                        />
                    </label>
                </div>
            </div>

            <div className="visualization-area">
                <div className="wall-preview" style={{ 
                    width: `${wallWidth * 0.5}px`,
                    height: `${wallHeight * 0.5}px`
                }}>
                    <div className={`painting-preview ${shape}`} style={{
                        width: `${width * 0.5}px`,
                        height: `${height * 0.5}px`
                    }}></div>
                </div>
            </div>

            <div className="size-recommendations">
                <h3>Рекомендации</h3>
                <div className="recommendation">
                    📏 {getWallCoverageRecommendation()}
                </div>
                <div className="optimal-size">
                    ✨ {calculateOptimalSize()}
                </div>
            </div>
        </div>
    );
};

export default SizeVisualizer; 
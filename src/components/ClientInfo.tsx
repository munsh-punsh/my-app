import React from 'react';
import { CONFIG } from '../config/env';
import './ClientInfo.css';

const ClientInfo: React.FC = () => {
    return (
        <div className="client-info">
            <section className="creation-process">
                <h2>{CONFIG.CLIENT_INFO.CREATION_PROCESS.title}</h2>
                <div className="steps">
                    {CONFIG.CLIENT_INFO.CREATION_PROCESS.steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{index + 1}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                <span className="duration">🕒 {step.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="timing">
                <h2>{CONFIG.CLIENT_INFO.TIMING.title}</h2>
                <div className="timing-options">
                    {CONFIG.CLIENT_INFO.TIMING.options.map((option, index) => (
                        <div key={index} className="timing-option">
                            <h3>{option.type}</h3>
                            <p className="duration">⏱️ {option.duration}</p>
                            <p>{option.description}</p>
                            {option.extraCharge && (
                                <p className="extra-charge">{option.extraCharge}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="payment">
                <h2>{CONFIG.CLIENT_INFO.PAYMENT.title}</h2>
                <div className="payment-methods">
                    {CONFIG.CLIENT_INFO.PAYMENT.methods.map((method, index) => (
                        <div key={index} className="payment-method">
                            <h3>{method.type}</h3>
                            <p>{method.description}</p>
                            <p className="details">{method.details}</p>
                        </div>
                    ))}
                </div>
                <div className="payment-options">
                    <h3>Способы оплаты:</h3>
                    <div className="options-list">
                        {CONFIG.CLIENT_INFO.PAYMENT.options.map((option, index) => (
                            <span key={index} className="option">
                                {option}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="delivery">
                <h2>{CONFIG.CLIENT_INFO.DELIVERY.title}</h2>
                <div className="delivery-options">
                    {CONFIG.CLIENT_INFO.DELIVERY.options.map((option, index) => (
                        <div key={index} className="delivery-option">
                            <h3>{option.type}</h3>
                            <p>{option.description}</p>
                            {option.price && <p className="price">{option.price}</p>}
                            <p className="duration">🚚 {option.duration}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ClientInfo; 
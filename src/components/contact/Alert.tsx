import React, { useEffect } from 'react';
import './contact.css';

interface AlertProps {
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="alert show">
            <span className="alert__message">{message}</span>
            <button className="alert__close" onClick={onClose}>&times;</button>
        </div>
    );
};

export default Alert;
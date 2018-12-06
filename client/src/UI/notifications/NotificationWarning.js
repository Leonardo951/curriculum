import React from 'react';
import "react-notifications-component/dist/theme.css";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";

const NotificationWarning = (data)=> {
    return {
        type: "warning",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        isMobile: true,
        dismissable: { click: true },
        content: (
            <div className="notification-custom-warning custom-not">
                <FaTimes className={'notification-close-custom'} />
                <div className="notification-custom-icon">
                    <FaExclamationTriangle className={'fa'}/>
                </div>
                <div className="notification-custom-content">
                    { data.title && <p className={'notification-title-custom'}>{data.title}</p> }
                    <p className="notification-message-custom">{data.message}</p>
                </div>
            </div>
        )
    }
};

export default NotificationWarning;
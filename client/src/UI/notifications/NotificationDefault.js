import React from 'react';
import "react-notifications-component/dist/theme.css";
import { FaExclamationCircle, FaTimes } from "react-icons/fa";

const NotificationDefault = (data)=> {
    return {
        type: "default",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        isMobile: true,
        dismissable: { click: true },
        content: (
            <div className="notification-custom-default custom-not">
                <FaTimes className={'notification-close-custom'} />
                <div className="notification-custom-icon">
                    <FaExclamationCircle className={'fa'}/>
                </div>
                <div className="notification-custom-content">
                    { data.title && <p className={'notification-title-custom'}>{data.title}</p> }
                    <p className="notification-message-custom">{data.message}</p>
                </div>
            </div>
        )
    }
};

export default NotificationDefault;
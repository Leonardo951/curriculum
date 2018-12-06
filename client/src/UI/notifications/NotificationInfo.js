import React from 'react';
import "react-notifications-component/dist/theme.css";
import { FaInfoCircle, FaTimes } from "react-icons/fa";

const NotificationInfo = (data)=> {
    return {
        type: "info",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        isMobile: true,
        dismissable: { click: true },
        content: (
            <div className="notification-custom-info custom-not">
                <FaTimes className={'notification-close-custom'} />
                <div className="notification-custom-icon">
                    <FaInfoCircle className={'fa'}/>
                </div>
                <div className="notification-custom-content">
                    { data.title && <p className={'notification-title-custom'}>{data.title}</p> }
                    <p className="notification-message-custom">{data.message}</p>
                </div>
            </div>
        )
    }
};

export default NotificationInfo;
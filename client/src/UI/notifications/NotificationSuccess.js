import React from 'react';
import "react-notifications-component/dist/theme.css";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const NotificationSuccess = (data)=> {
    return {
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        isMobile: true,
        dismissable: { click: true },
        content: (
            <div className="notification-custom-success custom-not">
                <FaTimes className={'notification-close-custom'} />
                <div className="notification-custom-icon">
                    <FaCheckCircle className={'fa'}/>
                </div>
                <div className="notification-custom-content">
                    { data.title && <p className={'notification-title-custom'}>{data.title}</p> }
                    <p className="notification-message-custom">{data.message}</p>
                </div>
            </div>
        )
    }
};

export default NotificationSuccess;
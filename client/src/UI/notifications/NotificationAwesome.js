import React from 'react';
import "react-notifications-component/dist/theme.css";
import {FaTimes} from "react-icons/fa";

const NotificationAwesome = (data)=> {
    return {
        type: "awesome",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        isMobile: true,
        dismissable: { click: true },
        content: (
            <div className="notification-custom-awesome custom-not">
                <FaTimes className={'notification-close-custom'} />
                <div className="notification-custom-icon"/>
                <div className="notification-custom-content">
                    { data.title && <p className={'notification-title-custom'}>{data.title}</p> }
                    <p className="notification-message-custom">{data.message}</p>
                </div>
            </div>
        )
    }
};

export default NotificationAwesome;
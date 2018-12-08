import React from 'react';
import "react-notifications-component/dist/theme.css";
import {
    FaTimesCircle,
    FaTimes,
    FaCheckCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaExclamationCircle
} from "react-icons/fa";

export const NotificationSuccess = (data)=> {
    if (data.useIcon) {
        return {
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {duration: 3000},
            isMobile: true,
            dismissable: {click: true},
            content: (
                <div className="notification-custom-success custom-not">
                    <FaTimes className={'notification-close-custom'}/>
                    <div className="notification-custom-icon">
                        <FaCheckCircle className={'fa'}/>
                    </div>
                    <div className="notification-custom-content">
                        {data.title && <p className={'notification-title-custom'}>{data.title}</p>}
                        <p className="notification-message-custom">{data.message}</p>
                    </div>
                </div>
            )
        }
    } else {
        if (data.title) {
            return {
                title: data.title,
                message: data.message,
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        } else {
            return {
                message: data.message,
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        }
    }
};

export const NotificationError = (data)=> {
    if(data.useIcon){
        return {
            type: "danger",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 3000 },
            isMobile: true,
            dismissable: { click: true },
            content: (
                <div className="notification-custom-danger custom-not">
                    <FaTimes className={'notification-close-custom'} />
                    <div className="notification-custom-icon">
                        <FaTimesCircle className={'fa'}/>
                    </div>
                    <div className="notification-custom-content">
                        { data.title && <p className={'notification-title-custom'}>{data.title}</p> }
                        <p className="notification-message-custom">{data.message}</p>
                    </div>
                </div>
            )
        }
    }else {
        if (data.title) {
            return {
                title: data.title,
                message: data.message,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        } else {
            return {
                message: data.message,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        }
    }
};

export const NotificationWarning = (data)=> {
    if (data.useIcon) {
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
    } else {
        if (data.title) {
            return {
                title: data.title,
                message: data.message,
                type: "warning",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        } else {
            return {
                message: data.message,
                type: "warning",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        }
    }
};

export const NotificationInfo = (data)=> {
    if(data.useIcon){
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
    }else {
        if (data.title) {
            return {
                title: data.title,
                message: data.message,
                type: "info",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        } else {
            return {
                message: data.message,
                type: "info",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        }

    }
};

export const NotificationDefault = (data)=> {
    if(data.useIcon){
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
    }else {
        if (data.title) {
            return {
                title: data.title,
                message: data.message,
                type: "default",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        } else {
            return {
                message: data.message,
                type: "default",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {duration: 3000},
                dismissable: {click: true}
            }
        }
    }
};

export const NotificationAwesome = (data)=> {
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
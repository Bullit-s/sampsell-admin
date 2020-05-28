import notification from "antd/es/notification";
import React, { CSSProperties } from "react";

export enum NotificationTypes {
    error = "error",
    success = "success",
    info = "info",
    warning = "warning",
}

export function showNotification(
    type: NotificationTypes,
    message?: string,
    description?: React.ReactNode
): void {
    notification[type]({
        message: message,
        description: description,

        style: type === NotificationTypes.error ? errorStyle : undefined,
    });
}

const errorStyle: CSSProperties = {
    backgroundColor: "#FFF1F0",
};



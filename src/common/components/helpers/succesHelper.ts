import { NotifyParams } from "../../interfaces/NotifyParams";
import { NotificationTypes, showNotification } from "./notificationHelper";

export enum SuccesCode {
  auth = "auth",
  register = "auth",
}



export const showSuccesNotify = (code: SuccesCode)=> {
    const notificationMessage = getSuccesText(code);
    showNotification(
        notificationMessage.type,
        notificationMessage.title,
        notificationMessage.text
    );
}

export const getSuccesText = (code: SuccesCode): NotifyParams => {
    switch (code) {
      case SuccesCode.auth:
        return {type: NotificationTypes.success, title: "Выполнено!", text: "Вы успешно авторизовались!"}
      case SuccesCode.register:
        return {type: NotificationTypes.success, title: "Выполнено!", text: "Вы успешно зарегистрировались!"};
      default:
        return {type: NotificationTypes.success, title: "Выполнено!", text: "Операция успешно выполнена"};
    }
  };


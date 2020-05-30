import { NotifyParams } from "../../interfaces/NotifyParams";
import { NotificationTypes, showNotification } from "./notificationHelper";

export const showErrorNotify = (code?: string, textError?: string) => {
  const notificationMessage = getErrorText(code, textError);
  showNotification(
    notificationMessage.type,
    notificationMessage.title,
    notificationMessage.text
  );
};

export const getErrorText = (
  code?: string,
  textError?: string
): NotifyParams => {
  switch (code) {
    case "auth/too-many-requests":
      return {
        type: NotificationTypes.warning,
        title: "Внимание!",
        text: "Слишком много запросов, повторите позже",
      };
    case "auth/invalid-email":
      return {
        type: NotificationTypes.warning,
        title: "Внимание!",
        text: "Ошибка формата почты",
      };
    case "auth/user-not-found":
      return {
        type: NotificationTypes.warning,
        title: "Внимание!",
        text: "Почта не зарегистрирована",
      };
    case "auth/wrong-password":
      return {
        type: NotificationTypes.warning,
        title: "Внимание!",
        text: "Вы ввели неверный e-mail или пароль",
      };
    case "auth/email-already-in-use":
      return {
        type: NotificationTypes.warning,
        title: "Внимание!",
        text: "Почта уже зарегистрирована",
      };
    default:
      return {
        type: NotificationTypes.error,
        title: "Внимание!",
        text: textError || "Неизвестная ошибка",
      };
  }
};

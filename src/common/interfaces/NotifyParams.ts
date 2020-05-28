import { NotificationTypes } from "../components/helpers/notificationHelper";

export interface NotifyParams {
    type: NotificationTypes
    title: string;
    text: string;
}
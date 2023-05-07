import React from 'react';
import { useAppSelector } from '../../app/store';
import { selectAllNotifications } from './notificationsSlice';

export default function NotificationCountBadge() {
  const notifications = useAppSelector(selectAllNotifications);
  const numUnreadNotifications = notifications.filter((n) => !n.read).length;

  let unreadNotificationsBadge;

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = numUnreadNotifications;
  }
  return unreadNotificationsBadge;
}

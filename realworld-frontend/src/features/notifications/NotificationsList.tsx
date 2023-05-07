import React, { useLayoutEffect } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { css } from '@emotion/css';
import { selectAllUsers } from '../users/usersSlice';

import {
  selectAllNotifications,
  allNotificationsRead,
} from './notificationsSlice';
import { useAppDispatch, useAppSelector } from '../../app/store';

export const NotificationsList = () => {
  const dispatch = useAppDispatch();

  const notifications = useAppSelector(selectAllNotifications);
  const users = useAppSelector(selectAllUsers);

  useLayoutEffect(() => {
    dispatch(allNotificationsRead());
  });

  const renderedNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date);
    const timeAgo = formatDistanceToNow(date);
    const user = users.find((user) => user.id === notification.user) || {
      name: 'Unknown User',
    };

    const notificationClassname = notification.isNew
      ? css`
          border: 2px solid;
        `
      : '';

    return (
      <article key={notification.id} className={notificationClassname}>
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </article>
    );
  });

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  );
};

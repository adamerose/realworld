import { useAppDispatch } from '../../app/store';
import { fetchNotifications } from './notificationsSlice';

const NotificationsFetchButton = () => {
  const dispatch = useAppDispatch();

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications());
  };

  return (
    <button onClick={fetchNewNotifications}>Fetch New Notifications</button>
  );
};

export default NotificationsFetchButton;

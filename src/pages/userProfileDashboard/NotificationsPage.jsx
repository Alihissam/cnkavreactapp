import React, { useState } from "react";
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      message: "Your account was updated successfully.",
      timestamp: "2024-07-21 10:30 AM",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      message: "Your password will expire in 3 days.",
      timestamp: "2024-07-20 08:00 AM",
      read: true,
    },
    {
      id: 3,
      type: "error",
      message: "Failed to process your last transaction.",
      timestamp: "2024-07-19 03:45 PM",
      read: false,
    },
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-4xl font-bold mb-6 mt-40">Notifications</h1>

      <section className="bg-black border text-white shadow-md rounded-lg p-6">
        {notifications.length === 0 ? (
          <p className="text-white">No notifications to display.</p>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`flex items-start p-4 mb-4 rounded-lg ${
                  notification.read ? "bg-gray-100" : "bg-gray-200"
                } ${
                  notification.type === "info"
                    ? "border-blue-400"
                    : notification.type === "warning"
                    ? "border-yellow-400"
                    : "border-red-400"
                } border-l-4 shadow-md`}
              >
                <div className="mr-3 flex-shrink-0">
                  {notification.type === "info" && (
                    <FaInfoCircle className="text-blue-500 text-2xl" />
                  )}
                  {notification.type === "warning" && (
                    <FaExclamationTriangle className="text-yellow-500 text-2xl" />
                  )}
                  {notification.type === "error" && (
                    <FaTimesCircle className="text-red-500 text-2xl" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500">
                    {notification.timestamp}
                  </p>
                </div>
                {!notification.read && (
                  <button
                    onClick={() => handleMarkAsRead(notification.id)}
                    className="ml-4 text-blue-500 hover:underline"
                  >
                    Mark as read
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default NotificationPage;

importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD8jphpAWpQ5PXwIy3LxxQ4xMvngpGx5xs",
  authDomain: "uniqueridetaxi.firebaseapp.com",
  projectId: "uniqueridetaxi",
  storageBucket: "uniqueridetaxi.firebasestorage.app",
  messagingSenderId: "611563174193",
  appId: "1:611563174193:web:4cb11a15ed57a1df761810"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3097/3097144.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

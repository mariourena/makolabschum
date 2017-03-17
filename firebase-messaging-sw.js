importScripts("https://www.gstatic.com/firebasejs/3.7.2/firebase.js");
var config = {
  apiKey: "AIzaSyCCyxxGlJixmczFksNeFfGdSQOa0E7ebYw",
  authDomain: "chum-3a092.firebaseapp.com",
  databaseURL: "https://chum-3a092.firebaseio.com",
  storageBucket: "chum-3a092.appspot.com",
  messagingSenderId: "200231153315"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();


messaging.onMessage(function(payload) {
  console.log('payload',payload);
});

import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyAhkQnlhQZD-jjuRF0D16hdSC1svS1WjrI",
        authDomain: "team-voting-app-e1541.firebaseapp.com",
        databaseURL: "https://team-voting-app-e1541-default-rtdb.firebaseio.com",
        projectId: "team-voting-app-e1541",
        storageBucket: "team-voting-app-e1541.appspot.com",
        messagingSenderId: "25211103064",
        appId: "1:25211103064:web:70c6d5ca57a1aef78c272d"
      }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
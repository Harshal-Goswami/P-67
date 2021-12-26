import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYnnd1ikx4suDt_aC5ATAOlIsJppPTFyE",
    authDomain: "teamvotingapp-5f791.firebaseapp.com",
    projectId: "teamvotingapp-5f791",
    storageBucket: "teamvotingapp-5f791.appspot.com",
    messagingSenderId: "408924624413",
    appId: "1:408924624413:web:33ae431c8dd1fd1a4618f4"
  };
  
// add SDK Firebase
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
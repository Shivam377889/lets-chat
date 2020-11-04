//YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAMrxLtLTX_VtEWaY1XLEDM-xcDYcaEx9M",
      authDomain: "kwada-54890.firebaseapp.com",
      databaseURL: "https://kwada-54890.firebaseio.com",
      projectId: "kwada-54890",
      storageBucket: "kwada-54890.appspot.com",
      messagingSenderId: "897368877582",
      appId: "1:897368877582:web:5f25c5ef7bc7998263aa5f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    function send(){
          msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
});
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDxUs-6SMx1TS8TZkSPtIDS20ySKDTmYA0",
      authDomain: "kwitter-59af8.firebaseapp.com",
      databaseURL: "https://kwitter-59af8.firebaseio.com",
      projectId: "kwitter-59af8",
      storageBucket: "kwitter-59af8.appspot.com",
      messagingSenderId: "111326831496",
      appId: "1:111326831496:web:cae78de661720e47ca503d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name-"+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>  "
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

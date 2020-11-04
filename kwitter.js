function addUser(){

user_name= document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location= "kwitter_room.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
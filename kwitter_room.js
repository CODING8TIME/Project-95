const firebaseConfig = {
      apiKey: "AIzaSyAJg_hYjoD225w6lNWQ76w3bSxP6w5yjZ4",
      authDomain: "practice-activity-b728c.firebaseapp.com",
      databaseURL: "https://practice-activity-b728c-default-rtdb.firebaseio.com",
      projectId: "practice-activity-b728c",
      storageBucket: "practice-activity-b728c.appspot.com",
      messagingSenderId: "158833084470",
      appId: "1:158833084470:web:722c5782f248de8604f097"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}







function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >8"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

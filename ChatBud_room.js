const firebaseConfig = {
      apiKey: "AIzaSyBkHD3jkX9fHz5aRSI4GcQsBoWPwB-AcBo",
      authDomain: "chatbud-12912.firebaseapp.com",
      databaseURL: "https://chatbud-12912-default-rtdb.firebaseio.com",
      projectId: "chatbud-12912",
      storageBucket: "chatbud-12912.appspot.com",
      messagingSenderId: "587781348857",
      appId: "1:587781348857:web:b4d12b7d8bbbe8eda27128"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
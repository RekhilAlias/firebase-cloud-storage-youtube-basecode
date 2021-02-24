var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var firestore = firebase.firestore();

  let submitBtn = document.querySelector(".btn");
  let Myname = document.querySelector(".name");
  let Myemail = document.querySelector(".email");


  
const db = firestore.collection("collection"); //Add your collection name



submitBtn.addEventListener("click", function (e) {
    let username = Myname.value;
    let useremail = Myemail.value;
    e.preventDefault();
    db.doc()
      .set({
        name: username,
        email: useremail,
      })
      .then(function () {
        console.log("Send data");
  
        alert("Send data");
      })
      .catch(function (error) {
        console.log(error);
      });
  
    setTimeout(function () {
      document.querySelector(".contact").reset();
    }, 3000);
  });
  

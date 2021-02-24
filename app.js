var firebaseConfig = {
    apiKey: "AIzaSyCdNSajjfCJoP0_4qfr3aJdMsbfxarJPzc",
    authDomain: "project2-b2561.firebaseapp.com",
    projectId: "project2-b2561",
    storageBucket: "project2-b2561.appspot.com",
    messagingSenderId: "862313166347",
    appId: "1:862313166347:web:61eefeeab1d2b1d755b90e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var firestore = firebase.firestore();

  let submitBtn = document.querySelector(".btn");
  let Myname = document.querySelector(".name");
  let Myemail = document.querySelector(".email");


  
const db = firestore.collection("collection");



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
  
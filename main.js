  var config = {
      apiKey: "AIzaSyDOsBHFmh7t7jV2wA5hZUp874j4cmSA0Fg",
      authDomain: "fire-ac4b5.firebaseapp.com",
      databaseURL: "https://fire-ac4b5.firebaseio.com",
      projectId: "fire-ac4b5",
      storageBucket: "fire-ac4b5.appspot.com",
      messagingSenderId: "794545453440"
  };



  function showAllTrains() {
      database.ref("")
  }


  firebase.initializeApp(config);

  var database = firebase.database();


  database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
  })

  $(document).ready(function() {

      $("#submitTrain").on("click", function(event) {
          event.preventDefault();
          var train = {
              name: $("#trainName").val(),
              destination: $("#destination").val(),
              firstTrain: $("#firstTrain").val(),
              frequency: $("#frequency").val(),
          }
          database.ref().push(train);
      })

      $()



  });
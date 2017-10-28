  var config = {
      apiKey: "AIzaSyDOsBHFmh7t7jV2wA5hZUp874j4cmSA0Fg",
      authDomain: "fire-ac4b5.firebaseapp.com",
      databaseURL: "https://fire-ac4b5.firebaseio.com",
      projectId: "fire-ac4b5",
      storageBucket: "fire-ac4b5.appspot.com",
      messagingSenderId: "794545453440"
  };
  firebase.initializeApp(config);
  var database = firebase.database();




  database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
  })



  $(document).ready(function() {


      // Set a variables that are eqaul to the time
      var now = moment().format('HH:mm');
      console.log(now);




      //Show all the trains on the table.
      database.ref().on("child_added", function(childSnapshot) {
          $("#trains-display").append("<tr><td id='name'> " + childSnapshot.val().name +
              " </td><td id='destination'> " + childSnapshot.val().destination + " </td><td id='frequency'> " + childSnapshot.val().frequency +
              "</td><td id='next-arrival'" + "Next Arrival" + " </td><td id='frequency'>" + "Minutes Away" + "</td></tr>"
          )
      });

      $("#submitTrain").on("click", function(event) {
          var now = moment().format('HH:mm');
          console.log(now);
          event.preventDefault();
          var train = {
              name: $("#trainName").val(),
              destination: $("#destination").val(),
              firstTrain: $("#firstTrain").val(),
              frequency: $("#frequency").val(),
          };

          var next_train = moment(firstTrain);

          console.log(now.diff(next_train))




          //   database.ref().push(train);
      })




  });
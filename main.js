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




      //Show all the trains on the table.
      database.ref().on("child_added", function(childSnapshot) {
          $("#trains-display").append("<tr><td id='name'> " + childSnapshot.val().name +
              " </td><td id='destination'> " + childSnapshot.val().destination + " </td><td id='frequency'> " + childSnapshot.val().frequency +
              " minutes</td><td id='next-arrival'>" + "Next Arrival" + " </td><td id='frequency'>" + "Minutes Away" + "</td></tr>"
          )
      });

      $("#submitTrain").on("click", function(event) {
          event.preventDefault();
          var train = {
              name: $("#trainName").val(),
              destination: $("input[id=destination]").val(),
              firstTrain: $("#firstTrain").val(),
              frequency: parseInt($("input[id=frequency]").val())

          };

          console.log(train);


          //   The Next arrival is equal to the first train + frequency 
          var first_train = moment(train.firstTrain, "HH:mm:ss");
          console.log(first_train);


          var the_train = moment(first_train).add(train.frequency, "minutes");


          console.log(the_train._d);







          //   Minutes away is equal to next_arrival - now;







          //Make a variable that is equl to the time that the train starts 
          //   var next_train = moment.utc(train.firstTrain, "HH:mm");
          //   var d = moment.duration(now.diff(next_train, "minutes"));
          //   console.log(d);
          //   d.add(train.frequency, 'minutes');
          //   console.log(d);








          //   database.ref().push(train);
      })




  });
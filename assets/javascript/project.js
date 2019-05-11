    // Donation page
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDf5-kvOxcgPqCuK6ZxnXW2yYE1FK52SKE",
        authDomain: "real-project-251fd.firebaseapp.com",
        databaseURL: "https://real-project-251fd.firebaseio.com",
        projectId: "real-project-251fd",
        storageBucket: "real-project-251fd.appspot.com",
        messagingSenderId: "9404888100",
        appId: "1:9404888100:web:fbb36cc2fc30999a"

        const firebaseConfig = {

        };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    var database = firebase.database();

    // 2. Button for adding
    $("#add-Fname-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var name = $("#name-input").val().trim();
    var email = $("#emIL-input").val().trim();
    var DonationStart = $("#Donation-inpu").val().trim();
    var NewDonation = $("#donation-input").val().trim();

    function addDonation(event) {
    event.preventDefault()

    // Creates local "temporary" object for holding employee data
    var name = $("#name").val()
    var email = $("#email").val()
    var DonationAmount = $("#Donation").val()

    // Creates local "temporary" object for holding employee data
    var NewDonation = {
        name: name,
        emIL: emIL,
        DonationAmount: DonationAmount,
    };

    console.log(NewDonation)
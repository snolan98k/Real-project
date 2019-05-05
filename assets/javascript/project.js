console.log("new branch");
//on click search wig//
$(document).on('click', '.wig', function () {
    console.log("inside click event");
    var wig = $(this).data('style');
    console.log(`this is the wig that is clicked ${wig}`);
    var APIKey = "nnOKkLLCfXxXvHh0cEtEEWuiQfgee81wE6ecrtrwOWo2H8UrcVvYEKYZGsCjRkxGjO1gmy0VWoQz7pmg4y6kyDbK5or4vsoCmSjl1VFOhncbkX7Lf10zre-IobfNXHYx";
    var queryURL = "https://cors-anywhere.herokuapp.com/http://nnOKkLLCfXxXvHh0cEtEEWuiQfgee81wE6ecrtrwOWo2H8UrcVvYEKYZGsCjRkxGjO1gmy0VWoQz7pmg4y6kyDbK5or4vsoCmSjl1VFOhncbkX7Lf10zre-IobfNXHYx";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    }); 
$(document).ready(function(){
  $("#Submit").click(function(e){

    // Get the values from the input fields
    var teamName = $('#pageName').val();
    var firstTeamName = $('#team1').val();
    var secondTeamName = $('#team2').val();

    // Display error message if the field(s) are empty
    if (teamName === '' || firstTeamName === '' || secondTeamName === ''){
        $("#emptyField").show();
        return -1;
    }

    // change the various elements based on input
    $("title").text(teamName);
    $(".title").text(teamName);
    $(".TeamName1").text(firstTeamName);
    $(".TeamName2").text(secondTeamName);

    // hide the voting page and show the voting page
    $('#mainPage').hide();
    $('#votePage').show();
  });
});

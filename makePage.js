<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>__TITTLE__</title>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    
    <!-- self CSS -->
    <link href="style.css" rel="stylesheet" type="text/css">

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
  
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  
  <body>
  <div class="jumbotron text-center ">
    <h2> __TEAMONE__ or ___TEAMTWO___ </h2>
    <div class="container">
      <row vertical-center>

      <!-- Votes for team one -->
        <div class ="col-sm-6">
          <button class="btn-block btn-success"  id="voteTeamOne" type="button" onclick="voteTeamOne()">Vote</button>
          <div id="teamOneVotes">0</div>
        </div>

        <!-- Votes for team two -->
        <div class="col-sm-6">
          <button class="btn-block btn-warning" id="voteTeamTwo" type="button" onclick="voteTeamTwo()">Vote</button>
          <div class = "center" id="teamTwoVotes">0</div>
        </div>

      </row>
    </div>

    <script src="scrip.js" stype="text/javascript"></script>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

    <script type ="text/javascript" src="script.js"></script>
  </body>


</html>
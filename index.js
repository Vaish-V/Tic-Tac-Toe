var curPlayer = 0;
var visited = [2, 2, 2, 2, 2, 2, 2, 2, 2];
var won = 0;
var ct = 0;

function checkResult(){
  if (visited[0] == visited[1] && visited[1] == visited[2] && visited[2] != 2) {
    alert("Player "+visited[0] + " won!");
    won = 1;
  } else if (visited[0] == visited[3] && visited[3] == visited[6] && visited[6] != 2) {
    alert("Player "+visited[0] + " won!");
    won = 1;
  } else if (visited[0] == visited[4] && visited[4] == visited[8] && visited[8] != 2) {
    alert("Player "+visited[0] + " won!");
    won = 1;
  } else if (visited[1] == visited[4] && visited[4] == visited[7] && visited[7] != 2) {
    alert("Player "+visited[1] + " won!");
    won = 1;
  } else if (visited[2] == visited[4] && visited[4] == visited[6] && visited[6] != 2) {
    alert("Player "+visited[2] + " won!");
    won = 1;
  } else if (visited[3] == visited[4] && visited[4] == visited[5] && visited[5] != 2) {
    alert("Player "+visited[3] + " won!");
    won = 1;
  } else if (visited[0] == visited[1] && visited[1] == visited[2] && visited[2] != 2) {
    alert("Player "+visited[0] + " won!");
    won = 1;
  } else if (visited[2] == visited[5] && visited[5] == visited[8] && visited[8] != 2) {
    alert("Player "+visited[5] + " won!");
    won = 1;
  } else if (visited[6] == visited[7] && visited[7] == visited[8] && visited[8] != 2) {
    alert("Player "+visited[6] + " won!");
    won = 1;
  }

  ct++;

}


$(".grid-item").on("click", function() {
  var id = this.id;
  var cellNo = id[id.length - 1];
  if (curPlayer === 0 && visited[cellNo] === 2) {
    // alert(visited[cellNo]);

    $("#" + id + " img").attr("src", 'images/checked.png');
    visited[cellNo] = curPlayer;

    curPlayer = 1;
  } else if (curPlayer === 1 && visited[cellNo] === 2) {
    visited[cellNo] = curPlayer;
    $("#" + id + " img").attr("src", 'images/close.png');

    curPlayer = 0;
  } else {
    alert("Cell already clicked!");
  }
  checkResult();
  // alert(ct);
  if(won == 1){
    $("h1").text("Refresh to play again!");
    $(".grid-item").off("click");
  }
  else if(won == 0 && ct == 9){
    alert("Its a tie !");
  }
});

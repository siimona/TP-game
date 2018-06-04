
$(document).ready(function() {
  var distance = [];
  var score = 0;
  var best = 0;
  $(".ball").click(function() {
    var power = $("#range").val();
    var direction = $("#direction").val();

    $(".ball").animate({
      "left": "+=" + power,
      "top": "+=" + direction
    }, "medium", function() {
      distance[0] = parseInt($(".ball").css("left"));
      distance[1] = parseInt($(".ball").css("top"));
      distance[2] = parseInt($(".target").css("margin-left"));
      distance[3] = parseInt($(".target").css("margin-top"));

      console.log('distance [left, top, margin-left, margin-top] = ' + distance);
    });

    $(".target").one("mouseover", function() {
    //   $("#range").val(500);
    //   $("#direction").val(0);
    if(distance[0] > 800 && distance[1] < 250) {
      // if ((distance[0] + 80 > distance[2]) && (distance[1] - 100 > distance[3]) && distance[0] < distance[2]+100 && distance[1] > -150) {
        score++;
        console.log('score:' + score);
        $(".congrats").text("Felicitări aveți " + score + " puncte.");
        $(".congrats").removeClass("normal");
        if (score > best) {
          best = score;
        }
      } else {
        $(".congrats").text("Gol ratat, scorul dumneavoastră: " + score);
        score = 0;
        $(".congrats").addClass("normal");
        $(".best").text("Scor maxim: " + best);
      }
       $(".ball").animate({
          "left": 0,
          "top": 0
        }, "fast");
    })
  })
})
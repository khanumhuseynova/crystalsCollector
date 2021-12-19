alert("Welcome Crystal Collector Game")

$(document).ready(function() {

    var comp = Math.floor(Math.random() * 100)
    $('#scoreToMatch').text(comp);

    var num1 = Math.floor(Math.random() * 15 + 1)
    var num2 = Math.floor(Math.random() * 15 + 1)
    var num3 = Math.floor(Math.random() * 15 + 1)
    var num4 = Math.floor(Math.random() * 15 + 1)


    var playerTotal = 0;
    var wins = 0;
    var losses = 0;


    $('#wins').text(wins);
    $('#losses').text(losses);


    function reset() {
        comp = Math.floor(Math.random() * 100 + 19);
        console.log(comp)
        $('#scoreToMatch').text(comp);
        num1 = Math.floor(Math.random() * 100 + 1);
        num2 = Math.floor(Math.random() * 12 + 1);
        num3 = Math.floor(Math.random() * 12 + 1);
        num4 = Math.floor(Math.random() * 12 + 1);
        playerTotal = 0;
        $('#totalScore').text(playerTotal);
    }

    function crystalsCollector() {
        alert("Congrats! You won!");
        wins++;
        $('#wins').text(wins);
        reset();
    }

    function loser() {
        alert("Sorry! You lose!");
        losses++;
        $('#losses').text(losses);
        reset()
    }

    $('.purple').on('click', function() {
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        if (playerTotal == comp) {
            crystalsCollector();
        } else if (playerTotal > comp) {
            loser();
        }
    })
    $('.green').on('click', function() {
        playerTotal = playerTotal + num2;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        if (playerTotal == comp) {
            crystalsCollector();
        } else if (playerTotal > comp) {
            loser();
        }
    })
    $('.yellow').on('click', function() {
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);

        if (playerTotal == comp) {
            crystalsCollector();
        } else if (playerTotal > comp) {
            loser();
        }
    })
    $('.red').on('click', function() {
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);

        if (playerTotal == comp) {
            crystalsCollector();
        } else if (playerTotal > comp) {
            loser();
        }
    });
});
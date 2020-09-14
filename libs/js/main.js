$('#gameDisplay').bind("contextmenu", function () {
    return false;
});

$(window).ready(() => {

// game init
    let casesTable = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'b1', 'b2','b3','b4','b5','b6','b7','b8','b9', 'c1', 'c2', 'c3','c4','c5','c6','c7','c8','c9', 'd1', 'd2','d3','d4','d5','d6','d7','d8','d9', 'e1', 'e2','e3','e4','e5','e6','e7','e8','e9', 'f1','f2','f3','f4','f5','f6','f7','f8','f9', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'h1', 'h2', 'h3','h4','h5','h6','h7','h8','h9','i1','i2','i3','i4','i5','i6','i7','i8','i9'];
    let gameArrayTable = [];
    let flag = false;


    // init game array
    for (let i = 0; i < casesTable.length; i++) {
        gameArrayTable.push([casesTable[i], 0]);
    }


// bomb positions
    // init random number
    let randomNumber, randomNumbersTable = new Object();

    for (let i = 0; i < 10;) {
        randomNumber = Math.floor((Math.random() * 80));

        if (!(randomNumber in randomNumbersTable)) {
            randomNumbersTable[i] = randomNumber;
            gameArrayTable[randomNumber][1] = null;
            i++;
        }

    }

    console.log(gameArrayTable);


// game going on
    $("*").mousedown(function (e) {
        e.preventDefault();
        e.stopPropagation();
        let clikedElmt = this.id;


        // check that id exists
        if (clikedElmt != "") {

            let html = $('#' + clikedElmt)[0].innerHTML;
            let bombFound = false;


            switch (e.which) {
                case 1:
                    if (html === "") {
                        for (let i = 0; i < gameArrayTable.length; i++) {
                            if (gameArrayTable[i][0] === clikedElmt && gameArrayTable[i][1] === null) {
                                bombFound = true;
                                break;
                            }
                        }


                        if (bombFound) {
                            for (let i = 0; i < gameArrayTable.length; i++) {
                                if (gameArrayTable[i][1] === null) {
                                    $('#' + gameArrayTable[i][0]).html("<img id='theImg' src='libs/img/bomb2.png'/>");
                                }
                            }
                        }
                    }

                    break;
                case 3:
                    if (html === "") {
                        $('#' + clikedElmt).html("<img id='theImg' src='libs/img/flag2.png'/>")
                        flag = true;
                    } else if (flag) {
                        $('#' + clikedElmt).html("");
                        flag = false;
                    }
                    break;
            }



        }
    });
});

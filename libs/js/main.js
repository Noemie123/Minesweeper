$('#gameDisplay').bind("contextmenu", function () {
    return false;
});

function findWithAttr(array, attr, value) {
    for(let i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}


$(window).ready(() => {

// game init
    let casesTable = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'b1', 'b2','b3','b4','b5','b6','b7','b8','b9', 'c1', 'c2', 'c3','c4','c5','c6','c7','c8','c9', 'd1', 'd2','d3','d4','d5','d6','d7','d8','d9', 'e1', 'e2','e3','e4','e5','e6','e7','e8','e9', 'f1','f2','f3','f4','f5','f6','f7','f8','f9', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'h1', 'h2', 'h3','h4','h5','h6','h7','h8','h9','i1','i2','i3','i4','i5','i6','i7','i8','i9'];
    let gameArrayTable = [];
    let flag = false;
<<<<<<< HEAD
    let bombFound = false;


    // init game array
    for (let i = 0; i < casesTable.length; i++) {
        gameArrayTable.push([casesTable[i], 0]);
    }


// bomb positions
    // init if bomb, value = null
    let randomNumber, randomNumbersTable = new Object();

    for (let i = 0; i < 10;) {
        randomNumber = Math.floor((Math.random() * 80));

        if (!(randomNumber in randomNumbersTable)) {
            randomNumbersTable[i] = randomNumber;
            gameArrayTable[randomNumber][1] = null;
            i++;
        }

    }


    //init number of bombs around
    for (let i = 0; i < gameArrayTable.length; i++) {
        if (gameArrayTable[i][1] === null) {

            //up
            if (i > 8) {
                if (gameArrayTable[i-9][1] != null) {
                    let oldVal = gameArrayTable[i-9][1];
                    gameArrayTable[i-9][1] = oldVal+1;
                }
            }

            //down
            if (i < 72) {
                if (gameArrayTable[i+9][1] != null) {
                    let oldVal = gameArrayTable[i+9][1];
                    gameArrayTable[i+9][1] = oldVal+1;
                }
            }


            //left
            if (i !== 0 && i !== 9 && i !== 18 && i !== 27 && i!== 36 && i !== 45 && i!== 54 && i !== 63 && i !== 72) {
                if (gameArrayTable[i-1][1] != null) {
                    let oldVal = gameArrayTable[i-1][1];
                    gameArrayTable[i-1][1] = oldVal+1;
                }
            }


            //right
            if (i !== 8 && i !== 17 && i !== 26 && i !== 35 && i!== 44 && i !== 53 && i!== 62 && i !== 71 && i !== 80) {
                if (gameArrayTable[i+1][1] != null) {
                    let oldVal = gameArrayTable[i+1][1];
                    gameArrayTable[i+1][1] = oldVal+1;
                }
            }

            //up left
            if (i > 8) {
                if (i !== 0 && i !== 9 && i !== 18 && i !== 27 && i !== 36 && i !== 45 && i !== 54 && i !== 63 && i !== 72) {
                    if (gameArrayTable[i-10][1] != null) {
                        let oldVal = gameArrayTable[i - 10][1];
                        gameArrayTable[i - 10][1] = oldVal + 1;
                    }
                }
            }


            //up right
            if (i > 8) {
                if (i !== 8 && i !== 17 && i !== 26 && i !== 35 && i !== 44 && i !== 53 && i !== 62 && i !== 71 && i !== 80) {
                    if (gameArrayTable[i-8][1] != null) {
                        let oldVal = gameArrayTable[i-8][1];
                        gameArrayTable[i-8][1] = oldVal + 1;
                    }
                }
            }


            //bottom left
            if (i < 72) {
                if (i !== 0 && i !== 9 && i !== 18 && i !== 27 && i !== 36 && i !== 45 && i !== 54 && i !== 63 && i !== 72) {
                    if (gameArrayTable[i+8][1] != null) {
                        let oldVal = gameArrayTable[i+8][1];
                        gameArrayTable[i+8][1] = oldVal + 1;
                    }
                }
            }


            //bottom right right
            if (i < 72) {
                if (i !== 8 && i !== 17 && i !== 26 && i !== 35 && i !== 44 && i !== 53 && i !== 62 && i !== 71 && i !== 80) {
                    if (gameArrayTable[i+10][1] != null) {
                        let oldVal = gameArrayTable[i+10][1];
                        gameArrayTable[i+10][1] = oldVal + 1;
                    }
                }
            }
        }
=======


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

>>>>>>> a7c88ced3a5b106ee37dc1491496fc99cc2e437b
    }

    console.log(gameArrayTable);







    console.log(gameArrayTable);


// game going on
    $("*").mousedown(function (e) {
        e.preventDefault();
        e.stopPropagation();
        let clikedElmt = this.id;


        // check that id exists
        if (clikedElmt != "") {

            let html = $('#' + clikedElmt)[0].innerHTML;
            let indexClickedElmt = findWithAttr(gameArrayTable, 0, clikedElmt);



            switch (e.which) {
                case 1:
                    if (html === "") {
<<<<<<< HEAD

                        if (gameArrayTable[indexClickedElmt][1] === null) {
                            bombFound = true;
=======
                        for (let i = 0; i < gameArrayTable.length; i++) {
                            if (gameArrayTable[i][0] === clikedElmt && gameArrayTable[i][1] === null) {
                                bombFound = true;
                                break;
                            }
                        }


                        if (bombFound) {
>>>>>>> a7c88ced3a5b106ee37dc1491496fc99cc2e437b
                            for (let i = 0; i < gameArrayTable.length; i++) {
                                if (gameArrayTable[i][1] === null) {
                                    $('#' + gameArrayTable[i][0]).html("<img id='theImg' src='libs/img/bomb2.png'/>");
                                }
<<<<<<< HEAD
                            }
                        } else {
                            $('#' + clikedElmt).html(gameArrayTable[indexClickedElmt][1]);
                            if (gameArrayTable[indexClickedElmt][1] === 0) {
                                indexClickedElmt-10 >= 0 ? $('#' + gameArrayTable[indexClickedElmt-10][0]).html(gameArrayTable[indexClickedElmt-10][1]) : "";
                                indexClickedElmt-9 >= 0 ? $('#' + gameArrayTable[indexClickedElmt-9][0]).html(gameArrayTable[indexClickedElmt-9][1]) : "";
                                indexClickedElmt-8 >= 0 ? $('#' + gameArrayTable[indexClickedElmt-8][0]).html(gameArrayTable[indexClickedElmt-8][1]) : "";
                                indexClickedElmt-1 >= 0 ? $('#' + gameArrayTable[indexClickedElmt-1][0]).html(gameArrayTable[indexClickedElmt-1][1]) : "";
                                indexClickedElmt+1 <= 80 ? $('#' + gameArrayTable[indexClickedElmt+1][0]).html(gameArrayTable[indexClickedElmt+1][1]) : "";
                                indexClickedElmt+8 <= 80 ? $('#' + gameArrayTable[indexClickedElmt+8][0]).html(gameArrayTable[indexClickedElmt+8][1]) : "";
                                indexClickedElmt+9 <= 80 ? $('#' + gameArrayTable[indexClickedElmt+9][0]).html(gameArrayTable[indexClickedElmt+9][1]) : "";
                                indexClickedElmt+10 <= 80 ? $('#' + gameArrayTable[indexClickedElmt+10][0]).html(gameArrayTable[indexClickedElmt+10][1]) : "";
=======
>>>>>>> a7c88ced3a5b106ee37dc1491496fc99cc2e437b
                            }
                        }
                    }

                    break;
                case 3:
<<<<<<< HEAD
                    if (!bombFound) {
                        if (html === "") {
                            $('#' + clikedElmt).html("<img id='theImg' src='libs/img/flag2.png'/>")
                            flag = true;
                        } else if (flag) {
                            $('#' + clikedElmt).html("");
                            flag = false;
                        }
=======
                    if (html === "") {
                        $('#' + clikedElmt).html("<img id='theImg' src='libs/img/flag2.png'/>")
                        flag = true;
                    } else if (flag) {
                        $('#' + clikedElmt).html("");
                        flag = false;
>>>>>>> a7c88ced3a5b106ee37dc1491496fc99cc2e437b
                    }
                    break;
            }



        }
    });
});

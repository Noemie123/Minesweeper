$('#gameDisplay').bind("contextmenu", function () {
    return false;
});

$(window).ready(() => {

// game init
    let lettersTable = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    let bombCasesTable = [];

// bomb positions
    for (i = 0; i < 10; i++) {
        let randomNumber = Math.floor((Math.random() * 9) + 1);

        let randomNumber2 = Math.floor((Math.random() * 8));
        let letter = lettersTable[randomNumber2];

        let bombCases = letter + randomNumber;

        let exist = false;

        if (bombCasesTable != null) {
            for (let bombCa in bombCasesTable) {
                if (bombCa == bombCases) {
                    exist = true;
                }
            }
        }

        if (exist) {
            i--;
            exist = false;
        } else {
            bombCasesTable[i] = bombCases;
        }


    }


// game going on
    $("*").mousedown(function (e) {
        e.preventDefault();
        e.stopPropagation();
        let clikedElmt = this.id;


        // check that id exists
        if (clikedElmt != "") {

            let html = $('#' + clikedElmt)[0].innerHTML;
            let bombFound = false;

            console.log(bombCasesTable);

            switch (e.which) {
                case 1:
                    if (html === "") {
                        for (let i = 0; i < bombCasesTable.length; i++) {
                            if (bombCasesTable[i] === clikedElmt) {
                                bombFound = true;
                                break;
                            }
                        }

                        if (bombFound) {
                            for (let i = 0; i < bombCasesTable.length; i++) {
                                $('#' + bombCasesTable[i]).html("<img id='theImg' src='libs/img/bomb2.png'/>");
                            }
                        }
                    }

                    break;
                case 3:
                    if (html === "") {
                        $('#' + clikedElmt).html("<img id='theImg' src='libs/img/flag2.png'/>")
                    } else {
                        $('#' + clikedElmt).html("");
                    }
                    break;
            }



        }
    });
});

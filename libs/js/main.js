        //generating random nbrs
        let rdNb, rdNb2, rdTab = [],
            rdTab2 = [];

        for (let i = 0; i < 20; i++) {
            rdNb = Math.floor((Math.random() * 10) + 1);
            rdNb2 = Math.floor((Math.random() * 10) + 1);

            rdTab.push(rdNb);
            rdTab2.push(rdNb2);
        }


        //putting all the info of the cases in a tab
        let caseInf = [],
            megaTab = [];

        class caseInfo {
            constructor(id, col, lig, cont) {
                this.id = "#c" + col + "l" + lig;
                this.col = col;
                this.lig = lig;
                this.cont = cont;
            }
        }


        for (a = 1; a <= 10; a++) {
            for (b = 1; b <= 10; b++) {
                caseInf = new caseInfo(undefined, b, a, 0);
                megaTab.push(caseInf);
            }
        }


        //calculating nb to be displayed in cases
        for (let g = 0; g < 100; g++) {
            for (let f = 0; f < rdTab.length; f++) {
                if (megaTab[g].col == rdTab[f] && megaTab[g].lig == rdTab2[f]) {
                    megaTab[g].cont = "X";
                    //left
                    if (megaTab[g - 1] != undefined && megaTab[g - 1].cont != "X" && megaTab[g - 1].col != 10) {
                        megaTab[g - 1].cont = megaTab[g - 1].cont + 1;
                    }
                    //right 
                    if (megaTab[g + 1] != undefined && megaTab[g + 1].cont != "X" && megaTab[g + 1].col != 1) {
                        megaTab[g + 1].cont = megaTab[g + 1].cont + 1;
                    }
                    //top
                    if (megaTab[g - 10] != undefined && megaTab[g - 10].cont != "X" && megaTab[g - 10].lig != 10) {
                        megaTab[g - 10].cont = megaTab[g - 10].cont + 1;
                    }
                    //bottom
                    if (megaTab[g + 10] != undefined && megaTab[g + 10].cont != "X" && megaTab[g + 10].lig != 1) {
                        megaTab[g + 10].cont = megaTab[g + 10].cont + 1;
                    }
                    //diagonally top left
                    if (megaTab[g - 11] != undefined && megaTab[g - 11].cont != "X" && megaTab[g - 11].col != 10 && megaTab[g - 11].lig != 10) {
                        megaTab[g - 11].cont = megaTab[g - 11].cont + 1;
                    }
                    //diagonally top right
                    if (megaTab[g - 9] != undefined && megaTab[g - 9].cont != "X" && megaTab[g - 9].col != 1 && megaTab[g - 9].lig != 10) {
                        megaTab[g - 9].cont = megaTab[g - 9].cont + 1;
                    }
                    //diagonally bottom left
                    if (megaTab[g + 9] != undefined && megaTab[g + 9].cont != "X" && megaTab[g + 9].col != 10 && megaTab[g + 9].lig != 1) {
                        megaTab[g + 9].cont = megaTab[g + 9].cont + 1;
                    }
                    //diagonally bottom right
                    if (megaTab[g + 11] != undefined && megaTab[g + 11].cont != "X" && megaTab[g + 11].col != 1 && megaTab[g + 11].lig != 1) {
                        megaTab[g + 11].cont = megaTab[g + 11].cont + 1;
                    }
                }
            }

        }



        let finish, temp, fail = false;

        //displaying on click
        for (let k = 0; k < 100; k++) {
            $(megaTab[k].id).mousedown(function(evt) {


                //displaying right ones
                if (evt.which == 1) {
                    if (megaTab[k].cont == 0) {
                        for (let p = 0; p < 100; p++) {
                            if (megaTab[p].cont == 0) {
                                $(megaTab[p].id).html('<p>' + megaTab[p].cont + '</p>').css('color', 'green');
                                if (megaTab[p - 1] != undefined && megaTab[p - 1].cont != "X" && megaTab[p - 1].col != 10) {
                                    $(megaTab[p - 1].id).html('<p>' + megaTab[p - 1].cont + '</p>').css('color', 'green');
                                }
                                if (megaTab[p + 1] != undefined && megaTab[p + 1].cont != "X" && megaTab[p + 1].col != 1) {
                                    $(megaTab[p + 1].id).html('<p>' + megaTab[p + 1].cont + '</p>').css('color', 'green');
                                }
                                if (megaTab[p - 10] != undefined && megaTab[p - 10].cont != "X" && megaTab[p - 10].lig != 10) {
                                    $(megaTab[p - 10].id).html('<p>' + megaTab[p - 10].cont + '</p>').css('color', 'green');
                                }
                                if (megaTab[p + 10] != undefined && megaTab[p + 10].cont != "X" && megaTab[p + 10].lig != 1) {
                                    $(megaTab[p + 10].id).html('<p>' + megaTab[p + 10].cont + '</p>').css('color', 'green');
                                }
                            }
                        }
                    } else if (megaTab[k].cont != "X") {
                        $(megaTab[k].id).html('<p>' + megaTab[k].cont + '</p>').css('color', 'green');
                    }

                    //checking if done
                    finish = false;

                    for (let z = 0; z < 100; z++) {
                        if (megaTab[z].cont != "X") {
                            temp = $(megaTab[z].id).text();
                            if (temp == "") {
                                finish = false;
                                break;
                            } else {
                                finish = true;
                            }
                        }
                    }

                    if (finish) {
                        $("#userMsg").html('<p>Félicitations !!!</p>');
                    }


                    //displaying if wrong
                    if (megaTab[k].cont == "X") {
                        $("#userMsg").html("<p>Loupé... Essaie encore !</p>");
                        fail = true;
                    }

                    //end if all found or if wrong
                    if (fail == true || finish == true) {
                        for (let q = 0; q < 100; q++) {
                            if (megaTab[q].cont == "X") {
                                $(megaTab[q].id).html("<img id='theImg' src='libs/img/bomb2.png'/>");
                            }
                        }
                        $('#gameDisplay').css("pointer-events", "none");
                        $("#replayDisplay").css("display", "block");
                    }
                } else if (evt.which == 2) { //red flag if mouse wheel click
                    $(megaTab[k].id).html("<img id='theImg' src='libs/img/flag2.png'/>");
                }
            });
        };


        //play again button
        $("#refreshBtn").on('click', function() {
            location.reload();
        });
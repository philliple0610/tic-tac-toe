
// Global Varibles
var xTurn = true;
var gameOver = false;
var numMoves = 0;

function makeOmove()
{
    var status = document.getElementById('status'); // get the status object
    var val0;
    var val1;
    var val2;
    var val3;

    if(gameOver)
    {
        return;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //               OFFENSE IMPLEMENTATION
    //
    ///////////////////////////////////////////////////////////////////////////


    // [ ]
    // [O]
    // [O]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById('0_' + y).value;
        val1 = document.getElementById('1_' + y).value;
        val2 = document.getElementById('2_' + y).value;
        if(val0 == '  ' && val1 == 'O' && val2 == 'O')
        {
            numMoves++;
            xTurn = true;
            status.innerHTML = "X\'s turn";

            document.getElementById('0_' + y).value = 'O'; // set this square to 'O'
            return;
        }
    }


    // [O]
    // [ ]
    // [O]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById('0_' + y).value;
        val1 = document.getElementById('1_' + y).value;
        val2 = document.getElementById('2_' + y).value;
        if(val0 == 'O' && val1 == '  ' && val2 == 'O')
        {
            numMoves++;
            xTurn = true;
            status.innerHTML = "X\'s turn";
            document.getElementById('1_' + y).value = 'O'; // set this square to 'O'
            return;
        }
    }

    // [O]
    // [O]
    // [ ]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById('0_' + y).value;
        val1 = document.getElementById('1_' + y).value;
        val2 = document.getElementById('2_' + y).value;
        if(val0 == 'O' && val1 == 'O' && val2 == '  ')
        {
            numMoves++;
            xTurn = true;
            status.innerHTML = "X\'s turn";
            document.getElementById('2_' + y).value = 'O'; // set this square to 'O'
            return;
        }
    }

    // [ ][O][O]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById(y + '_0').value;
        val1 = document.getElementById(y + '_1').value;
        val2 = document.getElementById(y + '_2').value;
        if(val0 == '  ' && val1 == 'O' && val2 == 'O')
        {
            numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
            xTurn = true; // switching to 'X's turn
            status.innerHTML = "X\'s turn"; // displaying O's turn
            document.getElementById(y + '_0').value = 'O'; // set this square to 'O'
            return true; // return true to the caller
        }
    }


    // [O][ ][O]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById(y + '_0').value; // 1st square of a column
        val1 = document.getElementById(y + '_1').value; // 2nd square of a column
        val2 = document.getElementById(y + '_2').value; // 3rd square of a column
        if(val0 == 'O' && val1 == '  ' && val2 == 'O') // check if all are 'X'
        {
            numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
            xTurn = true; // switching to 'X's turn
            status.innerHTML = "X\'s turn"; // displaying O's turn
            document.getElementById(y + '_1').value = 'O'; // set this square to 'O'
            return true; // return true to the caller
        }
    }

    // [O][O][ ]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById(y + '_0').value;
        val1 = document.getElementById(y + '_1').value;
        val2 = document.getElementById(y + '_2').value;
        if(val0 == 'O' && val1 == 'O' && val2 == '  ') // check if they are two O and an empty square
        {
            numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
            xTurn = true; // switching to 'X's turn
            status.innerHTML = "X\'s turn"; // displaying O's turn
            document.getElementById(y + '_2').value = 'O'; // set this square to 'O'
            return true; // return true to the caller
        }
    }



    // [ ][ ][ ]
    // [ ][O][ ]
    // [O][ ][ ]
    val0 = document.getElementById('2_0').value; // 1st square of a column
    val1 = document.getElementById('1_1').value; // 2nd square of a column
    val2 = document.getElementById('0_2').value; // 3rd square of a column
    if(val0 == 'O' && val1 == 'O' && val2 == '  ') // check if all are 'X'
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                 // ex: if numMoves = 5 then after this execution
                                 // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('0_2').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
        }


    // [ ][ ][O]
    // [ ][O][ ]
    // [ ][ ][ ]
    val0 = document.getElementById('0_2').value;
    val1 = document.getElementById('1_1').value; // 2nd square of a column
    val2 = document.getElementById('2_0').value; // 3rd square of a column
    if(val0 == 'O' && val1 == 'O' && val2 == '  ') // check if all are 'X'
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                 // ex: if numMoves = 5 then after this execution
                                 // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('2_0').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }




    // [ ][ ][ ]
    // [ ][O][ ]
    // [ ][ ][O]
    val0 = document.getElementById('0_0').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('2_2').value;
    if(val0 == '  ' && val1 == 'O' && val2 == 'O')
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                 // ex: if numMoves = 5 then after this execution
                                 // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('0_0').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
     }


    // [O][ ][ ]
    // [ ][O][ ]
    // [ ][ ][ ]
    val0 = document.getElementById('0_0').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('2_2').value;
    if(val0 == 'O' && val1 == 'O' && val2 == '  ')
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                 // ex: if numMoves = 5 then after this execution
                                 // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('2_2').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }



    ///////////////////////////////////////////////////////////////////////////
    //
    //               DEFEND
    //
    ///////////////////////////////////////////////////////////////////////////


    // [ ]
    // [X]
    // [X]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById('0_' + y).value; // 1st square of a column
        val1 = document.getElementById('1_' + y).value; // 2nd square of a column
        val2 = document.getElementById('2_' + y).value; // 3rd square of a column
        if(val0 == '  ' && val1 == 'X' && val2 == 'X') // check if all are 'X'
        {
            numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
            xTurn = true; // switching to 'X's turn
            status.innerHTML = "X\'s turn"; // displaying O's turn
            document.getElementById('0_' + y).value = 'O'; // set this square to 'O'
            return true; // return true to the caller
        }
    }

    // [X]
    // [ ]
    // [X]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById('0_' + y).value; // 1st square of a column
        val1 = document.getElementById('1_' + y).value; // 2nd square of a column
        val2 = document.getElementById('2_' + y).value; // 3rd square of a column
        if(val0 == 'X' && val1 == '  ' && val2 == 'X') // check if all are 'X'
        {
            numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
            xTurn = true; // switching to 'X's turn
            status.innerHTML = "X\'s turn"; // displaying O's turn
            document.getElementById('1_' + y).value = 'O'; // set this square to 'O'
            return true; // return true to the caller
        }
    }

    // [X]
    // [X]
    // [ ]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById('0_' + y).value; // 1st square of a column
        val1 = document.getElementById('1_' + y).value; // 2nd square of a column
        val2 = document.getElementById('2_' + y).value; // 3rd square of a column
        if(val0 == 'X' && val1 == 'X' && val2 == '  ') // check if all are 'X'
        {
            numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
            xTurn = true; // switching to 'X's turn
            status.innerHTML = "X\'s turn"; // displaying O's turn
            document.getElementById('2_' + y).value = 'O'; // set this square to 'O'
            return true; // return true to the caller
        }
    }


    //[ ][X][X]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById(y + '_0').value; // 1st square of a column
        val1 = document.getElementById(y + '_1').value; // 2nd square of a column
        val2 = document.getElementById(y + '_2').value; // 3rd square of a column
        if(val0 == '  ' && val1 == 'X' && val2 == 'X') // check if all are 'X'
        {
            numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
            xTurn = true; // switching to 'X's turn
            status.innerHTML = "X\'s turn"; // displaying O's turn
            document.getElementById(y + '_0').value = 'O'; // set this square to 'O'
            return true; // return true to the caller
        }
    }

    //[X][ ][X]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById(y + '_0').value; // 1st square of a column
        val1 = document.getElementById(y + '_1').value; // 2nd square of a column
        val2 = document.getElementById(y + '_2').value; // 3rd square of a column
        if(val0 == 'X' && val1 == '  ' && val2 == 'X') // check if all are 'X'
        {
            numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
            xTurn = true; // switching to 'X's turn
            status.innerHTML = "X\'s turn"; // displaying O's turn
            document.getElementById(y + '_1').value = 'O'; // set this square to 'O'
            return true; // return true to the caller
        }
    }

    //[X][X][ ]
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById(y + '_0').value; // 1st square of a column
        val1 = document.getElementById(y + '_1').value; // 2nd square of a column
        val2 = document.getElementById(y + '_2').value; // 3rd square of a column
        if(val0 == 'X' && val1 == 'X' && val2 == '  ') // check if all are 'X'
        {
            numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
            xTurn = true; // switching to 'X's turn
            status.innerHTML = "X\'s turn"; // displaying O's turn
            document.getElementById(y + '_2').value = 'O'; // set this square to 'O'
            return true; // return true to the caller
        }
    }


    // [ ][-][-]
    // [-][X][-]
    // [-][-][X]
    val0 = document.getElementById('0_0').value; // 1st square ofO a column
    val1 = document.getElementById('1_1').value; // 2nd square of a column
    val2 = document.getElementById('2_2').value; // 3rd square of a column
    if(val0 == '  ' && val1 == 'X' && val2 == 'X') // check if all are 'X'
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('0_0').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }


    // [X][-][-]
    // [-][X][-]
    // [-][-][ ]
    val0 = document.getElementById('0_0').value; // 1st square of a column
    val1 = document.getElementById('1_1').value; // 2nd square of a column
    val2 = document.getElementById('2_2').value; // 3rd square of a column
    if(val0 == 'X' && val1 == 'X' && val2 == '  ') // check if all are 'X'
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('2_2').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }


    // [-][-][ ]
    // [-][X][-]
    // [X][-][-]
    val0 = document.getElementById('0_2').value; // 1st square ofO a column
    val1 = document.getElementById('1_1').value; // 2nd square of a column
    val2 = document.getElementById('2_0').value; // 3rd square of a column
    if(val0 == '  ' && val1 == 'X' && val2 == 'X') // check if all are 'X'
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('0_2').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }


    // [-][-][X]
    // [-][X][-]
    // [ ][-][-]
    val0 = document.getElementById('0_2').value; // 1st square of a column
    val1 = document.getElementById('1_1').value; // 2nd square of a column
    val2 = document.getElementById('2_0').value; // 3rd square of a column
    if(val0 == 'X' && val1 == 'X' && val2 == '  ') // check if all are 'X'
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('2_0').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    // SPECIAL CASES
    // these are special cases
    //
    ///////////////////////////////////////////////////////////////////////////

    // [-][-][X]
    // [ ][O][-]
    // [X][-][-]
    val0 = document.getElementById('1_1').value;
    val1 = document.getElementById('0_2').value;
    val2 = document.getElementById('2_0').value;
    val3 = document.getElementById('0_1').value;
    if(val0 == 'O' && val1 == 'X' && val2 == 'X' && val3 == '  ')
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('0_1').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }


    // [X][-][-]
    // [-][O][X]
    // [-][-][-]
    val0 = document.getElementById('0_0').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('1_2').value;
    val3 = document.getElementById('0_2').value;
    if(val0 == 'X' && val1 == 'O' && val2 == 'X' && val3 == '  ')
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('0_2').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }


    // [-][-][-]
    // [-][O][X]
    // [X][-][ ]
    val0 = document.getElementById('2_0').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('1_2').value;
    val3 = document.getElementById('2_2').value;
    if(val0 == 'X' && val1 == 'O' && val2 == 'X' && val3 == '  ')
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('2_2').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }


    // [-][-][-]
    // [-][O][X]
    // [-][X][ ]
    val0 = document.getElementById('2_1').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('1_2').value;
    val3 = document.getElementById('2_2').value;
    if(val0 == 'X' && val1 == 'O' && val2 == 'X' && val3 == '  ')
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('2_2').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }

    // [-][-][X]
    // [-][O][-]
    // [ ][X][-]
    val0 = document.getElementById('0_2').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('2_1').value;
    val3 = document.getElementById('2_0').value;
    if(val0 == 'X' && val1 == 'O' && val2 == 'X' && val3 == '  ')
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('2_0').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }


    // [O][-][ ]
    // [-][X][-]
    // [-][-][X]
    val0 = document.getElementById('0_0').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('2_2').value;
    val3 = document.getElementById('0_2').value;
    if(val0 == 'O' && val1 == 'X' && val2 == 'X' && val3 == '  ')
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('0_2').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }



    ///////////////////////////////////////////////////////////////////////////
    //
    // INITIAL CASE
    // if the player didn't go in the middle then go to the middle
    //
    ///////////////////////////////////////////////////////////////////////////

    val0 = document.getElementById('1_1').value;
    if(val0 == '  ') // check if all are 'X'
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('1_1').value = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }


    ///////////////////////////////////////////////////////////////////////////
    //
    // DUMB MOVES
    //
    ///////////////////////////////////////////////////////////////////////////

    // iterate column
    for(var y = 0; y < 3; y++)
    {
        // iterate rows
        for(var x = 0; x < 3; x++)
        {
            var square = document.getElementById(x+'_'+y).value;
            if(square == '  ')
            {
                numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
                xTurn = true; // switching to 'X's turn
                status.innerHTML = "X\'s turn"; // displaying O's turn
                document.getElementById(x + '_' + y).value = 'O'; // set this square to 'O'

                return true; // return true to the caller
            }
        }
    }



}

function checkWin()
{
    var status = document.getElementById('status'); // get the status object
    var val0;
    var val1;
    var val2;

    // check 3 columns
    for(var y = 0; y < 3; y++)
    {
        val0 = document.getElementById('0_'+y).value; // 1st square of a column
        val1 = document.getElementById('1_'+y).value; // 2nd square of a column
        val2 = document.getElementById('2_'+y).value; // 3rd square of a column
        if(val0 == 'X' && val1 == 'X' && val2 == 'X') // check if all are 'X'
        {
            status.innerHTML = "X WINS!"; // display "X WINS"
            gameOver = true;
            return; // return true to the caller
        }
        else if(val0 == 'O' && val1 == 'O' && val2 == 'O')
        {
            status.innerHTML = "TREVOR WINS";
            gameOver = true;
            return;
        }
    }

    // check 3 rows
    for(var x = 0; x < 3; x++)
    {
        val0 = document.getElementById(x + '_0').value;
        val1 = document.getElementById(x + '_1').value;
        val2 = document.getElementById(x + '_2').value;
        if(val0 == 'X' && val1 == 'X' && val2 == 'X')
        {
            status.innerHTML = "X WINS!";
            gameOver = true;
            return;
        }
        else if(val0 == 'O' && val1 == 'O' && val2 == 'O')
        {
            status.innerHTML = "TREVOR WINS";
            gameOver = true;
            return;
        }
    }

    // check top left to lower right diagonal
    val0 = document.getElementById('0_0').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('2_2').value;
    if(val0 == 'X' && val1 == 'X' && val2 == 'X')
    {
        status.innerHTML = "X WINS!";
        gameOver = true;
        return;
    }
    else if(val0 == 'O' && val1 == 'O' && val2 == 'O')
    {
        status.innerHTML = "TREVOR WINS";
        gameOver = true;
        return;
    }

    // check lower left to top right diagonal
    val0 = document.getElementById('2_0').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('0_2').value;
    if(val0 == 'X' && val1 == 'X' && val2 == 'X')
    {
        status.innerHTML = "X WINS!";
        gameOver = true;
        return;
    }
    else if(val0 == 'O' && val1 == 'O' && val2 == 'O')
    {
        status.innerHTML = "TREVOR WINS";
        gameOver = true;
        return;
    }

    //check to see if there is a tie
    if(numMoves == 9) // if all the square are used
    {
        status.innerHTML = 'Tie Game!';
        gameOver = true;
        return;
    }

    // no winner yet  return false;
    return;
}



function newgame()
{
   var status = document.getElementById('status');

   numMoves = 0;
   gameOver = false;

   xTurn = true;
   status.innerHTML = 'X\'s turn';

   for(var x = 0; x < 3; x++)
   {
      for(var y = 0; y < 3; y++)
      {
         document.getElementById(x + '_' + y).value = '  ';
      }
   }
}

function squareclicked(square) // square is a button object
// squareclicked is a function that is called whenever a button is clicked.
{
    if(gameOver) //  check global varible if the game is over
    {
        alert("The game is already over.");
        return;
    }

    var status = document.getElementById('status');  // get the status object
    var value = square.value; // get the current square's value
    if(value != 'X' && value != 'O') // check if the current square does not
                                     // have 'X' or 'O'
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                // ex: if numMoves = 5 then after this execution
                                // numMoves will become 6

        // main ////////////////////////
        square.value = 'X'; // set this square to 'X'

        checkWin(); // call checkWin to see if X wins or tie

        // computer will make the move for 'O'
        makeOmove();

        checkWin(); // call checkWin to see if O wins or tie
    }
    else
    {
        alert('That square has already been played.'); // pop up a window to
                                   // notify that the square has been played
    }


}
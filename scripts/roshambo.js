/*
roshambo.js
Ryan Camaratta, 2015. 
*/

var everything = function ()
{
    // Function to determine wins.
    var compare = function ( choice1, choice2 )
    {

        // Start logic for assigning random ints.
        if ( computerChoice < 0.34 ) 
        {
            computerChoice = "rock";
        } 
        else if( computerChoice <= 0.67 )
        {
            computerChoice = "paper";
        }
        else 
        {
            computerChoice = "scissors";
        }
        // End logic. haha.

        // Dealing with ties.
        if ( choice1 === choice2 )
        {
            alert("The result is a tie.");
        }
        
        // Mesy nested control structures follow this comment.
        else if ( choice1 === "rock" )
        {
            if ( choice2 === "scissors" )
            {
                alert("Rock breaks scissors.");
            }
            else 
            {
                alert("Paper covers rock.");
            }
        } // End rock choice.
        
        else if ( choice1 === "paper" )
        {
            if ( choice2 === "rock" )
            {
                alert("Paper covers rock.");
            }
            else
            {
                alert("Scissors cut paper.");
            }
        } // End paper choice.
        
        else if ( choice1 === "scissors" )
        {
            if ( choice2 === "rock" )
            {
                alert("Rock breaks scissors.")
            }
            else
            {
                alert("Scissors cuts paper.");
            }
        } // End scissors choice.
        
    }; // End compare function.

    // Prompt user for input.
    var count = prompt( "How many times would you like to play?");

    for( i = count; i >= 1; i-- )
    {
        var userChoice = prompt( "Do you choose rock, paper or scissors?" );
        var computerChoice = Math.random(); 
        compare( userChoice, computerChoice );

        if ( i === 1 )
        {
            alert( "You're done playing, forever." );
        }    
    };

};

// Below statement gets my button element with id of clickMe and links the everything() 
// function to its onclick method.
document.getElementById('clickMe').onclick = everything;
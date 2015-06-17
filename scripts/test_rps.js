// roshambo.js
// Copyright Ryan Camaratta, 2015.
// All code licensed under GNU GPL v3.0

// Wrap in a function to bind to the onclick event handler.
var main = function()
{
    // Initialize player score to zero.
    var player_score = 0;

    // Initial value for AI choice is a random float between
    // 0 and 1, non-inclusive.
    //var ai_choice = Math.random();

    // Computer AI ultimately ends as a string; rock paper or scissors.
    var ai = '';

    // Score area is declared outside of the game loop so it's only
    // added to the DOM once.
    score_area = document.createElement('div');

    // Sentinel value for controlling the for-loop (main game loop)''
    var repeat = prompt('How many times would you like to play? ');

    // Get a variable *ai* to find a string value based on a random float
    // between 0 and 1.
    var get_ai = function(computer)
    {
        // Logic here.
        if (computer > 0 && computer < 0.30)
        {
            ai = 'rock';
        }
        else if (computer > 0.30 && computer < 0.60)
        {
            ai = 'paper';
        }
        else if (computer > 0.60 && computer <= 1.0)
        {
            ai = 'scissors';
        };

        return ai;
    };

    // Function to select main paragraph, and add a new div to it that
    // contains the *player_score* variable.
    var display = function(score)
    {
       score_paragraph = document.getElementById('article_special');
       score_paragraph.appendChild(score_area);
       score_area.innerHTML = 'Player score: ' + score;

    };

    // Use the user-provided sentinel and repeat the main game
    // function x times.
    //for (repeat; repeat >= 1; repeat--)
    //{
    //    start_game();
    //}

// Define game function.
var start_game = function()
    {
        var player_choice = prompt('Enter a choice: ');
        var ai_choice = Math.random();
        get_ai(ai_choice);

        alert('Your opponent chose ' + ai + '.');

        // Switch on return value from *get_ai* to determine wins.
        switch(ai)
        {
            case 'rock':
                if (player_choice == 'paper')
                {
                    alert('Paper covers rock, you win!');
                    player_score++;
                    display(player_score);
                }
                else if (player_choice == 'scissors')
                {
                    alert('Rock breaks scissors, you lose.');
                    player_score--;
                    display(player_score);
                }
                else
                {
                    alert('It\'s a tie.');
                }
                break;

            case 'paper':
                if (player_choice == 'scissors')
                {
                    alert('Scissors cut paper, you win!');
                    player_score++;
                    display(player_score);
                }
                else if (player_choice == 'rock')
                {
                    alert('Paper covers rock, you lose.');
                    player_score--;
                    display(player_score);
                }
                else
                {
                    alert('It\'s a tie.');
                }
                break;

            case 'scissors':
                if (player_choice == 'rock')
                {
                    alert('Rock breaks scissors, you win!');
                    player_score++;
                    display(player_score);
                }
                else if (player_choice == 'paper')
                {
                    alert('Scissors cut paper, you lose.');
                    player_score--;
                    display(player_score);
                }
                else
                {
                    alert('It\'s a tie.');
                }
                break;

            default:
                alert('It\'s a tie!');
        };
    }; // End game function declaration.

    // Use the user-provided sentinel and repeat the main game
    // function x times.
    for (repeat; repeat >= 1; repeat--)
    {
        start_game();
    }

}; // End main function.

// Get the button by it's unique ID and bind the main function to it.
// The button's onclick method will run the *main()* function
// which wraps the game. (This is done to avoid global variables.)
// NOTE THAT when binding to an even handler the function loses its parens.
// No idea why (TODO) but if you include them it's run on page load.
document.getElementById('clickMe').onclick = main;

// TODO: Implement a removeElement to clear the score at the end of every game.
// Otherwise, the total scores are listed under each other, which is
// actually kind of neat.

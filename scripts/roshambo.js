/*
roshambo.js
Ryan Camaratta, 2015.
*/

score_area = document.createElement('div');

// Wrap in a function to bind to the onclick event handler.
var start_game = function()
{
    // Function to determine wins.
    // Randomize AI choice with a float between 0 and 1, non-inclusive.
    var ai_choice = Math.random();
    var player_choice = prompt('Enter a choice: ');
    var ai = '';

    // Take the random float and assign a variable *ai* to whether the AI will
    // have chosen rock, paper, or scissors.
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

    get_ai(ai_choice);
    alert('Your opponent chose ' + ai + '.');
    var player_score = 0;
    switch(ai)
    {
        case 'rock':
            if (player_choice == 'paper')
            {
                alert('Paper covers rock, you win!');
                player_score += 1;
            }
            else if (player_choice == 'scissors')
            {
                alert('Rock breaks scissors, you lose.');
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
                player_score += 1;
            }
            else if (player_choice == 'rock')
            {
                alert('Paper covers rock, you lose.');
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
                player_score = player_score + 1;
                display(player_score);
            }
            else if (player_choice == 'paper')
            {
                alert('Scissors cut paper, you lose.');
            }
            else
            {
                alert('It\'s a tie.');
            }
            break;

        default:
            alert('It\'s a tie!');
    };

};
// Below statement gets my button element with id of clickMe,
// and binds the star_game() function to the button's onclick method.
document.getElementById('clickMe').onclick = start_game;

// Create a new div, add the player score as its child.

//document.getElementById('article_wooha').appendChild(html_score);

var display = function(writer)
{
   score_paragraph = document.getElementById('article_special');
   score_paragraph.appendChild(score_area);
   //new_p_tag.innerHTML += writer;
   score_area.innerHTML = writer;

};

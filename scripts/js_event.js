var button = document.querySelector("button");

function weep(event)
{
if ( event.which == 1 )
  alert("Left button...");
else if ( event.which == 3 )
  alert("Right button...");
}

// This script doesn't use onClick methods or
// getElementById methods.
// Instead I wrote a very simple event listener;
// below statement will add an event listener
// (that listens for a mousdown, ie click, event)
// and when the mousedown event is heard it will
// run weep().
button.addEventListener("mousedown", weep);
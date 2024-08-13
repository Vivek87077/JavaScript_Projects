const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

// Set an interval to update the clock every 1000 milliseconds (1 second)
setInterval(function(){
  // Create a new Date object to get the current date and time
  let date = new Date();
  // Update the innerHTML of the element with id 'clock' to the current time
  clock.innerHTML = date.toLocaleTimeString();
}, 1000) // The interval is set to 1000 milliseconds (1 second)


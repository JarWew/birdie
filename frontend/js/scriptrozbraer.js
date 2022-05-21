const handy = document.getElementById('handyLuggage');
const medium = document.getElementById('mediumLuggage');
const large = document.getElementById('largeLuggage');


const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');

// const btnLuggage = document.querySelector('.btnluggage')

const btnConfirm = document.getElementById('btnConfirm');



populateUI();


// dodać cenę biletu i nr lotu z bazy danych lub localstorage
let ticketPrice = 100
let selectedFlightIndex = "WAR200422"

// Save selected flight index and price
function setFlightData(flightIndex, flightPrice) {

  localStorage.setItem('selectedFlightIndex', flightIndex);
  localStorage.setItem('selectedFlightPrice', flightPrice);
}



// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}



// get data from localstorage and populate ui
function populateUI() { 
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  
  

// Seat click event
container.addEventListener('click', (e) => {
  
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
    
  }
});
}

// intial count and total
updateSelectedCount();


btnConfirm.addEventListener('click', () => {
  console.log('button działą');
 let onlySelectedSeats = document.querySelectorAll('.selected');
  for (x of onlySelectedSeats)     
    //  x.classList.remove('.selected');
     x.classList.toggle('.occupied');
});


handy.addEventListener('click'), () => {
  console.log('handy luggage');
  }
  
 


// const destination = localStorage.getItem("destination");
// const date = localStorage.getItem("date");

// // document.getElementById('showDestination').textContent = (`${destination}`);
// document.getElementById('showDate').textContent = (`${date}`);




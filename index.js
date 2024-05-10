const buttonRef = document.querySelector('nav form button');
const tempRef = document.querySelector('.weather-box .temperature');
const placeRef =  document.querySelector('.weather-box .location p');
const dateTimeRef =  document.querySelector('.weather-box .location span');
const iconRef =  document.querySelector('.weather-box .condition img');
const textRef =  document.querySelector('.weather-box .condition .condition-text');
const locationRef = document.querySelector('nav form .searchField');

//get the location name from input form when Search Button is Clicked
buttonRef.addEventListener('click', function(event){ //when clicked on search button pass the value which is inside the input form
    event.preventDefault();
    fetchData(locationRef.value);
})

function fetchData(locationName){
    fetch(`http://api.weatherapi.com/v1/current.json?key=aad82060af6e46648e122752241005&q=${locationName}&aqi=no`)
    .then((res) => res.json())//parsing the stringified data 
    .then((data) => updateInfo(data))//pass the parsed data to updatedInfo function
    .catch((error) => console.log(error))
}

function updateInfo(obj) { // make respective changed in the DOM tree as per the incoming JSON data
   tempRef.innerText = obj.current.temp_c;
   placeRef.innerText = obj.location.name;
   dateTimeRef.innerText = obj.location.localtime;
   iconRef.src = obj.current.condition.icon;
   textRef.innerText = obj.current.condition.text;
}


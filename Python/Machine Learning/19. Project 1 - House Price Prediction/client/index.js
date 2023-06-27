const locationDropDown = document.querySelector("#uiLocations");
const forms = document.querySelectorAll("form.form");
const estimatedPrice = document.querySelector('#uiEstimatedPrice h2');

async function getLocations() {
  // const url = "http://localhost:5000/get_location_names";

  const url = "/api/get_location_names";
  const response = await fetch(url);
  const data = await response.json();

  myHTML = data.locations
    .map((location) => {
      return `<option>${location}</option>`;
    })
    .join(" ");
  locationDropDown.innerHTML = myHTML;
}

function onClickedEstimatePrice() {
  // const url = "http://localhost:5000/get_estimated_price";
  const url = "/api/get_estimated_price"

  var formdata = new FormData();
  formdata.append("total_sqft", forms[0].Squareft.value);
  formdata.append("bath", forms[1].uiBathrooms.value);
  formdata.append("bhk", forms[0].uiBHK.value);
  formdata.append("location", forms[1].location.value);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("http://localhost:5000/get_estimated_price", requestOptions)
    .then(response => response.json())
    .then(result => {
        estimatedPrice.textContent = `${result.estimated_price} Lakh`;
    })
    .catch(error => console.log('error', error));
}

getLocations();

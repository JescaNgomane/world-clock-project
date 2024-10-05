function timeInterval() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesTimezone = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML =
      losAngelesTimezone.format(" MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTimezone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    let parisTimezone = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTimezone.format(" MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTimezone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let nameCity = timeZone.replace("_", " ").split("/")[1];
  let cityTimezone = moment().tz(timeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city" >
          <div>
            <h2>${nameCity}</h2>
            <div class="date">${cityTimezone.format(" MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTimezone.format(
            "h:mm:ss"
          )} <small>${cityTimezone.format("A")}</small>

  </div>
        </div>`;
}

timeInterval();
setInterval(timeInterval, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

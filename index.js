function timeInterval() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTimezone = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTimezone.format(" MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTimezone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisTimezone = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTimezone.format(" MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTimezone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
timeInterval();
setInterval(timeInterval, 1000);

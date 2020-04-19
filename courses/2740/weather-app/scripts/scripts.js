const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5600685&appid=3c80f32210493bfb727af12710f22a48&units=imperial";            

// api key: 3c80f32210493bfb727af12710f22a48

//What day is today?
    //Number?
const todayDate = new Date();

const todayNumber = todayDate.getDay();
console.log(todayNumber);
    //Name?
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
if (todayNumber === 7) {
    todayNumber = 0;
}


//Get the forcast info json file.
fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (weatherInfo) {
        const gmtOffset = '18:00:00';

        console.log(weatherInfo);
        const fiveDay = document.getElementById("fiveDay")

        let placeName = weatherInfo.city.name;
        document.getElementById("place").innerHTML = placeName;

        let currentTemperature = weatherInfo.list[0].main.temp;
        document.getElementById("currentTemp").innerHTML = currentTemperature;

        let currentIcon = weatherInfo.list[0].weather[0].icon;
        let currentIconPath = "//openweathermap.org/img/w/" + currentIcon + ".png";

        let currentIconImg = document.createElement("img");
        currentIconImg.src = currentIconPath;
        currentIconImg.alt = "current weather";

        document.getElementById("weatherIcon").appendChild(currentIconImg);

        // loop through the 40-item list
        for (i = 0; i<weatherInfo.list.length; i++) {
            var time = weatherInfo.list[i].dt_txt; 

            //is it noon? 
            if (time.includes('18:00:00')) {
                let dayNumber = (new Date(time)).getDay();

                //build HTML in memory
               
                let dayName = document.createElement('h3'); 
                dayName.textContent = weekday[dayNumber];
                
                console.log(">" + weekday[dayNumber]);
                let forecastP = document.createElement("p");
                forecastP.innerHTML = "Temperature at Noon:";
                let forecastDayTemp = document.createElement("span");
                forecastDayTemp.textContent = weatherInfo.list[i].main.temp + " \u00B0 F";

                let iconFigure = document.createElement("figure");

                //create iconcode below
                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let iconImg = document.createElement("img");
                iconImg.src=iconPath;

                 //Attach HTML to DOM

                let forecastDayName = document.createElement("div");
                forecastDayName.classList.add("card");
                forecastDayName.classList.add("clearfix");
                
                forecastDayName.appendChild(dayName);
                forecastDayName.appendChild(forecastP);
                forecastDayName.appendChild(forecastDayTemp);   
                forecastDayName.appendChild(iconFigure);
                iconFigure.appendChild(iconImg);
    
                fiveDay.appendChild(forecastDayName);
            } // end if statement


        } // end for loop


            }); // end fetch function

        



       
 


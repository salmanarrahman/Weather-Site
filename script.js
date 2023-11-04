document.getElementById("button_").addEventListener("click",function () {

    const city = document.getElementById("cityInput").value ;
    console.log(city);


    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=baa7d4f8f1ff47a53703f0253f0e4d51")
        .then(res => res.json())
        .then(data =>{



            const  condition = data.weather[0].main;
            const  temp  = Math.ceil(data.main.temp - 273);
            const  icon = data.weather[0].icon;
            const name = data.name;
            console.log(condition,temp,icon,name);




                document.getElementById("city").innerText = name;
                document.getElementById("temp").innerText = temp + "°C";
                document.getElementById("condition").innerText = condition;
                document.getElementById("weatherImage").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";




        }).catch((error) => {
        document.getElementById("city").innerText = "Nothing found";
        document.getElementById("temp").innerText = " ";
        document.getElementById("condition").innerText = " ";
        document.getElementById("weatherImage").src  = " ";

    });


})
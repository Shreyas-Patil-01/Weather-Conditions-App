function getData()
{
    const city=search.value;
        const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2dd096f550msh1506dbfe2d0b5d7p114630jsn54e85e2d07f3',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        fetch(url,options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            temp.innerHTML = response.temp;
            ws.innerHTML = response.wind_speed;
            hmdty.innerHTML=response.humidity;
        })
        .catch(err => console.error(err));
}
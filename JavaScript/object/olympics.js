var olympics=[
    {country:"unitedstates",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:22,silver:10,bronze:15,total:47},
    {country:"aus",gold:17,silver:6,bronze:20,total:43},
    {country:"china",gold:34,silver:24,bronze:16,total:74},   
    {country:"india",gold:0,silver:2,bronze:3,total:5},
    {country:"germany",gold:9,silver:10,bronze:16,total:25},

]

// print countrynames partcipating 2021 olympics
// console.log(olympics.map(cntry=>cntry.country));

// which country got most goldmedals
// console.log(olympics.reduce((country1,country2)=>country1.gold>country2.gold?country1:country2));

// which contry got most medals
// console.log(olympics.reduce((country1,country2)=>country1.total>country2.total?country1:country2));

// sort countries based on gold medals
// console.log(olympics.sort((country1,country2)=>country1.gold-country2.gold));

// sort countries based on total medals
// console.log(olympics.sort((country1,country2)=>country1.total-country2.total));


// countries got silver > 10
// console.log(olympics.filter(country=>country.silver>10).map(cntry=>cntry.country));

//list of countries whose goldmedal=0
// console.log(olympics.filter(country=>country.gold==0));

// list the country names whose gold medal >20
// console.log(olympics.filter(country=>country.gold>20));

// is pakisthan participating in 2021 olympics

console.log(olympics.some(country=>country.country=='pakistan')?"yes":"no");
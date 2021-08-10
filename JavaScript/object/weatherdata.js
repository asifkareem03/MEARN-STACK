var weather=[
    {dist_name:"tsr",temp:25},
    {dist_name:"tvm",temp:26},
    {dist_name:"ekm",temp:29},
    {dist_name:"pkd",temp:30},
    {dist_name:"idk",temp:15},
    {dist_name:"mpm",temp:29},
    {dist_name:"tsr",temp:27},
    {dist_name:"tvm",temp:23},
    {dist_name:"ekm",temp:31},
    {dist_name:"pkd",temp:27},
    {dist_name:"idk",temp:17},
    {dist_name:"mpm",temp:25},

]

var weather_max={};
for(let data of weather){
    let district=data.dist_name;
    let cur_temp=data.temp;
    if(!(district in weather_max)){
        weather_max[district]=cur_temp;
    }
    else{
        if(cur_temp<weather_max[district]){
            weather_max[district]=cur_temp;
        }
    }
}
console.log(weather_max);

console.log(Object.entries(weather_max).sort((o1,o2)=>o2[1]-o1[1]));
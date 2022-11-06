//Use the rest country API and display all country name,region,name,sub-region and population.

var xhr = new XMLHttpRequest();
xhr.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-jsondata/master/res-countries.json");
xhr.onload = function() {
    if(xhr.status >=250 && xhr.status< 300){
        var data =JSON.parse(this.responseText);
        console.log(data);
        for(let i=0; i<data.length; i++){
            console.log(data[i].name,data[i].region,data[i].sub-region,data[i].population);
        }
    }
    else{
        Console.log(xhr.responceText);
    }
};
xhr.send();

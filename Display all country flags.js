//Use the rest api and display the all country flag in console.

Var = new XMLHttpRequest();
url.open =('GET',"https://restcountries.eu/rest/v2/all");
xhr.onload = function(){
    if(xhr.status>=250 && xhr.status<=300){
        var data=JSON.parse(this.responceText);
            for(let i=0; i<data.length;i++){
                Console.log(data[i].flag);
            }
    } 
    else{
        Console.log(xhr.responseText);
    }
};
Xhr.send();

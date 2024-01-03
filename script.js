//1.Get all the countries from Asia continent /region using Filter function

var request1 = new XMLHttpRequest;
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
    var data1 = request1.response;
    var result1 = JSON.parse(data1);
    var res1 = result1.filter((ele)=>ele.region=="Asia");
    console.log(res1);
}


//2.Get all the countries with a population of less than 2 lakhs using Filter function

var request2 = new XMLHttpRequest;
request2.open("GET","https://restcountries.com/v3.1/all",true);
request2.send();
request2.onload = function(){
    var data2 = request2.response;
    var result2 = JSON.parse(data2);
    var res2 = result2.filter((ele)=>ele.population<200000);
    console.log(res2);
}


//3.Print the following details name, capital, flag, using forEach function

var request3=new XMLHttpRequest;
request3.open("GET","https://restcountries.com/v3.1/all","true");
request3.send();
request3.onload=function(){
    var data3=request3.response;
    var res3=JSON.parse(data3);
    res3.forEach((x)=>console.log(`Name: ${x.name.common } Capital: ${x.capital } Flag: ${x.flags.png }`));}


//4.Print the total population of countries using reduce function

var request4 = new XMLHttpRequest
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload = function(){
    var data4= request4.response;
    var result4 = JSON.parse(data4);
    var res4=result4.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res4);
}


//5.Print the country that uses US dollars as currency

var request5 = new XMLHttpRequest;
request5.open("GET","https://restcountries.com/v3.1/all",true);
request5.send();
request5.onload = function(){
    var data5 = request5.response;
    var result5 = JSON.parse(data5);
    var res5 = result5.filter((ele)=>ele.currencies && ele.currencies.USD);
    console.log(res5);
    var final = res5.forEach((ele)=>console.log(ele.name.common));
}


function check(){
    //for birthday date
    var showdate=document.getElementById("birthday_date").value.split("-");
    var birthdayYear=showdate[0];
    var birthdayMonth=showdate[1];
    var birthdayDate=showdate[2];

    //for todays date
    var currentDate=document.getElementById("current_date").value.split("-");
    var currentYear=currentDate[0];
    var currentMonth=currentDate[1];
    var todaysDate=currentDate[2];
    
    var day=0;
    var month=0;
    var year=0;
    day=todaysDate-birthdayDate;
    if(day<0){
        day+=30;
        month-=1;
    }
    month+=(currentMonth-birthdayMonth);
    if(month<0){
        month+=12;
        year-=1;
    }
    year+=(currentYear-birthdayYear)
    document.getElementById('showYears').innerHTML=year;
    document.getElementById('showMonths').innerHTML=month;
    document.getElementById('showDays').innerHTML=day;
}
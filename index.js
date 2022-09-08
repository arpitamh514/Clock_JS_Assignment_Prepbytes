


function clock(){
    let hours=document.getElementById("hours");
    let min=document.getElementById("min");
    let sec=document.getElementById("sec");
    let ampm=document.getElementById("ampm");

    const time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    
    let AmPm = h >= 12 ? 'PM' : 'AM'
    ampm.innerHTML=AmPm

    h = h % 12;
    // h = h=0 ? 12 : h;
    hours.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
 
    
}


setInterval(clock, 1000);
setInterval(greet, 1000);
function greet(){
    let morning=document.getElementById("setTime1").value;
    let noon=document.getElementById("setTime2").value;
    let evening=document.getElementById("setTime3").value;
    let night=document.getElementById("setTime4").value;
    let hrs=new Date().getHours();
    if(morning==hrs){
        document.getElementById("greet").innerHTML="Good Morning!"
        document.getElementById("msg").innerHTML="GRAB SOME HEALTHY BREAKFAST!"
        document.getElementById("breakfast").src="./img/morning.PNG"
    }
    else if(noon==hrs){
        document.getElementById("greet").innerHTML="Good Afternoon!"
        document.getElementById("msg").innerHTML="LET'S HAVE LUNCH!"
        document.getElementById("breakfast").src="./img/lunch.PNG";
    }
    else if(evening==hrs){
        document.getElementById("greet").innerHTML="Good Evening!"
        document.getElementById("msg").innerHTML="STOP YAWNING!..GRAB SOME COFFEE";
        document.getElementById("breakfast").src="./img/evening.PNG";
    }
    else if(night==hrs){
        document.getElementById("greet").innerHTML="Good Night!"
        document.getElementById("msg").innerHTML="IT IS A BED TIME!.. GO TO SLEEP"
        document.getElementById("breakfast").src="./img/night.PNG";
    }
    else{
        document.getElementById("greet").innerHTML="Hello!.."
        document.getElementById("msg").innerHTML="Hey there!.."
        document.getElementById("breakfast").src="./img/Clock.PNG"
    }
    
}

function addElement () {
    var invalue1=document.getElementById("setTime1");
    var value1=invalue1.options[invalue1.selectedIndex].text;

    var invalue2=document.getElementById("setTime2");
    var value2=invalue2.options[invalue2.selectedIndex].text;
    var tag = document.createElement("div");
    tag.id="viewTime"
    var element = document.getElementById("vTime");
    element.appendChild(tag);

    if(value1!=='Default'|| value2!=='Default'|| value2!=='Default' || value2!=='Default'  ){
    var invalue1=document.getElementById("setTime1");
    var value1=invalue1.options[invalue1.selectedIndex].text;

    if(value1!=='Default'){
        var p1=document.createElement("p");
        p1.id="para1";
        var ele1=document.getElementById("viewTime")
        ele1.appendChild(p1);
        document.getElementById("para1").innerHTML="Wake up time " + value1
    // document.getElementById("viewTime").innerHTML="Wake up time " + value1
    }

    var invalue2=document.getElementById("setTime2");
    var value2=invalue2.options[invalue2.selectedIndex].text;
    if(value2!=='Default'){
        var p2=document.createElement("p");
        p2.id="para2";
        var ele2=document.getElementById("viewTime")
        ele2.appendChild(p2);
        document.getElementById("para2").innerHTML="Lunch time " + value2
    }
    var invalue3=document.getElementById("setTime3");
    var value3=invalue3.options[invalue3.selectedIndex].text;
    if(value3!=='Default'){
        var p3=document.createElement("p");
        p3.id="para3";
        var ele3=document.getElementById("viewTime")
        ele3.appendChild(p3);
        document.getElementById("para3").innerHTML="Coffee Time " + value3
    }
    var invalue4=document.getElementById("setTime4");
    var value4=invalue4.options[invalue4.selectedIndex].text;
    if(value4!=='Default'){
        var p4=document.createElement("p");
        p4.id="para4";
        var ele4=document.getElementById("viewTime")
        ele4.appendChild(p4);
        document.getElementById("para4").innerHTML="Bed Time " + value4
    }
    
  }
  else{
    var p=document.createElement("p");
        p.id="para";
        var ele=document.getElementById("viewTime")
        ele.appendChild(p);
    document.getElementById("para").innerHTML="Please Set Time"
  }
}
 
  
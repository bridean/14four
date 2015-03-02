$(document).ready(function() {


    
    $("#div1a, #div2a, #div3a, #div4a, #div5a, #div6a, #div7a, #div8a").mouseenter(function(){
        $(this).css("background-color", "#888");
    });

    $("#div1a, #div2a, #div3a, #div4a, #div5a, #div6a, #div7a, #div8a").mouseleave(function(){
        $(this).css("background-color", "#222");
    });


    
    $("#chooser").change(function() {
    var control = $(this);
        
    if (control.val() == "1") {
     document.getElementById("div1b").innerHTML = p1email;  
     document.getElementById("div2b").innerHTML = p2email; 
     document.getElementById("div3b").innerHTML = p3email;  
     document.getElementById("div4b").innerHTML = p4email; 
     document.getElementById("div5b").innerHTML = p5email;  
     document.getElementById("div6b").innerHTML = p6email; 
     document.getElementById("div7b").innerHTML = p7email;  
     document.getElementById("div8b").innerHTML = p8email; 
    
    } else { 
     document.getElementById("div1b").innerHTML = p1phone;  
     document.getElementById("div2b").innerHTML = p2phone;     
     document.getElementById("div3b").innerHTML = p3phone;  
     document.getElementById("div4b").innerHTML = p4phone;  
     document.getElementById("div5b").innerHTML = p5phone;  
     document.getElementById("div6b").innerHTML = p6phone;     
     document.getElementById("div7b").innerHTML = p7phone;  
     document.getElementById("div8b").innerHTML = p8phone;        
    }
   
     });
    
    });
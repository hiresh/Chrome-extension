//add alerts if yoyu want to
//alert('welcome Hiresh!!');

// change the background if you want to
document.body.style.backgroundImage="url('')";

//this will replace 'india' text beside the google icon
$(".logo-subtext").html("<p>Hiresh -full stack developer</p>");


$("#lga").html("<img src='https://avatars3.githubusercontent.com/u/16016499?v=3&s=460' height='200' width='200' id='mypic'></img>");

$("#mypic").css({"border-radius":'10%'});

$("#prm-pt").html("<h2><center>Hiresh &nbsp; -Software developer</center></h2><br><button type='button' id='clickme'>Toggle the pic!</button>&nbsp;<button type='button' id='quora'>Visit Quora</button>&nbsp;<button id='github'>visit Github profile</button>");


//animate the picture
var toggle=true;
$('#clickme').click(function(){
    toggle=!toggle;
    if(!toggle){
    $('#mypic').animate({
    
        height:"-=200px",
        width:"-=200px"
    });   
    }
    if(toggle){
    $('#mypic').animate({
    
        height:"+=200px",
        width:"+=200px"
    });   
        
    }
        
});
//redirect to quora
$('#quora').click(function(){
    
    window.open('https://www.quora.com');
    
});
//redirect to Github profile
$('#github').click(function(){
                   window.open('https://www.github.com/hiresh');
                   });

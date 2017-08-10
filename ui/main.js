// counter code
var button=document.getElementById('counter');
button.onclick=function(){
    // Make a request to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the varaiable in the correct span
    counter=counter+1;
    var span= document.getElementById('count');
    span.innerHTML=counter.toString();
}



/*console.log('Loaded!');
// change the text of the main-text div
//var element=document.getElementById('main-text');
//element.innerHTML='new value';

//Move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight, 50);
    //img.style.marginLeft='100px';
};*/
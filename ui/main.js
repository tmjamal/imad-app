// counter code
var button=document.getElementById('counter');

button.onclick=function(){
    //create a request object
    
    // Make a request to the counter endpoint
    var request=new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){}
            //Take some action
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
    };
    //make a request
    request.open('GET', 'http://tmjamal.imad.hasura-app.io/counter', true);
    request.send(null);
    
    //Render the varaiable in the correct span
   /* counter=counter+1;
    var span= document.getElementById('count');
    span.innerHTML=counter.toString();*/
};

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=doucment.getElementById('submit_btn');
submit.onclick=function(){
    // Make a request to the server and send the name
    //Capture a list of names and render it as a list
    var names=['name1', 'name2','name3','name4'];
    var list= '';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getEelementById('namelist');
    ul.innerHTML=list;
};

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
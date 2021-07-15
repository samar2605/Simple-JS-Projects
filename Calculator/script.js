(function(){
        let screen=document.getElementById('screen');
        let displayVal="";
                
        var buttons=document.getElementsByTagName('button');
        for(i of buttons){
            i.addEventListener('click',function(e){
              
                var buttonValue=e.target.innerText;
                if(buttonValue=='='){ 
                    screen.value=eval(displayVal);
                    displayVal=screen.value;
                }
                else if(buttonValue=='C')
                {
                    displayVal="";
                    screen.value="";
                }
                else if(buttonValue=='×')
                {
                    buttonValue='*';
                    displayVal+=buttonValue;
                    screen.value+=buttonValue;
                }
                else if(buttonValue=='÷')
                {
                    buttonValue='/';
                    displayVal+=buttonValue;
                    screen.value+=buttonValue;
                }
                else if(buttonValue=="del")
                {  
                    displayVal=displayVal.substr(0,displayVal.length-1);
                    screen.value=displayVal;
                }
                else{
                    displayVal+=buttonValue;
                    screen.value+=buttonValue;
                }
            });
        }
       
})();
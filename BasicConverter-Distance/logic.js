(function(){
    document.getElementById('convert').addEventListener('submit',function(e){
        e.preventDefault();
        var distance=parseFloat(document.getElementById('distance').value);
        //parseFloat() to convert float into a number
        var ans=document.getElementById('answer');
        
        if(distance){
            var km=(distance*1.609).toFixed(3);
            //for fixing value upto 3 decimal places
            ans.innerHTML=`<h2>${distance} miles is equal to ${km} km</h2>`;
            //ans.removeChild(ans.children[0]);                
        }
        else{
        
            ans.innerHTML=`<h2>Provide a valid number</h2>`;
        }

    });
})();
window.onload = function(){
  let intervalID;
    repeatEverySecond()
    function repeatEverySecond() {
      intervalID = setInterval(sendMessage, 1000);
     
    }
    
    function sendMessage() {
      console.log("one second")
      animateDiv('a');
      animateDiv('b');
      animateDiv('c');
      animateDiv('d');

    }
    
  
    
  
    function makeNewPosition(){
        
        var h = window.innerHeight ;
        var w = window.innerWidth ;
        var nh = Math.floor(Math.random() * h);
        if (nh <= h * .4) {
            nh =  h * .4
        }
        var nw = Math.floor(Math.random() * w);
        return [nh,nw];
    }
  
    function animateDiv(myid) {
      var elem = document.getElementById(myid);
      var newq = makeNewPosition();
      elem.style.top =  newq[0] + 'px';
      elem.style.left = newq[1] + 'px';
    }
    

  
  
  
  }
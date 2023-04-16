
 
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    
    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
  
        function moveCharacter(){ 
         
                if(direction === 'west'){
                    x-=1
                }
                if(direction === 'north'){
                    if(y<height*.6){
                    y+=1
                    }
                }
                if(direction === 'east'){
                    x+=1
                }
                if(direction === 'south'){
                    if(y>height*.1){
                    y-=1
                    }
                
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            var finishline = window.innerWidth-100

            let oftenID;
            often()
            function often() {
               oftenID = setInterval(checkLocations, 1000);
            }

            function checkLocations() {
              var bobx = document.getElementById('bob').getBoundingClientRect().left
              var boby = document.getElementById('bob').getBoundingClientRect().bottom 
              var ax = document.getElementById('a').getBoundingClientRect().left
              var ay = document.getElementById('a').getBoundingClientRect().bottom
              var bx = document.getElementById('b').getBoundingClientRect().left
              var by = document.getElementById('b').getBoundingClientRect().bottom
              var cx = document.getElementById('c').getBoundingClientRect().left
              var cy = document.getElementById('c').getBoundingClientRect().bottom
              var dx = document.getElementById('d').getBoundingClientRect().left
              var dy = document.getElementById('d').getBoundingClientRect().bottom
              if ( Math.abs(bobx - ax) <= 30 && Math.abs(boby-ay)<= 30 ||  Math.abs(bobx - bx) <= 30 && Math.abs(boby-by)<= 30 ||  Math.abs(bobx - cx) <= 30 && Math.abs(boby-cy)<= 30 ||  Math.abs(bobx - dx) <= 30 && Math.abs(boby-dy)<= 30){
                //|| Math.abs(x - bx) <= 60 && Math.abs(y-by)<=60 || Math.abs(x - cx) <= 60 && Math.abs(y-cy)<=60 || Math.abs(x - dx) <= 60 && Math.abs(y-dy)<=60
                document.getElementById("main").classList.add("terminate")
                
                x = 100 
                y = 300
                var tryAgain = document.getElementById("tryAgain")
                tryAgain.addEventListener("click", clearGame)
              }
              console.log("x: "+x+",y:"+y+",ax:"+ax+",ay:"+ay)
              
            }
        
            if (x > finishline) {
                
                document.getElementById("main").classList.add("win")
                
                x = 100 
                y = 300
                restart.addEventListener("click", clearGame)
                
            }
        
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
           
                if(e.repeat) return;
        
                if(e.key === 'ArrowLeft'){
                    direction = 'west'
                }
                if(e.key === 'ArrowUp'){
                    direction = 'north'
                }
                if(e.key === 'ArrowRight'){
                    direction = 'east'
                }
                if(e.key === 'ArrowDown'){
                    direction = 'south'
                }
                callback(direction)
            

        })
        
        document.addEventListener('keyup', function(e){
                 
                direction = null
                callback(direction)

        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}


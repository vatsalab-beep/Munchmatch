let selectAge = document.getElementById("SelectAge");
let contents = "<option>" + "Select Age" + "</option>";
document.onload = (function(){
    for(let i = 13; i<=30 ; i++)
      contents +="<option>" + i + "</option>";
  })();

  let form = document.querySelector(".backgroundOfForm");
  selectAge.innerHTML = contents;


  let containers = document.querySelectorAll (".container");

  let hobbies = document.querySelectorAll(".hobbies");

  for ( let x of hobbies){
      x.addEventListener("click", function (){

        x.classList.add("selected");

      });
  }
  let rangeslider = document.getElementById("sliderRange"); 

            let output = document.getElementById("demo"); 
            output.innerHTML = rangeslider.value; 
              
            rangeslider.oninput = function() { 
                output.innerHTML = this.value; 
              }
        


 

  document.getElementById("nextbtn").addEventListener ("click", function (){

containers[0].style.display = "none";
containers[1].classList.remove("hide");
containers[1].classList.add("show");

let nxtbutton = document.createElement("button");
nxtbutton.innerHTML = "next";
nxtbutton.classList.add ("next");
containers[1].appendChild(nxtbutton);

nxtbutton.addEventListener("click", function (){

    containers [1].style.display = "none";
    containers [2].classList.remove("hide");
    containers[2].classList.add("show");
    let nxtbutton = document.createElement("button");
    nxtbutton.innerHTML = "next";
    nxtbutton.classList.add ("next");
    containers[2].appendChild(nxtbutton);

        nxtbutton.addEventListener("click", function (){
            containers [2].style.display = "none";
        containers [3].classList.remove("hide");
        containers[3].classList.add("show");
        let nxtbutton = document.createElement("button");
        nxtbutton.innerHTML = "next";
        nxtbutton.classList.add ("next");
        containers[3].appendChild(nxtbutton);
        nxtbutton.addEventListener("click", function (){

            containers[3].style.display = "none";
            containers[4].classList.remove("hide");
            console.log (containers[4]);
            containers[4].classList.add("show");
            let nxtbutton = document.createElement("button");
            nxtbutton.innerHTML = "next";
            nxtbutton.classList.add ("next");
            containers[4].appendChild(nxtbutton);
            
    
                nxtbutton.addEventListener("click", function (){
                
                    let h12 = document.createElement("h1");
                    h12.innerHTML = "Here's a meme to brighten your day:";
                    let meme = document.createElement("img");
                    meme.src = "meme.png";
        
        
                let h1 = document.createElement("h1");
                h1.innerHTML= "You have a matched with: Alexa";
        
                containers [4].style.display = "none";
                
                let imageofgirl = document.createElement("img");
                imageofgirl.src = "girl.jpg";
        
                let h13 = document.createElement("h1");
                 h13.innerHTML= "You guys should go on a facetime date together";
                form.appendChild(h12);
                form.appendChild(meme);
                form.appendChild(h1);
                form.appendChild(imageofgirl);
                form.appendChild(h13);
               
} )
        
                

            });
    
        });


    });
});


// <button id = "nextbtn" size= "50"> Next</button>


  

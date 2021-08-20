function classToggle() {
  const navs = document.querySelectorAll('.menu')
  
  
}

/*hamburger*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const patterns = {
   phone: /^\d{11}$/g,
   name: /^[a-z\d]{5,12}$/i,
   email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,4})(\.[(a-z)]{2,4})?$/


}
//validation function

const inputs = document.querySelectorAll('input')


function validate(field,regex){
  //console.log(  regex.test(field.value))
if(regex.test(field.value)){
    field.className = "valid"
}
else{
    field.className = "invalid"
}

}
 
inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
       // console.log(e.target.attributes.name.value)
       validate(e.target, patterns[e.target.attributes.name.value])
    });
})


//slider
var slidenum = 0;
                    carousel();
                
                    function carousel(){
                        var i;
                        var x = document.getElementsByClassName("slide");
						
                        for (i = 0; i < x.length; i++) {
							x[i].style.display = "none";
						}
                        slidenum++;
                        if (slidenum > x.length) {slidenum = 1}
                        x[slidenum-1].style.display = "block";
                        setTimeout(carousel, 3000);}
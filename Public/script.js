    let email = document.getElementById("email");
    let yname = document.getElementById("yname");
    let fname = document.getElementById("fname")
    let validRegex =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    
    function validation() {

    if (yname.value.trim()==""){
        document.getElementById("error1").innerHTML="Enter Your Name";
        document.getElementById("error1").style.color="red";
        yname.style.border="2px solid red";
        yname.value="";
        return false;
        
    }
    else if(fname.value.trim()=="") {
        document.getElementById("error2").innerHTML="Enter Your Friend Name";
        document.getElementById("error2").style.color="red";
        fname.style.border="2px solid red";
        fname.value="";
        return false;
    } 
    else if(validRegex.test(email.value)===false){
        document.getElementById("error").innerHTML="Invalid E-mail ID";
        document.getElementById("error").style.color="red";
        email.style.border="2px solid red";
        email.value="";
        return false;
    }
    else{
        return true;
    }
    
}

function revalidate(){
    if((yname.value!="") || (fname.value!="") || (email.value!="")){
        email.style.border = "";
        yname.style.border = "";
        fname.style.border = "";
        document.getElementById("error1").innerHTML="";
        document.getElementById("error2").innerHTML="";
        document.getElementById("error").innerHTML="";
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});



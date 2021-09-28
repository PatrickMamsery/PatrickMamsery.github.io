var state = false;
function myPassword () {
    if (state) {
        document.getElementById("myInput").setAttribute("type", "password");
        state = false;
    }
    else{
        document.getElementById("myInput").setAttribute("type", "text");
        state = true;
    }
}

const inputs = document.querySelectorAll('.input');

function focusFunc (){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}


inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);

});
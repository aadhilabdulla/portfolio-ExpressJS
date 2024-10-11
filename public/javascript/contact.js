function validate(){

    let validation = true;
    if(document.getElementById('name').value == ''){
        document.getElementById('name').placeholder = "This is a required field";
        document.getElementById('name').style.border = 'red solid'
        validation = false;
    }
    if(document.getElementById('email').value == ''){
        document.getElementById('email').placeholder = "This is a required field";
        document.getElementById('email').style.border = 'red solid'
        validation = false;
    }
    if(document.getElementById('textarea').value == ''){
        document.getElementById('textarea').placeholder = "This is a required field";
        document.getElementById('textarea').style.border = 'red solid'
        validation = false;
    }

    if(validation == false){
        return false;
    }

}
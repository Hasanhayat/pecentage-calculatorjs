


function fun1() {
    let chemistryt = document.querySelector("#chemistryt").value;
    let physicst = document.querySelector("#physicst").value;
    let biot = document.querySelector("#biot").value;
    let chemistry = document.querySelector("#chemistry").value;
    let physics = document.querySelector("#physics").value;
    let bio = document.querySelector("#bio").value;
    let result = document.querySelector(".result");
    let total = (Number(physicst)+Number(chemistryt)+Number(biot))
    let add = (Number(chemistry) + Number(physics) + Number(bio));
    let form = (add / total) * 100;

    let grade ;

 
    

    if(form>=90){
            grade = "A1+";
            result.innerHTML = (`Congratulation! your percentage is ${form.toFixed(0)}% <br>  YOUR GRADE IS  ${grade}`);
            
    }
    else if(form>=80){
        grade = "A1";
        result.innerHTML = (`your percentage is ${form.toFixed(2)}% <br>  YOUR GRADE IS  ${grade}`);

    }
    else if(form>=70){
        grade = "A";
        result.innerHTML = (`your percentage is ${form.toFixed(2)}% <br>  YOUR GRADE IS  ${grade}`);

    }
    else if(form>=60){
        grade = "B";
        result.innerHTML = (`your percentage is ${form.toFixed(2)}% <br>  YOUR GRADE IS  ${grade}`);
    }
    else if(form>=33){
        grade = "C";
        result.innerHTML = (`your percentage is ${form.toFixed(2)}% <br>  YOUR GRADE IS  ${grade}`);
    }
    else{
        grade = "FAIL";
        result.innerHTML = (`your percentage is ${form.toFixed(2)}% <br>  You are failed`);
    }
    


}
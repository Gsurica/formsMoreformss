const form = document.querySelector(".form");
const getValues = () => {

    let normalInputs = document.querySelectorAll("[name=normal]");
    normalInputs.forEach(normal => console.log(normal.value))
    
    let radioInputs = document.querySelectorAll("input[name=radio]:checked");
    radioInputs.forEach(radio => console.log(radio.value))

    let checkInputs = document.querySelectorAll("input[name=checkbox]");
    const noChecked = false;
    for(let i = 0; i <= checkInputs.length; i++){
        !checkInputs[i] == noChecked ? console.log(checkInputs[i]) : alert("Deve ser preenchido pelo menos um checkbox");
    }
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getValues();
})
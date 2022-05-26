let sliderValue = document.getElementById("slider-value");
let slider = document.getElementById("slider");
let password = document.getElementById("password");
let hideItens = document.getElementById("hide-itens")

let generation = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ0123456789!@#$";
let newPassword = "";


sliderValue.innerHTML = slider.value;

slider.oninput = function sliderActualValue() {
    
    sliderValue.innerHTML = this.value;

}


function passwordButton() {
    let pass = "";

    for (let i = 0, n = generation.length; i < slider.value; ++i) {
        
        pass += generation.charAt(Math.floor(Math.random() * n ))};

        hideItens.classList.remove("hide-itens2");
        password.innerHTML = pass;
        newPassword = pass;
        

}

function copy() {
    navigator.clipboard.writeText(newPassword);
    window.alert("Sua senha foi copiada!");
}
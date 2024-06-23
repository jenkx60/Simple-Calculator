let calText = document.getElementById('calText');
let btn = Array.from(document.getElementsByClassName('buttons'));

btn.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.value) {
            case "C":
                calText.value = "";
                break;
                case "←":
                    calText.value = calText.value.slice(0, -1);
                    break;
                case "=":
                try{
                    if((calText.value = eval(calText.value))){
                        calText.value;
                        e.target.value = "=";
                    }   
                } catch {
                    calText.value = "Error";
                }
                break;
                case "%":
                    calText.value = calText.value / 100;
                    break;
                
            default:
                calText.value += e.target.value;
        }        
    });
});
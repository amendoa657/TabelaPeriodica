const elementosTabela = document.getElementsByClassName("linha");
const elementosLegenda = document.getElementsByClassName("elementoLegenda");

Array.from(elementosTabela).forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
        document.getElementById('info').style.opacity = '1';
        document.getElementById('info').innerHTML = elemento.innerHTML;
        document.getElementById('info').style.backgroundColor = getComputedStyle(elemento).backgroundColor;
        elemento.style.scale = '1.1';
    });

    elemento.addEventListener('mouseout', () => {
        document.getElementById('info').style.opacity = '0'; 
        elemento.style.scale = '1';
        });

});

Array.from(elementosLegenda).forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
        switch(elemento.id) {
            case "metal":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("ma") && !elemento.classList.contains("mat") && !elemento.classList.contains("mt") && !elemento.classList.contains("mpt") && !elemento.classList.contains("la") && !elemento.classList.contains("ac")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "naoMetal":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("nmp") && !elemento.classList.contains("gs") && !elemento.classList.contains("nmd")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "metalAlcalino":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("ma")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "metalAlcalinoter":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("mat")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "actinideo":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("ac")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "lantanideo":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("la")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "metalTransicao":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("mt")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "metalPosTransicao":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("mpt")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "semiMetal":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("sm")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "naoMetais":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("nmp")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "halogenio":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("nmd")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;
            case "gasNobre":
                Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                    if(!elemento.classList.contains("gs")){
                        elemento.style.backgroundColor= "gray";
                    };
                })
                break;




        }
    });

    elemento.addEventListener('mouseout', () => {
            Array.from(document.getElementsByClassName("linha")).forEach(elemento => {
                elemento.style.backgroundColor=""
            })
    })
});



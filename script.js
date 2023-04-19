document.querySelector("button").onclick = function (event){
    setTimeout(() => {
        document.querySelector("#script").innerText = "Komentář se nepodařilo odeslat. Zkuste to za pár minut znovu.";
    }, 1000);
    setTimeout(() => {
    window.location.reload() 
    }, 7000);
}



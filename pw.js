document.getElementById("password_2").onchange = ()=>{

    let c1 = document.getElementById("password_1").value;
    let c2 = document.getElementById("password_2").value;
    
    if(c2 != c1){
        document.getElementById("texto").innerHTML=" ";
        document.getElementById("texto").innerHTML="Vuelve a intentarlo";
    }else{
        document.getElementById("texto").innerHTML=" ";
    }
}

document.getElementById("parrafo").onmouseover= ()=>{
    document.getElementById("parrafo").innerHTML = "Esta es la modificación correspondiente que ocurre al mover el raton sobre el texto"
}


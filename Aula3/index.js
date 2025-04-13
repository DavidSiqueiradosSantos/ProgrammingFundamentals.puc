function Integrador(limiteSuperior){
    for(let i=0; i < limiteSuperior;i++){
        if(i%2==1)
        console.log(i + ' é um número impar');
    else
       console.log(i + ' é um número par');
    }
}
Integrador(10);
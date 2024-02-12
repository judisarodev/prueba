(()=> {
    let contador = 0;
    setInterval(() => {
        console.log('app runing ' + contador);
        contador++; 
    }, 3000);
})();
var novoMapa = new Map();

novoMapa.set('11/11/11/2022 - 23:30', {title: 'Titulo do Filme', url: 'Sozinho'});
novoMapa.set('11/11/11/2022 - 23:31', {});
novoMapa.set('11/11/11/2022 - 23:32', {});


var resultado = novoMapa.get('11/11/11/2022 - 23:30')
console.log(resultado);
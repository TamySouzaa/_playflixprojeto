var listaFilmes = ['https://poltronanerd.com.br/wp-content/uploads/2021/11/bel-air-b.jpg',
                   'https://media.architecturaldigest.com/photos/6126b946592aaaba8f773f30/16:9/w_2560%2Cc_limit/OMS1_102_CB-1636RT.jpg',
                   'https://blogs.uai.com.br/opipoqueiro/wp-content/uploads/sites/54/2022/06/This-Is-Us-01.jpg',
                   'https://i.ytimg.com/vi/hX3o0kKJeZk/maxresdefault.jpg',
         'https://ufla.br/images/noticias/2019/07_jul/Estrelas_alem_do_Tempo.jpg'];

var listaNomesFilmes =[
  'Bel-Air','Only Murders in the Building','This Is Us','Judas e o Messias Negro','Estrelas Além do tempo'
];

var i = 0;

while( i < listaFilmes.length && i < listaNomesFilmes.length){
  if (listaFilmes[i].toLowerCase().endsWith('.jpg')) {
  document.write('<img src=' + listaFilmes[i] + '>');
  document.write('<h2>' + listaNomesFilmes [i] + '<h2/>');
    i++;
}
}
;!function () {
  $('[data-toggle="popover"]').popover();
  var pops =   $(".mapa-svg").popover({
    'container': 'body',
    'placement': 'top',
    'trigger': 'click hover',
    'html': true,
    'delay' : {
      "show" : 300,
      "hide" : 200
    }
  }); 
  pops.on('click',function(){
    pops.not(this).popover('hide');
  }).on('mouseover',function(){
    pops.not(this).popover('hide');
  })

  $('[data-original-title="Maranhão"]').attr('data-content','<img src="../img/flags/MA_p.gif"/><br><strong>Escolas Participantes:</strong> 485<br><strong>Coordenadores:</strong> Cláudia Ribeiro e Telma Regina Oliveira Peres<br><strong>E-mail:</strong> regina@gov.br, telma@gov.br<br><strong>Secretaria de Educação do Estado de Minas Gerais</strong><br>Rod. Prefeito Américo Gianetti, S/N - Ed. Minas, 11º Andar<br><span>Lado par / Superintendência de Ensino Médio - SEM<br></span><span>Cidade Administrativa Presidente Tancredo Neves<br></span><span>Bairro Serra Verde<br></span><span>Belo Horizonte – MG<br></span><span>CEP: 31.630-901</span></span>');



  $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
      $('.pgwSlideshow').pgwSlideshow();
      $('.nano').nanoScroller();
  });

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);


}()
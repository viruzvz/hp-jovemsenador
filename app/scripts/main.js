;!function () {

  $('[data-toggle="tooltip"]').tooltip();

  var pops =   $(".mapa-svg").popover({
    'container': 'body',
    'placement': 'top',
    'trigger': 'click hover',
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

}()

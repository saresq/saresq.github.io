  $(document).ready(function() {
      $('.scrollspy').scrollSpy();

      $('#btnOcultarInfo').click(function() {
          $('#btnMostrarInfo').show();
          $('#btnOcultarInfo').hide();
          $('#listaInfoPropia').addClass("invi");
      });

      $('#btnMostrarInfo').click(function() {
        $('#listaInfoPropia').removeClass("invi");
        Materialize.showStaggeredList('#listaInfoPropia');
          $('#btnMostrarInfo').hide();
          $('#btnOcultarInfo').show();

      });


  });

  jQuery(function($) {
      $('.pie_progress').asPieProgress({
          namespace: 'pie_progress'
      });
      // Example with grater loading time - loads longer
      $('.pie_progress--slow').asPieProgress({
          namespace: 'pie_progress',
          goal: 1000,
          min: 0,
          max: 1000,
          speed: 300,
          easing: 'linear'
      });

  });

  var options = [{
          selector: '#shooter',
          offset: 50,
          callback: function(el) {
              //                  Materialize.toast("Se empezo la carga de pieProg </br>(ACORDATE DE BORRAR ESTO)", 1500);
              //                  Materialize.toast("Hace la prueba del nuevo plugin Circular jQuery", 5000);
              $('.pie_progress').asPieProgress('start');
          }
      },

  ];
  Materialize.scrollFire(options);

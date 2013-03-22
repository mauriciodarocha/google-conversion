(function () {
  /* altere somente as linhas abaixo */
  
  var google_id = 00000; // valor deve ser número
  var google_label = "cole aqui o código"; // valor deve ser string

  /* altere somente as linhas acima */

  var options_home = {
    id: google_id,
    label: google_label,
    params: {
      PageType: "Home"
    }
  }

  jQuery.vtex_gc(options_home);
})();
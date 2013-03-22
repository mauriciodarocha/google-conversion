(function () {
  /* altere somente as linhas abaixo */
  
  var google_id = 00000; // valor deve ser número
  var google_label = "cole aqui o código"; // valor deve ser string

  /* altere somente as linhas acima */

  var cat = jQuery(".bread-crumb li:last").text();

  var options = {
    id: google_id,
    label: google_label,
    params: {
      PCat: cat,
      PageType: "Departamento"
    }
  }

  jQuery.vtex_gc(options);
  
})();
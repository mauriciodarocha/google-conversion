(function () {

  /* altere somente as linhas abaixo */
  
  var google_id = 00000; // valor deve ser número
  var google_label = "cole aqui o código"; // valor deve ser string

  /* altere somente as linhas acima */

  var cat = jQuery(".bread-crumb li:last").text();
  var pname = jQuery(".productName:first").text();
  var price = jQuery(".valor-por:first strong").text().replace(/^R\$\s*([\S\s]*?)\s*$/, '$1').replace(/,/g,".");
  var prod = jQuery("#calculoFrete").attr("produtocorrente");
  var sku = jQuery("#calculoFrete").attr("skucorrente");

  var options = {
    id: google_id,
    label: google_label,
    params: {
      PCat: cat,
      PName: pname,
      PValue: price,
      PageType: "Produto",
      ProdId: prod
    }
  }

  jQuery.vtex_gc(options);
})();
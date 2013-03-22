(function () {
  /* altere somente as linhas abaixo */
  
  var google_id = 00000; // valor deve ser número
  var google_label = "cole aqui o código"; // valor deve ser string

  /* altere somente as linhas acima */

  var cats = [];
  jQuery(".bread-crumb li").each(function(ndx,item){
    if(ndx!=0)
      cats.push(jQuery(item).text());
  });

  var options = {
    id: google_id,
    label: google_label,
    params: {
      PCat: cats,
      PageType: "Categoria"
    }
  }

  jQuery.vtex_gc(options);

})();
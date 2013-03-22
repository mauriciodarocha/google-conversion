(function () {

  /* altere somente as linhas abaixo */

  var google_id = 00000; // valor deve ser número
  var google_label = "cole aqui o código"; // valor deve ser string

  /* altere somente as linhas acima */

  var gc_checkout = {
    skus: [],
    ids:[],
    init: function () 
    {
      gc_checkout.load.vtex_gc();
    },
    load:
    {
      vtex_gc: function () 
      {
        if(typeof jQuery.vtex_gc === "undefined")
          jQuery.getScript("/arquivos/vtex_gc.js",function () 
          {
            if(gc_checkout.set.skus())
              gc_checkout.get.ids();
          });
        else
          if(gc_checkout.set.skus())
            gc_checkout.get.ids();
      }
    },
    set:
    {
      skus: function () 
      {
        jQuery(".quantidade input").each(function(ndx,item){ 
          gc_checkout.skus.push(jQuery(item).attr("title"));
        });

        return true;
      },
      params: function () 
      {
        var names=[],price="",prices=[];
        jQuery("tr h4 a").each(function(ndx,item){ 
          names.push(jQuery(item).text());
        });

        jQuery("tr .preco-unitario span:not(:has('s'))").each(function(ndx,item){
          price = jQuery(item).text();
          if(price!=="")
          {
            price = price.replace(/R\$\s/g,"").replace(/,/g,".");
            prices.push(price);
          }
        });

        var options = {
          id: google_id,
          label: google_label,
          params: {
            PName: names,
            PValue: prices,
            PageType: "Carrinho",
            ProdId: gc_checkout.ids
          }
        }

        jQuery.vtex_gc(options);
      }
    },
    get:
    {
      ids: function () 
      {
        jQuery.each(gc_checkout.skus,function (ndx,sku) 
        {
          gc_checkout.get.id(sku);
        });
      },
      id: function (sku)
      {
        var opt = {
            url: "/produto/sku/"+sku,
            success: function (data) 
            {
              gc_checkout.ids.push(""+data[0].Id);
              if(gc_checkout.ids.length===gc_checkout.skus.length)
                gc_checkout.set.params();
            }
          };
          
        jQuery.ajax(opt);
      }
    }
  };

  gc_checkout.init();

})();
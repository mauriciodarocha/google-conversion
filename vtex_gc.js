/*
  Usage:
    var options = {
      id: 12345678, // google_conversion_id
      label: "oyfug9a8sdf97qwer", // google_conversion_label
      params: {
        PCat: "Electronicos", // Product's category
        PName: "Camera", // Product's name
        PValue: "123.99", // Product's value (price)
        PageType: "Produto", // Page name. Ex.: Home, Visit, Product, Cart, Purchase
        ProdId: "98876" // Product's id
      },
      remarketing_only: true // Optional. Default is true.
    }

    jQuery.vtex_gc(options);

*/
;(function(window,document,undefined){

  jQuery.vtex_gc = function(options){

    var vtex_gc_options = jQuery.extend({
      id: null,
      label: null,
      params: null,
      remarketing_only: true
    }, options);

    var vtex_gcp = {
      init: function () 
      {

        if(!vtex_gcp.check.data()) 
          return false;

        if(vtex_gcp.set.tags())
          vtex_gcp.load.gc();

        return true;
      },
      set:
      {
        tags: function () 
        {
          window.google_conversion_id = vtex_gc_options.id;
          window.google_conversion_label = vtex_gc_options.label;
          window.google_custom_params = vtex_gc_options.params;
          window.google_remarketing_only = vtex_gc_options.remarketing_only;

          vtex_gcp.log("Google Conversion:\n==================")
          vtex_gcp.log("=> google_conversion_id:"+google_conversion_id)
          vtex_gcp.log("=> google_conversion_label:'"+google_conversion_label+"'");
          vtex_gcp.log("=> google_custom_params:");
          vtex_gcp.log(google_custom_params);
          vtex_gcp.log("=> google_remarketing_only:"+google_remarketing_only);

          return true;
        }
      },
      load:
      {
        gc: function () 
        {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "//www.googleadservices.com/pagead/conversion.js";
          jQuery("body")[0].appendChild(script);

          return true;
        }
      },
      check:
      {
        data: function () 
        {
          var valid = true;

          if(vtex_gc_options.id===null) 
            valid = false;

          if(vtex_gc_options.label===null||vtex_gc_options.label==="")
            valid = false;

          if(vtex_gc_options.params===null||typeof vtex_gc_options.params!=="object")
            valid = false;

          return valid;
        }
      },
      log: function (msg) 
      {
        if(typeof console==="undefined") return false;

        console.info(msg);
      }
    }

    return vtex_gcp.init();
  }

})(window,document)
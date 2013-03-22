google-conversion
=================

Instalação fácil do google-conversion em lojas Vtex

###Preparação para instalação

Abra os arquivos que iniciam com `gc_` e altere em cada um sua `google_id` e `google_label`.

Exemplo do arquivo gc_home.js:

```javascript
(function () {
  /* altere somente as linhas abaixo */
  
  var google_id = 12346546; // valor deve ser número
  var google_label = "1234ionfodij-jkd"; // valor deve ser string

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
```

###Faça o upload 

Depois das alterações, suba todos os arquivos para sua loja Vtex no admin.


###Insira a chamada dos scripts

Cada página tem seu próprio script, pois o PageType e outros parâmetros são diferentes. Instale no final de cada template.

Home:
```html
<script type="text/javascript" src="/arquivos/vtex_gc.js"></script>
<script type="text/javascript" src="/arquivos/gc_home.js"></script>
```

Produto (detalhe do produto):
```html
<script type="text/javascript" src="/arquivos/vtex_gc.js"></script>
<script type="text/javascript" src="/arquivos/gc_product.js"></script>
```

Departamento:
```html
<script type="text/javascript" src="/arquivos/vtex_gc.js"></script>
<script type="text/javascript" src="/arquivos/gc_department.js"></script>
```

Categoria:
```html
<script type="text/javascript" src="/arquivos/vtex_gc.js"></script>
<script type="text/javascript" src="/arquivos/gc_category.js"></script>
```

*Checkout (carrinho), veja seção "Instalação em páginas de sistemas".*

###Instalação em páginas de sistemas

Para instalar em uma página de sistema copie o código abaixo no final de seu arquivo user.js (script padrão).

***Atenção:*** Não se esqueça de alterar o `google_id` e o `google_label` antes de subir o seu arquivo user.js.

```javascript
var gc_sys = function () {

  /* altere somente as linhas abaixo */
  
  var google_id = 00000; // valor deve ser número
  var google_label = "cole aqui o código"; // valor deve ser string

  /* altere somente as linhas acima */

  var opt = {
    id: google_id,
    label: google_label
  };
  var set_opt = function (options) {
    jQuery.getScript("/arquivos/vtex_gc.js",function () {
        jQuery.vtex_gc(options);
    });
  };
  if(jQuery("body").hasClass("carrinho")) {
    jQuery.getScript("/arquivos/gc_checkout.js",function () {
        gc_checkout.init();        
    });
  } else if(jQuery("body").hasClass("login")) {
    opt.params = {
        PageType: "Login"
    }
    set_opt(opt);
  } else if(jQuery("body").hasClass("endereco-compra")) {
    opt.params = {
        PageType: "Endereço compra"
    }
    set_opt(opt);
  } else if(jQuery("body").hasClass("forma-pagamento")) {
    opt.params = {
        PageType: "Forma de pagamento"
    }
    set_opt(opt);
  } else if(jQuery("body").hasClass("finaliza-compra")) {
    opt.params = {
        PageType: "Finaliza compra"
    }
    set_opt(opt);
  }
}
jQuery(gc_sys);
```

**Se houver algum problema me avise para eu fazer os ajustes necessários.**

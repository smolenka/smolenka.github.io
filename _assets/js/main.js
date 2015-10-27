// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
// $(document).foundation('topbar', 'reflow');
// facebook stuff
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=622283607895138&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var products = {};
var lStorKey = 'smolenka-basket';
var basket = localStorage.getItem(lStorKey);
if(! basket) {
  basket = {price: 0, items: {}};
} else {
  try {
    basket = JSON.parse(basket);
  } catch(e) {
    localStorage.removeItem(lStorKey);
    basket = {price: 0, items: {}};
  }
}

function resetBasket() {
  localStorage.removeItem(lStorKey);
  for(p in products) {
    basket[p] = 0
  }
  basket.price = 0;
  $('#price').html(basket.price);
}

function add2Basket(prod) {
  basket.price += products[prod].price;
  basket.items[prod] += 1;
  localStorage.setItem(lStorKey, JSON.stringify(basket));
  $('#price').html(basket.price);
}

function remBasket(prod) {
  if(basket.items[prod] > 0) {
    basket.price -= products[prod].price;
    basket.items[prod] -= 1;
    localStorage.setItem(lStorKey, JSON.stringify(basket));
    $('#price').html(basket.price);
  }
}

function order() {
  if(basket.price === 0) {
    return
  }
  var u = {
    name: $('#name').val(),
    address: $('#address').val(),
    town: $('#town').val(),
    zipcode: $('#zipcode').val(),
    phone: $('#phone').val(),
    email: $('#email').val(),
    payment: $('#payment').val()
  };
  localStorage.setItem("smolenka-user", JSON.stringify(u));

  var order = {};
  for(var p in basket.items) {
    if(basket.items[p] > 0) {
      order[p] = basket.items[p];
    }
  }
  $.ajax({
    type: 'POST',
    url: 'https://smolenka-mail.herokuapp.com/',
    // data to be added to query string:
    data: JSON.stringify({user: u, order: order}),
    contentType: 'application/json',
    timeout: 3000,
    success: function(data){
      alert('Objednávka odeslána');
      resetBasket();
    },
    error: function(xhr, type){
      alert('Chyba: ' + type + ' :( Zkuste to prosím za chvilku znovu.');
    }
  });
}

function initObj(objEl, data) {
  var e;
  for(var i=0; i<data.length; i++) {
    products[data[i].name] = data[i];
    if(localStorage.getItem(lStorKey) == null) {
      basket.items[data[i].name] = 0;
    }

    e = '<tr><td>' +
      data[i].name + ' ' + data[i].price +
      'Kč </td><td><button class="button tiny" onClick="add2Basket(\'' +
      data[i].name +
      '\')"><i class="fa fa-cart-plus"></i></button></td><td>' +
      '<button class="button tiny" onClick="remBasket(\'' +
      data[i].name +
      '\')"><i class="fa fa-minus"></i></button></td></tr>';
    objEl.append(e);
  }
}

// execute callback when the page is ready:
Zepto(function($) {
  $.getJSON('/static/produkty.json', function(data) {
    initObj($('#obj0'), data[0]);
    initObj($('#obj1'), data[1]);
    if(localStorage.getItem(lStorKey) == null) {
      localStorage.setItem(lStorKey, JSON.stringify(basket));
    }
    $('#price').html(basket.price);
  })

  if(localStorage.getItem("smolenka-user")) {
    try {
      var u = JSON.parse(localStorage.getItem("smolenka-user"));
      $('#name').val(u.name || '');
      $('#phone').val(u.phone || '');
      $('#address').val(u.address || '');
      $('#town').val(u.town || '');
      $('#zipcode').val(u.zipcode || '');
      $('#email').val(u.email || '');
      $('#payment').val(u.payment || 'prevod');
    } catch(e) {
    }
  }

})

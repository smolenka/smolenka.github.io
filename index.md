---
layout: default
title: Smolenka
description: Tradiční mast i krém vyrobeny z přírodních surovin bez přidaných konzervačních látek, barviv a parfemace, podle originální rodinné receptury z 19. století. Příznivé účinky této masti ověřeny generacemi.
keywords: mast, smůla, smolná, léčivá, zánět, vyléčit
section: blog
---

<div class="hero">
  <div class="row">
    <div class="small-7 columns herocontainer">
      {% capture myInclude %}{% include index/info.md %}{% endcapture %}
      {{ myInclude | markdownify }}
    </div>
  </div>
</div>

<div class="row">
  <div class="small-12 columns">
    <section class="pribeh">
      <a name="pribeh"></a>
      {% capture myInclude %}{% include index/pribeh.md %}{% endcapture %}
      {{ myInclude | markdownify }}
    </section>
  </div>
</div>

<hr/>
<div class="row">
  <div class="small-12 columns">
    <h2>Naše produkty</h2>
    <a name="produkty"></a>

  </div>
</div>
<div class="row">
  <div class="medium-6 small-12 columns produkt">
      {% capture myInclude %}{% include index/mast.md %}{% endcapture %}
      {{ myInclude | markdownify }}
  </div>

  <div class="medium-6 small-12 columns produkt">
      {% capture myInclude %}{% include index/krem.md %}{% endcapture %}
      {{ myInclude | markdownify }}
  </div>
</div>

<div class="row">
  <div class="medium-6 small-12 columns produkt">
      <table id="obj0"></table>
  </div>

  <div class="medium-6 small-12 columns produkt">
      <table id="obj1"></table>
  </div>
</div>

<div class="row">
  <div class="small-12 columns produkt">
    Celková cena <b id="price"></b> Kč
  </div>
</div>

<div id="modalContent">

  <div class="row">
    <div class="small-12 columns">
      <table id="orderList"></table>
    </div>
  </div>

  <form id="frm">

    <div class="row">
      <div class="small-8 columns">
        <label>Jméno
          <input id="name" type="text" />
        </label>
      </div>
      <div class="small-4 columns">
        <label>Telefon
          <input id="phone" type="text" />
        </label>
      </div>
    </div>

    <div class="row">
      <div class="small-12 columns">
        <label>Ulice a číslo popisné
          <input id="address" type="text" />
        </label>
      </div>
    </div>

    <div class="row">
      <div class="small-8 columns">
        <label>Město
          <input id="town" type="text" />
        </label>
      </div>

      <div class="small-4 columns">
        <label>PSČ
          <input id="zipcode" type="text" />
        </label>
      </div>
    </div>

  </form>

  <div class="row">
    <div class="small-12 columns">
      <button class="button tiny" onClick="order();">
        Objednat <i class="fa fa-shopping-cart"></i>
      </button>
    </div>
  </div>

</div>

<div class="row">
  <div class="small-12 columns">
    <section class="zkusenosti">
      {% capture myInclude %}{% include index/reference.md %}{% endcapture %}
      {{ myInclude | markdownify }}
    </section>
  </div>
</div>

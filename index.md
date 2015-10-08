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

    <p>
    Objednat můžete prozatím telefonicky nebo e-mailem.
    E-shop se připravuje.
    </p>
  </div>
</div>
<div class="row">
  <div class="medium-6 small-12 columns">
      {% capture myInclude %}{% include index/mast.md %}{% endcapture %}
      {{ myInclude | markdownify }}
  </div>

  <div class="medium-6 small-12 columns">
      {% capture myInclude %}{% include index/krem.md %}{% endcapture %}
      {{ myInclude | markdownify }}
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

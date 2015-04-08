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
    <section class="produkty">
      <a name="produkty"></a>
      {% capture myInclude %}{% include index/produkty.md %}{% endcapture %}
      {{ myInclude | markdownify }}
    </section>
  </div>
</div>

import{_ as n,p as s,q as a,a1 as e}from"./framework-e03faf0e.js";const t={},p=e(`<p>优点：占用的内存是固定的，只需要占用12KB内存！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> PFadd mykey a b c d e f g h i j
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> PFCOUNT mykey
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">10</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> PFadd mykey2 i j z x c <span class="token function">v</span> b n m
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> PFCOUNT mykey2
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">9</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> PFMERGE mykey3 mykey mykey2
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> PFCOUNT mykey3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有0.81%的错误率！ 统计UV任务，可以忽略不计！</p><p>如果允许容错，那么一定可以使用Hyperloglog</p>`,4),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","Hyperloglog.html.vue"]]);export{u as default};

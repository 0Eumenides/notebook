import{_ as n,p as s,q as a,a1 as e}from"./framework-e03faf0e.js";const t={},i=e(`<h1 id="moco" tabindex="-1"><a class="header-anchor" href="#moco" aria-hidden="true">#</a> MoCo</h1><p>Time: March 28, 2023 3:40 PM</p><ul><li><code>models.*__dict__*[args.arch],</code></li><li><code>encoder_q.fc</code> 的含义</li><li>*<code>self*.register_buffer</code></li><li><code>nn.functional.normalize</code></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># compute logits</span>
<span class="token comment"># Einstein sum is more intuitive</span>
<span class="token comment"># positive logits: Nx1</span>
l_pos = torch.einsum(&quot;nc<span class="token punctuation">,</span>nc<span class="token punctuation">-</span><span class="token punctuation">&gt;</span>n&quot;<span class="token punctuation">,</span> <span class="token punctuation">[</span>q<span class="token punctuation">,</span> k<span class="token punctuation">]</span>).unsqueeze(<span class="token punctuation">-</span>1)
<span class="token comment"># negative logits: NxK</span>
l_neg = torch.einsum(&quot;nc<span class="token punctuation">,</span>ck<span class="token punctuation">-</span><span class="token punctuation">&gt;</span>nk&quot;<span class="token punctuation">,</span> <span class="token punctuation">[</span>q<span class="token punctuation">,</span> self.queue.clone().detach()<span class="token punctuation">]</span>)

<span class="token comment"># logits: Nx(1+K)</span>
logits = torch.cat(<span class="token punctuation">[</span>l_pos<span class="token punctuation">,</span> l_neg<span class="token punctuation">]</span><span class="token punctuation">,</span> dim=1)

<span class="token comment"># apply temperature</span>
logits /= self.T

<span class="token comment"># labels: positive key indicators</span>
labels = torch.zeros(logits.shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype=torch.long).cuda()

<span class="token comment"># dequeue and enqueue</span>
self._dequeue_and_enqueue(k)

return logits<span class="token punctuation">,</span> labels
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[i];function o(l,p){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","MoCo.html.vue"]]);export{d as default};

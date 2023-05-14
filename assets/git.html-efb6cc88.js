import{_ as n,p as s,q as e,a1 as a}from"./framework-e03faf0e.js";const i={},t=a(`<h1 id="两个账户" tabindex="-1"><a class="header-anchor" href="#两个账户" aria-hidden="true">#</a> 两个账户</h1><h2 id="创建一个新key" tabindex="-1"><a class="header-anchor" href="#创建一个新key" aria-hidden="true">#</a> 创建一个新key</h2><p>一个ssh keys是不能用于两个github账户的，因此需要<strong>重新生成</strong>一个：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;dtenghao@gmail.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输入key的名称，然后一路回车</p><hr><p><strong>配置 .ssh/config</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 第一个账号
Host github.com
    HostName github.com
    IdentityFile ~/.ssh/id_rsa
    User git

# 第二个账号
# host是一个代称，需要记住
Host dtenghao.github.com
    HostName github.com
    # 填入重新生成的key的名称
    IdentityFile ~/.ssh/id_rsa_github_account2
    User git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="推送" tabindex="-1"><a class="header-anchor" href="#推送" aria-hidden="true">#</a> 推送</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Initial commit&quot;</span>

<span class="token comment"># yyy填入host代称（dtenghao.github.com）</span>
<span class="token comment"># xxx填入用户名，ccc填入仓库名</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@yyy:xxx/ccc.git

<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master:main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[t];function d(c,r){return s(),e("div",null,l)}const u=n(i,[["render",d],["__file","git.html.vue"]]);export{u as default};

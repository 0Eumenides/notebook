import{_ as n,p as s,q as a,a1 as t}from"./framework-e03faf0e.js";const e={},p=t(`<p>JDBC：Java database controller</p><p>依赖：</p><ul><li>java.sql</li><li>javax.sql</li><li>mysql-conneter-java... 连接驱动（必须）</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//配置信息</span>
<span class="token comment">//useUnicode=true&amp;characterEncoding=utf-8解决中文乱码</span>
<span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql://localhost:3308/light?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=UTC&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;admin888&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//1.加载驱动</span>
<span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2.连接数据库，代表数据库</span>
<span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//3.向数据库发送SQL的对象Statement，PreparedStatement：CRUD</span>
<span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//4.编写SQL</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from test&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//5.执行SQL，返回一个ResultSet：结果集</span>
<span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id=&quot;</span><span class="token operator">+</span>rs<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name=&quot;</span><span class="token operator">+</span>rs<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//6.关闭连接，释放资源（一定要做） 先开后关</span>
rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
statement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==注意:==</p><p>增删改不使用<code>executeQuery</code>都是使用<code>executeUpdate</code></p><p>==通知数据库开启事务==</p><p>默认是未开启事务的，如果我们需要使用到事务，则需要在代码中添加一行代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","JDBC.html.vue"]]);export{r as default};
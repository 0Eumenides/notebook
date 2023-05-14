import{_ as n,p as a,q as s,a1 as e}from"./framework-e03faf0e.js";const i={},t=e(`<h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Download H36M annotations</span>
<span class="token function">mkdir</span> data
<span class="token builtin class-name">cd</span> data
<span class="token function">wget</span> http://visiondata.cis.upenn.edu/volumetric/h36m/h36m_annot.tar
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> h36m_annot.tar
<span class="token function">rm</span> h36m_annot.tar

<span class="token comment"># Download H36M images</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> h36m/images
<span class="token builtin class-name">cd</span> h36m/images
<span class="token function">wget</span> http://visiondata.cis.upenn.edu/volumetric/h36m/S1.tar
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> S1.tar
<span class="token function">rm</span> S1.tar
<span class="token function">wget</span> http://visiondata.cis.upenn.edu/volumetric/h36m/S5.tar
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> S5.tar
<span class="token function">rm</span> S5.tar
<span class="token function">wget</span> http://visiondata.cis.upenn.edu/volumetric/h36m/S6.tar
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> S6.tar
<span class="token function">rm</span> S6.tar
<span class="token function">wget</span> http://visiondata.cis.upenn.edu/volumetric/h36m/S7.tar
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> S7.tar
<span class="token function">rm</span> S7.tar
<span class="token function">wget</span> http://visiondata.cis.upenn.edu/volumetric/h36m/S8.tar
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> S8.tar
<span class="token function">rm</span> S8.tar
<span class="token function">wget</span> http://visiondata.cis.upenn.edu/volumetric/h36m/S9.tar
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> S9.tar
<span class="token function">rm</span> S9.tar
<span class="token function">wget</span> http://visiondata.cis.upenn.edu/volumetric/h36m/S11.tar
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> S11.tar
<span class="token function">rm</span> S11.tar
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/<span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1><ul><li><strong>360</strong> 万张 <strong>3 D</strong> 人体姿势和对应图像（视频帧）</li><li>11 名专业演员（6 男 5 女）</li><li><strong>17</strong> 个场景（讨论、吸烟、拍照以及打电话等等）</li><li>来自 4 个标定的高分辨率 50 HZ 相机拍摄的视频</li><li>包含 <strong>32</strong> 个关节，但在测试过程中，减少了关节的数量，只保留了每只手和每只脚的一个关节</li><li>数据还提供了二维关节位置，因为某些方法可能需要这些数据</li></ul><h1 id="评价指标" tabindex="-1"><a class="header-anchor" href="#评价指标" aria-hidden="true">#</a> 评价指标</h1><p>提供了一个预留的测试集，用于评估不同方法在 3 D 人体位姿估计任务上的性能。它使用了两种常见的评价指标：</p><ol><li>平均关节误差（Mean Per Joint Position Error，MPJPE），指预测的关节位置与真实关节位置之间的欧氏距离的平均值</li><li>骨架误差（Procrustes Aligned MPJPE，PA-MPJPE），指在对齐两个骨架后计算的 MPJPE</li></ol>`,7),l=[t];function c(r,o){return a(),s("div",null,l)}const d=n(i,[["render",c],["__file","Human3.6M.html.vue"]]);export{d as default};

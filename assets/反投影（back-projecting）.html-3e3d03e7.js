import{_ as e,p as n,q as i,a1 as c}from"./framework-e03faf0e.js";const d={},a=c(`<p>在计算机视觉中，投影（projecting）是指将3D 空间中的点转换到2D 图像空间的过程，这通常是通过相机模型来实现的。反投影则是反过来，从2D 图像空间转换到3D 空间。 在这里，他们首先得到了2D路径和人体中心的深度值。然后，他们使用已知的相机内参K，通过反投影将这些2D路径转换到3D相机坐标系中，得到了3D路径。 这个过程的计算方式一般如下： 假设2D图像坐标为(u, v)，深度值为d，相机内参矩阵K为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>K = | fx 0  cx |
    | 0  fy cy |
    | 0  0  1  |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，(cx, cy)是图像中心，fx 和 fy 是焦距。那么，对应的3D 坐标 (X, Y, Z) 可以通过以下公式计算：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>X = (u - cx) * d / fx
Y = (v - cy) * d / fy
Z = d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),s=[a];function t(l,r){return n(),i("div",null,s)}const v=e(d,[["render",t],["__file","反投影（back-projecting）.html.vue"]]);export{v as default};

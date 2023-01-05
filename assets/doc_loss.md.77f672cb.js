import{_ as s,o as l,c as e,a as i}from"./app.ad1a3dff.js";const m=JSON.parse('{"title":"Loss","description":"loss","frontmatter":{"title":"Loss","description":"loss","date":"2022-09-30T00:00:00.000Z","tags":["何健飞","ALL"]},"headers":[{"level":2,"title":"distribution-based","slug":"distribution-based","link":"#distribution-based","children":[{"level":3,"title":"binary-cross-entropy","slug":"binary-cross-entropy","link":"#binary-cross-entropy","children":[]},{"level":3,"title":"multi-cross-entropy","slug":"multi-cross-entropy","link":"#multi-cross-entropy","children":[]},{"level":3,"title":"Weighted Cross-Entropy","slug":"weighted-cross-entropy","link":"#weighted-cross-entropy","children":[]},{"level":3,"title":"Balanced Cross-Entropy","slug":"balanced-cross-entropy","link":"#balanced-cross-entropy","children":[]},{"level":3,"title":"Focal Loss","slug":"focal-loss","link":"#focal-loss","children":[]}]},{"level":2,"title":"bounding box","slug":"bounding-box","link":"#bounding-box","children":[{"level":3,"title":"IOU","slug":"iou","link":"#iou","children":[]},{"level":3,"title":"GIOU","slug":"giou","link":"#giou","children":[]},{"level":3,"title":"DIOU","slug":"diou","link":"#diou","children":[]},{"level":3,"title":"CIOU","slug":"ciou","link":"#ciou","children":[]}]},{"level":2,"title":"region-based","slug":"region-based","link":"#region-based","children":[{"level":3,"title":"DICE","slug":"dice","link":"#dice","children":[]}]},{"level":2,"title":"Boundary-based Loss","slug":"boundary-based-loss","link":"#boundary-based-loss","children":[]},{"level":2,"title":"Compounded Loss","slug":"compounded-loss","link":"#compounded-loss","children":[]}],"relativePath":"doc/loss.md","lastUpdated":1672855704000}'),o={name:"doc/loss.md"},r=i('<h1 id="classify" tabindex="-1">classify <a class="header-anchor" href="#classify" aria-hidden="true">#</a></h1><h2 id="distribution-based" tabindex="-1">distribution-based <a class="header-anchor" href="#distribution-based" aria-hidden="true">#</a></h2><h3 id="binary-cross-entropy" tabindex="-1">binary-cross-entropy <a class="header-anchor" href="#binary-cross-entropy" aria-hidden="true">#</a></h3><p><em><strong>形式</strong></em></p><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>对于每一个样本，yi代表该类真实概率（只能取0或者1），h(xi)代表该类预测值（可以取0-1内的任意数）</li><li>当yi=1时，loss只计算前半部分，此时loss关于预测值是单减的，预测值y^越接近1，loss值越小；预测值y^越接近0，loss值越大</li><li>当yi=0时，loss只计算后半部分，此时loss关于预测值是单增的，预测值y^越接近1，loss值越大；预测值y^越接近0，loss值越小</li><li>此loss目的是让标签为1的类别其概率更接近1，标签为0的类别其概率更接近0</li></ul><h3 id="multi-cross-entropy" tabindex="-1">multi-cross-entropy <a class="header-anchor" href="#multi-cross-entropy" aria-hidden="true">#</a></h3><p><em><strong>形式一：只考虑标签类的损失</strong></em></p><p><img src="" alt=""></p><hr><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>样本的数量为N，类别数为K，网络在预测时会为每个样本生成K个预测值，取K个预测值中的最大值作为最终的类别</li><li>此时的 loss = -(0 * log0.1 + 0 * log0.5 + 1 * log0.1 + 0 * log0.3) = -(log0.1)</li><li>在此形式中，只有标签为1的部分才会算入损失，loss对此位置的预测结果y^是单减的，预测结果y^越接近1，loss越小</li><li>若使用此形式，那么分错的部分不会算入loss中，只有分对的类别会算入损失。意味着标签为0的部分在预测结果中对应的部分不会得到更新</li></ul><p><em><strong>形式二：考虑所有标签通道上的损失</strong></em></p><p><img src="" alt=""></p><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>样本的数量为N，类别数为K</li><li>此时的loss = -(log(0.9) + log(0.5) + log(0.1) + log(0.7))</li><li>在此形式中，既考虑了分错的样本，也考虑了分对的样本。所以不管标签值为0的位置还是标签值为1的位置，其对应的参数都会得到更新。0更倾向于0，1更倾向于1</li><li>对于标签为1的位置，loss对于此位置的预测值是单减的，预测值越接近于1，loss值越小；预测值越接近于0，loss值越大，网络会使他往1的方向移动</li><li>对于标签为0的位置，loss对于此位置的预测值是单增的，预测值越接近于1，loss值越大；预测值越接近于0，loss值越小，网络会使他往0的方向移动</li></ul><p><em><strong>总结</strong></em></p><ul><li>形式二由于考虑了标签为0对应位置元素的损失，所以形式二的损失是大于形式一的，但对于某一个样本点在不同通道上预测的结果可能差距更大，更易于辨别。<strong><code>（有待验证）</code></strong></li><li>用交叉熵计算多分类损失时常用形式一</li></ul><h3 id="weighted-cross-entropy" tabindex="-1">Weighted Cross-Entropy <a class="header-anchor" href="#weighted-cross-entropy" aria-hidden="true">#</a></h3><p><em><strong>形式</strong></em></p><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>通过为正样本的损失添加系数来改变正样本在整个损失中所占的比例</li><li>如果出现FN情况，即把正样本预测成了负样本，可以令系数大于1，此时正样本的损失所占权重变大</li><li>如果出现FP情况，即把负样本预测成了正样本，可以令系数小于1，此时正样本的损失所占权重变小</li></ul><h3 id="balanced-cross-entropy" tabindex="-1">Balanced Cross-Entropy <a class="header-anchor" href="#balanced-cross-entropy" aria-hidden="true">#</a></h3><p><em><strong>形式</strong></em></p><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>为正样本的损失和负样本的损失都添加系数，且二者系数之和为1</li><li>一般可以设系数 β = 1 −y/(H∗W)</li></ul><h3 id="focal-loss" tabindex="-1">Focal Loss <a class="header-anchor" href="#focal-loss" aria-hidden="true">#</a></h3><p><em><strong>形式一：给难分样本和易分样本添加权重</strong></em></p><p><img src="" alt=""> 注意，公式里的pt既代表正样本也代表负样本 <img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>参数伽马是大于零的</li><li>当真实值 y = 1时，若预测值pt ~ 0，我们就可以把此样本看作难分样本（因为期望预测为1，但预测却为零）。此时1-pt ~ 1，不会太影响此样本对总体loss的贡献，<code>即不会改变难分样本loss在总loss中所占的权重</code></li><li>当真实值 y = 1·时，若预测值pt ~ 1，我们就可以把此样本看作易分样本（因为期望预测为1，预测也接近为1）。此时1-pt ~ 0，此样本对总体loss的贡献减小，<code>即降低了易分样本loss在总loss中所占的比重</code></li></ul><p><em><strong>结果</strong></em></p><p><img src="" alt=""></p><ul><li>当伽马为零时，focal loss 和普通的CE loss 是等价的，如上图的蓝线所示</li><li>伽马取值大于零时，预测值越接近于0，斜率越大，意味着梯度越大；</li><li>预测值越接近于1，loss越小，即降低了易分样本loss在总样本loss中的比重，同时斜率越小，意味着梯度越小</li></ul><p><em><strong>思考</strong></em></p><ul><li>通过降低样本在loss中的比重真的可以到达不训练的目的吗，或者说使降低权重的那一部分loss梯度变小？<code>有待可视化梯度验证</code></li><li>在多分类第一种形式中，我们并没有考虑负样本的损失，是不是代表着负样本偏多也影响不大？<code>有待验证</code></li><li>这么一想，在多分类第二种形式的交叉熵计算公式中，我们是认为所有难分样本和易分样本的权重是一样的。这样对于负样本偏多的数据集来说，反倒让模型花费更多的精力去降低负样本的loss，导致正样本的损失被淹没<code>（并没有真正的被淹没，只是值在总体loss中占比较小，可能长时间得不到更新）</code>。因为尽管负样本loss和正样本loss的权重是一样的，但负样本的数量过多，相当于正样本loss在总loss中占比较小</li></ul><p><em><strong>形式二：在形式一的基础上给多数样本和少数样本添加权重</strong></em></p><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>类似于Balanced Cross-Entropy，通过给样本添加权重来调节由于正负样本数量差异过大导致的loss中正负样本所贡献loss不同的影响。给占多数的样本一个小的系数，占少数的样本一个大的系数</li><li>基于此形式，既可以平衡正负样本数量带来的影响，也可以平衡正负样本中难分样本loss和易分样本loss在总loss中的比重，使模型将更多的精力放在难分样本中</li><li>注意：正负样本中可能都存在难分的样本</li></ul><p><em><strong>总结</strong></em></p><ul><li>focal loss可以在正负样本差异较大的时候可以使用</li></ul><hr><h1 id="regression" tabindex="-1">regression <a class="header-anchor" href="#regression" aria-hidden="true">#</a></h1><h2 id="bounding-box" tabindex="-1">bounding box <a class="header-anchor" href="#bounding-box" aria-hidden="true">#</a></h2><h3 id="iou" tabindex="-1">IOU <a class="header-anchor" href="#iou" aria-hidden="true">#</a></h3><p><em><strong>形式</strong></em></p><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>分子是两个矩形的交集面积，分母是两个矩形并集的面积</li></ul><p><em><strong>优点</strong></em></p><ul><li>具有尺度不变性，不受矩阵大小的影响<code>（因为除以了并集，进行了归一化）</code></li><li>对于相交的矩形，可以修正两个框的位置使其慢慢重合</li></ul><p><em><strong>缺点</strong></em></p><ul><li>当两个矩形不相交时，IOU=0，此时不能衡量出两个框离散的程度<code>（如下图1所示）</code>，梯度为零，框的位置得不到更新</li><li>当两个矩形相交时，IOU并不能反映出二者是如何相交的。尤其当相交方式不同，而IOU相同时，<code>如下图2所示</code>。</li></ul><p><img src="" alt=""></p><p>图1</p><p><img src="" alt=""></p><p>图2</p><h3 id="giou" tabindex="-1">GIOU <a class="header-anchor" href="#giou" aria-hidden="true">#</a></h3><p><em><strong>形式</strong></em></p><p>为了改进IOU的缺陷，GIOU引入了两个矩阵外围矩形的概念，来衡量两个矩形的相交方式</p><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>C代表包含矩形A和B最小的外围矩形，如下图1所示</li><li>首先计算A和B的交并比，即IOU；再计算C - A U B 的面积 / C的面积</li><li>当A，B正好重合时，A U B的大小等于A或者B的大小，外围矩形C的大小等于A的面积，此时分子为零，GIOU = IOU</li><li>当A，B重合的区域占比很大时，A U B所在的区域在C中占的比例较大，此时C - A U B 很小，分子趋近于零</li><li>GIOU永远都是小于IOU的</li></ul><p><img src="" alt=""></p><p><em><strong>优点</strong></em></p><ul><li>可以更好的反应两个矩形的相交情况，如下图所示</li><li>当两个矩形不相交时，loss也不为零，可以指导框的移动</li></ul><p><img src="" alt=""></p><h3 id="diou" tabindex="-1">DIOU <a class="header-anchor" href="#diou" aria-hidden="true">#</a></h3><p>虽然GIOU的引入可以解决两个不相交时框如何移动的问题，但当框重叠或一个框完全在另一个框内时，GIOU退化为IOU，如下图所示。为了解决此问题，人们又提出了DIOU。</p><p><img src="" alt=""></p><p><em><strong>形式</strong></em></p><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>计算DIOU时还是需要先算出A和B的最小外围矩形框C，c代表C的对角线长度，b代表预测框的中心点坐标，bgt代表真实框的中心点坐标，分子代表这两个中心点的欧氏距离</li><li>除以c^2的原因是为了归一化，统一量纲</li></ul><p><img src="" alt=""></p><p><em><strong>优点</strong></em></p><ul><li>DIOU在预测框和真实框IOU为零时，仍能优化框的移动</li><li>DIOU可以直接最小化两个框之间的距离，因此收敛的较快<code>（有待证实）</code></li><li>对于包含两个框在水平方向和垂直方向上这种情况，DIoU损失可以使回归非常快，而GIoU损失几乎退化为IoU损失</li></ul><h3 id="ciou" tabindex="-1">CIOU <a class="header-anchor" href="#ciou" aria-hidden="true">#</a></h3><p>一个好的目标框回归损失应该考虑三个重要的几何因素：<strong>重叠面积、中心点距离、长宽比</strong>。</p><p>GIoU：为了归一化坐标尺度，利用IoU，并初步解决IoU为零的情况。</p><p>DIoU：DIoU损失同时考虑了边界框的重叠面积和中心点距离。 然而，anchor框和目标框之间的长宽比的一致性也是极其重要的。</p><p><em><strong>形式</strong></em></p><p><img src="" alt=""></p><p><em><strong>解释</strong></em></p><ul><li>wgt，hgt代表真实框的宽和高，w，h代表预测框的宽和高</li></ul><hr><h1 id="segmentation" tabindex="-1">Segmentation <a class="header-anchor" href="#segmentation" aria-hidden="true">#</a></h1><h2 id="region-based" tabindex="-1">region-based <a class="header-anchor" href="#region-based" aria-hidden="true">#</a></h2><h3 id="dice" tabindex="-1">DICE <a class="header-anchor" href="#dice" aria-hidden="true">#</a></h3><p><em><strong>形式一</strong></em></p><p><img src="" alt=""></p><p><em><strong>形式二</strong></em></p><p><img src="" alt=""></p><p><em><strong>形式三</strong></em></p><p><img src="" alt=""></p><p><em><strong>举例</strong></em></p><p>![])</p><ul><li>A = 0.3 + 0.2 + 0.3 + 0.2 = 1.0</li><li>B = 0 + 1 + 0 + 1 = 2</li><li>U = A+ B = 3.0</li><li>I = A * B = 0.3 * 0 + 0.2 * 1 + 0.3 * 0 + 0.2 * 1 = 0.4</li></ul><p><em><strong>解释</strong></em></p><ul><li>记分割预测结果为A，分割真实标签为B，U代表 A + B 的结果，I 代表 A*B 的结果</li><li><img src="https://www.zhihu.com/equation?tex=%5Cvarepsilon" alt="[公式]">参数称为平滑系数，常设为1，目的是为了防止分母为零的情况</li><li>形式三中以元素的平方和作为U</li></ul><p><em><strong>对一个点的函数曲线分析</strong></em></p><p><img src="" alt=""></p><p>绘制曲线图如下，其中蓝色的为ce loss，橙色的为dice loss。</p><p><img src="" alt=""></p><ul><li>当<img src="https://www.zhihu.com/equation?tex=t%3D0" alt="[公式]"> 时，<img src="https://www.zhihu.com/equation?tex=x" alt="[公式]"> 在一个较大的范围内，loss的值都很大接近1。只有<img src="https://www.zhihu.com/equation?tex=x" alt="[公式]"> 预测非常小，<img src="https://www.zhihu.com/equation?tex=y" alt="[公式]"> 接近于0(和<img src="https://www.zhihu.com/equation?tex=%5Cepsilon" alt="[公式]"> 量级相近)时loss才会变小，而这种情况出现的概率也较小。一般情况下，在正常范围内，预测不管为任何值，都无差别对待，loss 都统一非常大。</li><li>当<img src="https://www.zhihu.com/equation?tex=t%3D1" alt="[公式]"> 时，<img src="https://www.zhihu.com/equation?tex=x" alt="[公式]"> 在0左右较小的范围内，保持不错的特性。但随着<img src="https://www.zhihu.com/equation?tex=x" alt="[公式]"> 远离0点，loss呈现饱和现象。</li></ul><p><em><strong>对一个点的梯度分析</strong></em></p><p><img src="" alt=""></p><p>绘图如下</p><p><img src="" alt=""></p><h2 id="boundary-based-loss" tabindex="-1">Boundary-based Loss <a class="header-anchor" href="#boundary-based-loss" aria-hidden="true">#</a></h2><h2 id="compounded-loss" tabindex="-1">Compounded Loss <a class="header-anchor" href="#compounded-loss" aria-hidden="true">#</a></h2><p>长尾分布</p><p>重复训练loss高的样本，更改dataloader</p><p>语义间的loss，构建语义关系网，自然语言的loss</p><p>多模态融合loss</p>',121),t=[r];function a(n,p,d,c,g,h){return l(),e("div",null,t)}const b=s(o,[["render",a]]);export{m as __pageData,b as default};

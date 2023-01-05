import{_ as e,o as i,c as t,a as n}from"./app.ad1a3dff.js";const s=JSON.parse('{"title":"现代卷积神经网络","description":"现代卷积神经网络","frontmatter":{"title":"现代卷积神经网络","description":"现代卷积神经网络","date":"2022-10-28T00:00:00.000Z","tags":["张栋","ALL"]},"headers":[{"level":2,"title":"一、AlexNet","slug":"一、alexnet","link":"#一、alexnet","children":[{"level":3,"title":"1.1 AlexNet简介","slug":"_1-1-alexnet简介","link":"#_1-1-alexnet简介","children":[]},{"level":3,"title":"1.2AlexNet 结构","slug":"_1-2alexnet-结构","link":"#_1-2alexnet-结构","children":[]},{"level":3,"title":"1.3 Alexnet网络的特点","slug":"_1-3-alexnet网络的特点","link":"#_1-3-alexnet网络的特点","children":[]}]},{"level":2,"title":"二、VGG","slug":"二、vgg","link":"#二、vgg","children":[{"level":3,"title":"2.1 VGG简介","slug":"_2-1-vgg简介","link":"#_2-1-vgg简介","children":[]},{"level":3,"title":"2.2VGG网络的特点","slug":"_2-2vgg网络的特点","link":"#_2-2vgg网络的特点","children":[]}]},{"level":2,"title":"三、NiN","slug":"三、nin","link":"#三、nin","children":[{"level":3,"title":"VGGNet的不足：","slug":"vggnet的不足","link":"#vggnet的不足","children":[]},{"level":3,"title":"NiN的改进：","slug":"nin的改进","link":"#nin的改进","children":[]}]},{"level":2,"title":"四、GoogLeNet","slug":"四、googlenet","link":"#四、googlenet","children":[{"level":3,"title":"1. 为什么要提出Inception","slug":"_1-为什么要提出inception","link":"#_1-为什么要提出inception","children":[]},{"level":3,"title":"2. 什么是Inception","slug":"_2-什么是inception","link":"#_2-什么是inception","children":[]},{"level":3,"title":"3.实际中需要什么样的Inception","slug":"_3-实际中需要什么样的inception","link":"#_3-实际中需要什么样的inception","children":[]},{"level":3,"title":"4.整体网络结构设计","slug":"_4-整体网络结构设计","link":"#_4-整体网络结构设计","children":[]}]}],"relativePath":"doc/现代卷积神经网络.md","lastUpdated":1672855704000}'),l={name:"doc/现代卷积神经网络.md"},a=n('<h1 id="现代卷积神经网络" tabindex="-1">现代卷积神经网络 <a class="header-anchor" href="#现代卷积神经网络" aria-hidden="true">#</a></h1><h2 id="一、alexnet" tabindex="-1">一、AlexNet <a class="header-anchor" href="#一、alexnet" aria-hidden="true">#</a></h2><h3 id="_1-1-alexnet简介" tabindex="-1">1.1 AlexNet简介 <a class="header-anchor" href="#_1-1-alexnet简介" aria-hidden="true">#</a></h3><p>AlexNet是2012年ImageNet竞赛冠军获得者Hinton和他的学生Alex Krizhevsky设计的。</p><p>AlexNet中包含了几个比较新的技术点，也首次在CNN中成功应用了ReLU、Dropout和LRN等Trick。同时AlexNet也使用了GPU进行运算加速。</p><p>AlexNet将LeNet的思想发扬光大，把CNN的基本原理应用到了很深很宽的网络中。AlexNet主要使用到的新技术点如下：</p><p>首次利用GPU进行网络加速训练。 使用了ReLU激活函数，而不是传统的Sigmoid激活函数以及Tanh激活函数。（smoid求导比较麻烦而且当网路比较深的时候会出现梯度消失） 使用了LRN局部响应归一化。 在全连接层的前两层中使用了Dropout随机失活神经元操作，以减少过拟合。 dropout解释： 使用dropout后，在每一层中随机失活一些神经元——减少训练参数从而减少over fitting</p><h3 id="_1-2alexnet-结构" tabindex="-1">1.2AlexNet 结构 <a class="header-anchor" href="#_1-2alexnet-结构" aria-hidden="true">#</a></h3><p><img src="" alt="image-20221019212746817"></p><p>Alexnet网络是由五个卷积层和三个全连接层构成，其中最后的输出被送到1000维的softmax函数。在卷积层的第一、第二和第五层使用了最大池化函数，并且在卷积层的第一和第二层使用了标准化 LRN函数。在全连接层的前两层使用了Dropout函数，来解决神经网络的过拟合问题。Relu激活函数应用在每个卷积层和全连接层。</p><h3 id="_1-3-alexnet网络的特点" tabindex="-1">1.3 Alexnet网络的特点 <a class="header-anchor" href="#_1-3-alexnet网络的特点" aria-hidden="true">#</a></h3><p>1、使用了两个GPU 。由于数据量较大，将网络分配给两个GPU，GPU之间交换数据只会在某些层上发生，不会在所有层上发生第三层从第二层获取数据时会跨GPU，而第四层从第三层获取数据时，只会在同一GPU上进行； 2、在数据预处理阶段，将图片随机截取227<em>227大小，以及他们的水平翻转形成 的图片作为总的样本。在测试时，截取5个227×227的图像块以及它们的水平映射作为样本; 3、使用了Relu非线性激活函数，训练时间更快； 4、在Relu后使用了LRN作为归一化的方法，局部响应归一化； 5、使用了最大池化函数，并且重叠池化，池化核为3</em>3，步长为2，训练效果更好，传统的池化核在平移过程中，区域不会重合； 6、在全连接层的前两层使用Dropout，用来解决过拟合问题，减少隐藏层之间的相互作用，以概率p将某些神经元的值变为0，这些神经元不会参加正向和反向传播； 7、但是对于不同的输入，构建的不同的网络模型使用相同的权重；测试时使用全部的神经元，但是神经元的值会减半。</p><h2 id="二、vgg" tabindex="-1">二、VGG <a class="header-anchor" href="#二、vgg" aria-hidden="true">#</a></h2><h3 id="_2-1-vgg简介" tabindex="-1">2.1 VGG简介 <a class="header-anchor" href="#_2-1-vgg简介" aria-hidden="true">#</a></h3><p>VGGNet是由⽜津⼤学计算机视觉组参加图像分类竞赛时提出的，VGG即Visual Geometry Group，VGGNet相对于AlexNet来说，其在深度上翻了⼀番，最深可达19层，所以叫做Very Deep。</p><p>VGG可以应用在人脸识别、图像分类等方面，分别从VGG16～VGG19。</p><p>VGG研究卷积网络深度的初衷是想搞清楚卷积网络深度是如何影响大规模图像分类与识别的精度和准确率的，最初是VGG-16号称非常深的卷积网络全称为（GG-Very-Deep-16 CNN），VGG在加深网络层数同时为了避免参数过多，在所有层都采用3x3的小卷积核，卷积层步长被设置为1。</p><p>VGG的输入被设置为224x244大小的RGB图像，在训练集图像上对所有图像计算RGB均值，然后把图像作为输入传入VGG卷积网络，使用3x3或者1x1的filter，卷积步长被固定1。</p><p>VGG全连接层有3层，根据卷积层+全连接层总数目的不同可以从VGG11 ～ VGG19，最少的VGG11有8个卷积层与3个全连接层，最多的VGG19有16个卷积层+3个全连接层.</p><p>此外VGG网络并不是在每个卷积层后面跟上一个池化层，还是总数5个池化层，分布在不同的卷积层之下，下图是VGG11 ～GVV19的结构图： <img src="" alt="image-20221019213422287"></p><p>与AlexNet相比，VGG网络的评估结果更好，损失更低，精确度更高，但是VGG网络运行时间更久，由于网络更深，参数更多，耗费了更多的资源，占据了更多的内存。</p><h3 id="_2-2vgg网络的特点" tabindex="-1">2.2VGG网络的特点 <a class="header-anchor" href="#_2-2vgg网络的特点" aria-hidden="true">#</a></h3><p>1、结构简单，作者将卷积核全部替换为3×3（极少用了1×1）；相比于AlexNet 的池化核，VGG全部使用2×2的池化核。 2、参数量大，而且大部分的参数集中在全连接层中。网络名称中有16表示它有16层conv/fc层。 3、合适的网络初始化和使用批量归一(batch normalization)层对训练深层网络很重要。 4、VGG-19结构类似于VGG-16，有略好于VGG-16的性能，但VGG-19需要消耗更大的资源，因此实际中VGG-16使用得更多。 5、由于VGG-16网络结构十分简单，并且很适合迁移学习，因此至今VGG-16仍在广泛使用。</p><p>VGGNet结构所有卷积层的kernel都只有3 x 3。VGGNet中连续使用3组3 x 3kernel（stride为1）的原因是它和使用1个7 x 7kernel产生的效果相同（下图以一维卷积为例解释效果相同的原理），然而更深的网络结构会学习到更复杂的非线性关系使得模型效果更好。该操作带来的另一个好处是参数数量的减少，因为对于一个有C个kernel的卷积层来说，原来的参数个数为7 x 7 x C，而新的参数个数为3 x（3 x 3 x C）。 <img src="" alt="image-20221019214316909"></p><p>除此之外，3个串联的3x3卷积层的参数数量要比一个7x7卷积层的参数数量小得多，即3<em>3</em>3<em>C2/7</em>7C2 = 55%，更少的参数意味着减少过拟合，而且更重要的是3个3x3卷积层拥有比1个7x7的卷积层更多的非线性变换（前者拥有3次而后者只有一次），使得CNN对特征的学习能力更强。</p><h2 id="三、nin" tabindex="-1">三、NiN <a class="header-anchor" href="#三、nin" aria-hidden="true">#</a></h2><p>背景：</p><p>从LeNet到AlexNet再到VGGNet，深度学习的发展方向就是通过加深卷积层与池化层的深度来提取更加多样复杂的空间结构特征，然后用全连接层基于这些提取的空间结构特征进行分类。</p><p>但这个发展方向很快就遇到了瓶颈，VGGNet网络深度不能突破19层，出现了让人头疼的网络退化问题。</p><h3 id="vggnet的不足" tabindex="-1">VGGNet的不足： <a class="header-anchor" href="#vggnet的不足" aria-hidden="true">#</a></h3><blockquote><p>单一的卷积层、池化层网络结构堆叠</p></blockquote><p>CNN使用的线性滤波器是一种广义线性模型，所以无论多少层的卷积层堆叠都还是一个广义线性模型；CNN能够有效，其实隐含地假设了特征是线性可分的，可面临的实际任务并非如此。</p><blockquote><p>全连接层作为分类器</p></blockquote><p>全连接层是参数爆炸的罪魁祸首，正因全连接层带来的参数爆炸，网络模型也变得更加复杂，容易过拟合。而且全连接层的分类结果解释性很难。</p><h3 id="nin的改进" tabindex="-1">NiN的改进： <a class="header-anchor" href="#nin的改进" aria-hidden="true">#</a></h3><blockquote><p>用MLPConv替换传统的Conv</p></blockquote><p>MLPCov的网络结构是一个传统Conv后接两个1*1Conv；MLPconv可以拟合任意形式的线性、非线性函数。</p><p><img src="https://pic4.zhimg.com/80/v2-e4f71c3d023494f37fa4b1c9a00f6213_720w.webp" alt="img"></p><p>传统Conv(左），MLPConv(右）</p><p>NiN用上图所示的MLPConv的多层堆叠来构造卷积神经网络；MLPConv中的MLP实际上是用1*1Conv来实现的：</p><p><img src="https://pic3.zhimg.com/80/v2-67a600f0d077c88e32305308bf270b7a_720w.webp" alt="img"></p><p>1*1Conv</p><p>从上图可知，1<em>1Conv没有提取相邻像素间的相关特征的作用，它是对同一像素在通道维度上的线性组合。当以每像素为1</em>1Conv对象时，1<em>1Conv相当于全连接层。1</em>1Conv具有调整网络层的通道数量、控制模型复杂度的作用。</p><blockquote><p>用Global Average Pooling替换全连接层</p></blockquote><p>NiN最后一层卷积层的输出通道数量等于分类数量；Global Average Pooling是池化窗口与特征图尺寸相等的池化层，它取代了全连接层，作为整个模型的分类器，这种修改能够极大减少模型参数数量，同时减轻过拟合问题。Global Average Pooling综合了空间信息，使得对输入的空间变换更鲁棒，对分类结果解释性更强。</p><p><img src="https://pic3.zhimg.com/80/v2-f93f387f9e1533572984fd83ff7d0c1a_720w.webp" alt="img"></p><p>全连接输出(左），Global Average Pooling输出</p><p>从LeNet到VGGNet的网络深度加深，到NiN的网络结构优化；基本奠定了深度学习的两大主流优化方向：加深网络深度，优化网络结构。</p><p>卷积层的输入和输出通常是四维数组（样本、通道、高、宽），而全连接层的输入和输出则通常是二维数组（样本、特征）。如果想在全连接层上再接上卷积层，则需要将全连接层的输出变换为四维。形如（多输入通道和多输出通道）里介绍的1x1卷积层，它可以看成全连接层，其中空间维度（高和宽）上的每个元素相当于样本，通道相当于特征。因此，NiN使用1x1卷积层来替代全连接层，从而是空间信息能够自然传递到后边的层中去，下图对比了NiN同AlexNet和VGG等网络再结构上的主要区别。 <img src="" alt="image-20221020205246999"></p><p><code>NiN</code>块是<code>NiN</code>中的基础块，它有一个卷积层加两个充当全连接层的<code>1x1</code>卷积层串联而成。其中第一个卷积层的超参数可以自行设置，而第二个和第三个卷积层的超参数一般是固定的。</p><p>NiN是在AlexNet问世不久后提出的。它们的卷积层设定有类似之处。NiN使⽤卷积窗⼝形状分别为11x11 、5x5 和 3x3 的卷积层，相应的输出通道数也与AlexNet中的⼀致。每个NiN块后接⼀个步幅为2、窗⼝形状为 3x3 的最⼤池化层。 除使⽤NiN块以外，NiN还有⼀个设计与AlexNet显著不同：NiN去掉了AlexNet最后的3个全连接层，取⽽代之地，NiN使⽤了输出通道数等于标签类别数的NiN块，然后使⽤全局平均池化层对每个通道中所有元素求平均并直接⽤于分类。这⾥的全局平均池化层即窗⼝形状等于输⼊空间维形状的平均池化层。NiN的这个设计的好处是可以显著减⼩模型参数尺⼨，从⽽缓解过拟合。</p><p>小结：</p><ul><li>NiN使用由一个卷积层和多个1×1卷积层组成的块。该块可以在卷积神经网络中使用，以允许更多的每像素非线性。</li><li>NiN去除了容易造成过拟合的全连接层，将它们替换为全局平均汇聚层（即在所有位置上进行求和）。该汇聚层通道数量为所需的输出数量（例如，Fashion-MNIST的输出为10）。</li><li>移除全连接层可减少过拟合，同时显著减少NiN的参数。</li><li>NiN的设计影响了许多后续卷积神经网络的设计。</li></ul><h2 id="四、googlenet" tabindex="-1">四、GoogLeNet <a class="header-anchor" href="#四、googlenet" aria-hidden="true">#</a></h2><h3 id="_1-为什么要提出inception" tabindex="-1">1. 为什么要提出Inception <a class="header-anchor" href="#_1-为什么要提出inception" aria-hidden="true">#</a></h3><p>一般来说，提升网络性能最直接的办法就是增加网络深度和宽度，但一味地增加，会带来诸多问题： 1）参数太多，如果训练数据集有限，很容易产生过拟合； 2）网络越大、参数越多，计算复杂度越大，难以应用； 3）网络越深，容易出现梯度弥散问题（梯度越往后穿越容易消失），难以优化模型。 我们希望在增加网络深度和宽度的同时减少参数，为了减少参数，自然就想到将全连接变成稀疏连接。但是在实现上，全连接变成稀疏连接后实际计算量并不会有质的提升，因为大部分硬件是针对密集矩阵计算优化的，稀疏矩阵虽然数据量少，但是计算所消耗的时间却很难减少。在这种需求和形势下，Google研究人员提出了Inception的方法。</p><h3 id="_2-什么是inception" tabindex="-1">2. 什么是Inception <a class="header-anchor" href="#_2-什么是inception" aria-hidden="true">#</a></h3><p>Inception就是把多个卷积或池化操作，放在一起组装成一个网络模块，设计神经网络时以模块为单位去组装整个网络结构。模块如下图所示</p><p><img src="" alt="image-20221020202032290"></p><p>在未使用这种方式的网络里，我们一层往往只使用一种操作，比如卷积或者池化，而且卷积操作的卷积核尺寸也是固定大小的。但是，在实际情况下，在不同尺度的图片里，需要不同大小的卷积核，这样才能使性能最好，或者或，对于同一张图片，不同尺寸的卷积核的表现效果是不一样的，因为他们的感受野不同。所以，我们希望让网络自己去选择，Inception便能够满足这样的需求，一个Inception模块中并列提供多种卷积核的操作，网络在训练的过程中通过调节参数自己去选择使用，同时，由于网络中都需要池化操作，所以此处也把池化层并列加入网络中。</p><h3 id="_3-实际中需要什么样的inception" tabindex="-1">3.实际中需要什么样的Inception <a class="header-anchor" href="#_3-实际中需要什么样的inception" aria-hidden="true">#</a></h3><p>我们在上面提供了一种Inception的结构，但是这个结构存在很多问题，是不能够直接使用的。首要问题就是参数太多，导致特征图厚度太大。为了解决这个问题，作者在其中加入了1X1的卷积核，改进后的Inception结构如下图</p><p><img src="" alt="image-20221020202844956"></p><p>这样做有两个好处，首先是大大减少了参数量，其次，增加的1X1卷积后面也会跟着有非线性激励，这样同时也能够提升网络的表达能力。</p><h3 id="_4-整体网络结构设计" tabindex="-1">4.整体网络结构设计 <a class="header-anchor" href="#_4-整体网络结构设计" aria-hidden="true">#</a></h3><p><img src="https://img-blog.csdn.net/20160225155414702" alt="img"></p><p><img src="" alt="image-20221020205806566"></p><p>小结：</p><p>1）GoogLeNet采用了模块化的结构（Inception结构），方便增添和修改；</p><p>2）网络最后采用了average pooling（平均池化）来代替全连接层，该想法来自NIN（Network in Network），事实证明这样可以将准确率提高0.6%。</p><p>3）虽然移除了全连接，但是网络中依然使用了Dropout ;</p><p>4）为了避免梯度消失，网络额外增加了2个辅助的softmax用于向前传导梯度（辅助分类器）</p><p>对于前三点都很好理解，下面我们重点看一下第4点。这里的辅助分类器只是在训练时使用，在正常预测时会被去掉。辅助分类器促进了更稳定的学习和更好的收敛，往往在接近训练结束时，辅助分支网络开始超越没有任何分支的网络的准确性，达到了更高的水平。</p>',73),p=[a];function o(r,c,d,h,N,G){return i(),t("div",null,p)}const x=e(l,[["render",o]]);export{s as __pageData,x as default};

<script lang="ts">
import { ref } from 'vue';

export default {

    name: 'MyCarousel',
    setup() {
        const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
        const urls = ["/imgs/lunbotu/PDF文档结构信息提取系统.png", "/imgs/lunbotu/视网膜眼底图像血管分割.jpg", "/imgs/lunbotu/基于视觉和文本的多模态文档图像目标检测.png", "/imgs/lunbotu/膝关节软骨分割.jpg", "/imgs/lunbotu/基于混合注意力机制的文档对象版面分析.png", "/imgs/lunbotu/基于视觉变换器的级联多阶层医学影像配准方法.png", "/imgs/lunbotu/基于空间信息和视觉信息的文档目标检测器.jpg", "/imgs/lunbotu/岩心图像交互式分割系统.jpg", "/imgs/lunbotu/医学影像三维重建及可视化系统.png", "/imgs/lunbotu/基于图像多级信息的信息提取和预判系统.png"]
        const hrefs = ['PDF', 'ruangu', 'cover', 'none', 'scale-down']
        const currentIndex = ref(0);
        const items = [
            { image: 'https://picsum.photos/id/1018/800/300' },
            { image: 'https://picsum.photos/id/1015/800/300' },
            { image: 'https://picsum.photos/id/1019/800/300' },
        ];
        const handleChange = (index) => {
            currentIndex.value = index;
        };
        return {
            fits,
            urls,
            hrefs,
            currentIndex,
            items,
            handleChange,
        };
    },
};
</script>
<!-- https://element-plus.gitee.io/zh-CN/component/carousel.html -->
<template>
    <!-- 设置 autoplay="false"不能停止自动播放，所以把时间间隔设置长一点-->
    <el-carousel :interval="300000" trigger="click" type="card" autoplay="false" height="400px" arrow="always" @change="handleChange">
        <el-carousel-item v-for="(url, index) in urls" :key="index">
            <!-- <a :href=hrefs[index] target="-blank" title="查看详情"> -->

                <el-image style="width: 940px; height: 400px" :src="url" fit="fill" />


            <!-- </a> -->
            <!-- 走马灯的每个子项都是940*400 -->
        </el-carousel-item>
    </el-carousel>
    <div class="index-container">
        <transition name="fade">
<div class="index" v-if="currentIndex === 0">
    <el-card class="box-card">   
        <h1>PDF文档结构信息提取系统</h1>
            <div style="text-align:center;">
                <el-link type="danger" href="PDF文档结构信息提取系统.html">详细内容>></el-link>
            </div>
                    <p>随着移动阅读终端种类的多样化，如手机、电子阅读器、GPS等，电子文档在不同移动设备平台上的自适应显示，要求文档内容根据屏幕进行流式化重排和自适应调整，从而保证舒适的阅读体验。为满足移动阅读可读性需求，保证文档内容显示方式的重新调整，其关键在于获得原文档的物理逻辑结构和顺序信息。此外，电子文档结构化信息提取直接影响着信息检索、文本挖掘、搜索引擎、机器翻译、信息存储和管理等应用领域的发展和进步。</p>
                    <p>综上所述，研究团队研发了“PDF文档结构信息提取系统”。该系统能够提取结构化PDF文档中的文本、图片、图表、公式信息。</p>
                    <p>To ensure comfortable reading experience the adaptive display of electronic documents on different mobile devices requires the document content to be streamed rearranged and adaptive adjusted according to the screen. In order to meet the readability requirements of mobile reading and ensure the readjustment of document content display mode, the key is to obtain the physical logical structure and sequence information of the original document. In addition, the structural information extraction of electronic documents directly affects the development and progress of information retrieval, text mining, search engine, machine translation, information storage and management and other application fields.</p>
                    <p>To sum up, our research group developed the prototype of "PDF document structure information extraction system". The prototype can extract text, picture, chart and formula information from structured PDF documents.</p>
    </el-card>  
</div>
        </transition>

<!--  -->

<!--  -->
        <transition name="fade">
<div class="index" v-if="currentIndex === 1">
    <el-card class="box-card">   
        <h1>视网膜眼底图像血管分割</h1>
        <div style="text-align:center;">
            <el-link type="danger" href="视网膜眼底图像血管分割.html">详细内容>></el-link>
        </div>
                 <p>视网膜血管分割是计算机辅助诊断眼科疾病的关键任务。不同于传统方法手工设计复杂的特征，深度学习通过卷积获取了表征性更强的特征。然而，当前的方法大都忽视了多个特征之间的内在联系，这是有问题的。为了探索非局部上下文依赖关系，我们提出了一种基于图的卷积特征聚合网络(GCFAN)，用于同时分割视网膜血管和增强图像非血管区域，它依靠图来传播和聚合跨层次特征的信息。最后，结合我们的算法构建物联网框架，对不同地点的各种眼底相机图像进行分析，并在PC和手机上同时显示结果，方便医生诊断。</p>
                 <p>Retinal vessel segmentation is a crucial task in computer assistant diagnosis of eye diseases. Instead of relying heavily on crafted features, high dimensional deep learning convolution features has provided better representation. However, the neglecting of inherent relation among multiple features is problematic. To explore non-local contextual dependencies, we proposed a graph-based convolution feature aggregation network (GCFAN) for segmenting retinal vessel and enhancing image non-vessel region simultaneously relying on graph to propagate and aggregate message of cross-level features. Finally, an IoT framework which integrates our algorithm is built to analyze image from various fundus cameras in different places and display results on PC and mobile phone simultaneously, which will facilitate doctor diagnose.</p>

    </el-card>
</div>
        </transition>
<!--  -->
<transition name="fade">
<div class="index" v-if="currentIndex === 2">
    <el-card class="box-card">   
        <h1>基于视觉和文本的多模态文档图像目标检测</h1>
            <div style="text-align:center;">
                <el-link type="danger" href="基于视觉和文本的多模态文档图像目标检测.html">详细内容>></el-link>
            </div>
                    <p>由于文档图像的布局复杂、目标对象尺寸分布不均匀，现有的检测算法很少考虑多模态信息和全局依赖关系，因此，提出了基于视觉和文本的多模态文档图像目标检测方法。首先探索多模态特征的融合策略，为利用文本特征，将图像中文本序列信息转换为二维表征，在文本特征和视觉特征初次融合之后，将其输入到骨干网络提取多尺度特征，并在提取过程中多次融入文本特征，实现多模态特征的深度融合；其次为保证小物体和大物体的检测精度，设计了一个金字塔网络，该网络的横向连接将上采样的特征图与自下而上生成的特征图在通道上连接，实现高层语义信息和低层特征信息的传播。在大型公开数据集PubLayNet上的实验结果表明，该方法的检测精度为95.86%，与其他检测方法相比有更高的准确率。该方法不仅实现多模态特征的深度融合，还丰富融合的多模态特征信息，具有良好的检测性能。</p>
                    <p>The layout of document images was complex and distribution of object sizes was uneven. Currently, most of detection methods ignored multimodal information and global dependencies. Therefore, this paper proposed a multimodal document object detection method based on vision and text. Firstly, this method explored the fusion strategy of multimodal features. In order to utilize textual features, this paper converted text sequence information of the image into two-dimensional representation. After the initial fusion of text features and visual features, backbone network took the fused features as input to extract multiscale features, and this paper repeatedly integrated textual features during the extraction process, so as to realize deep fusion of multimodal features. Next, to ensure the detection accuracy of small and large objects, this paper designed a pyramid network. The lateral connection could concatenate feature maps of the same spatial size from the bottom-up pathway and the top-down pathway in channel, so as to achieve the propagation between high-level semantic information and low-level feature information. The experimental results on large public dataset PubLayNet show that the detection accuracy of this method reaches 95.86%, and it has a higher accuracy than other methods. This method not only realizes the deep fusion of multimodal features, but also enriches the fused multimodal feature information, and it has good detection performance.</p>
    </el-card>  
</div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 3">
            <el-card class="box-card">   
        <h1>膝关节软骨分割</h1>
        <div style="text-align:center;">
            <el-link type="danger" href="膝关节软骨分割.html">详细内容>></el-link>
        </div>
                 <p>三维医学图像分割是计算机辅助诊断中的一个关键而又具有挑战性的任务。在医学图像分割中，组织与其周围环境的对比度较低会导致边界模糊。毫无疑问，边界先验信息对于图像分割至关重要。模糊的边界信息会造成分割结果的误差偏大，为了解决这一问题，研究团队从边界信息入手，将边界信息量化，使其参与到网络的学习中去。采用了医学图像分割领域常见的transformer架构，融入强大的特征学习能力和正向信息，使得研究团队提出的网络在不同数据集上的各项指标都要由于其他经典模型。</p>
                 <p>3D volumetric medical image segmentation is a crucial yet challenging task in the computer-aided diagnosis application. Boundary ambiguity caused by low contrast between tissues and their surroundings is problematic for medical image segmentation. Undoubtedly, boundary prior information is essential for image segmentation. The fuzzy boundary information will cause a large error in the segmentation results. In order to solve this problem, we start with the boundary information and quantify the boundary information to participate in the learning of the network. We adopt the transformer architecture, which is common in the field of medical image segmentation. The powerful feature learning ability and the addition of positive information make our network perform better than other classical models on different data sets.</p>

    </el-card>
        </div>
        </transition>
        <transition name="fade">
<div class="index" v-if="currentIndex === 4">
    <el-card class="box-card">   
        <h1>基于混合注意力机制的文档对象版面分析</h1>
            <div style="text-align:center;">
                <el-link type="danger" href="基于混合注意力机制的文档对象版面分析.html">详细内容>></el-link>
            </div>
                    <p>文档图像通常包含各种页面组件和复杂的逻辑结构，这使得文档布局成为一项具有挑战性的任务。大多数基于深度学习的文档布局分析方法都采用卷积神经网络作为特征提取网络。本文提出了一种混合空间通道注意网络(HSCA-Net)，通过引入注意机制来挖掘文档页面中更显著的特征，从而提高特征提取能力。HSCA-Net网络由空间注意模块(SAM)、通道注意模块(CAM)和设计好的横向注意连接组成。CAM通过强调选择性信息来自适应调整信道特征响应，这取决于每个信道特征的贡献。SAM引导卷积神经网络关注信息性内容，并在页面对象之间捕获全局上下文信息。横向注意连接将SAM和CAM合并为多尺度特征金字塔网络，从而保留原始特征信息。通过在公共数据集PubLayNet、ICDAR-POD和Article Regions 上进行多次实验，评估了HSCA-Net的有效性和适应性。</p>
                    <p>Document images often contain various page components and complex logical structures, which make document layout an lysis task challenging. For most deep learning-based document layout analysis methods, convolutional neural networks (CNNs) are adopted as the feature extraction networks. In this paper, a hybrid spatial-channel attention network (HSCA-Net) is proposed to improve feature extraction capability by introducing attention mechanism to explore more salient properties within document pages. The HSCA-Net consists of spatial attention module (SAM), channel attention module (CAM), and designed lateral attention connection. CAM adaptively adjusts channel feature responses by emphasizing selective information, which depends on the contribution of the features of each channel. SAM guides CNNs to focus on the informative contents and capture global context information among page objects. The lateral attention connection incorporates SAM and CAM into multiscale feature pyramid network, and thus retains original feature information. The effectiveness and adaptability of HSCA-Net are evaluated through multiple experiments on publicly available datasets such as PubLayNet, ICDAR-POD, and Article Regions. Experimental results demonstrate that HSCA-Net achieves state-of-the-art performance on document layout analysis task.</p>
    </el-card>  
</div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 5">
            <el-card class="box-card">   
        <h1>基于视觉变换器的级联多阶层医学影像配准方法</h1>
        <div style="text-align:center;">
            <el-link type="danger" href="基于视觉变换器的级联多阶层医学影像配准方法.html">详细内容>></el-link>
        </div>
                 <p>由在基于深度学习的图像配准中，图像中具有复杂解剖结构的形变区域是影响网络配准精度的重要因素，然而现有方法很难关注到图像的复杂解剖区域。同时，卷积神经网络的感受野受其卷积核大小的限制，难以学习空间位置距离较远的体素之间的关系，使其难以处理较大区域形变问题。针对以上两个问题，本文提出了一种基于视觉变换器（Transformer）的级联多阶层配准网络模型，并配备了一种基于均方误差的困难形变感知机。困难形变感知机使用滑动窗口和浮动窗口技术在配准图像中进行检索，得到每个体素的困难形变系数，识别出配准效果最差的区域。本研究中，级联多阶层配准网络模型采用困难形变感知机进行阶层连接，在基础配准网络中凭借自注意力机制提取全局特征，对不同尺度的配准结果进行优化。实验结果证明，本文提出的方法可以对复杂形变区域进行渐进配准，从而优化脑部医学影像的配准结果，对医生的临床诊断工作有良好的辅助作用。</p>
                 <p>In deep learning-based image registration, the deformable region with complex anatomical structures is an important factor affecting the accuracy of network registration. However, it is difficult for existing methods to pay attention to complex anatomical regions of images. At the same time, the receptive field of the convolutional neural network is limited by the size of its convolution kernel, and it is difficult to learn the relationship between the voxels with far spatial location, making it difficult to deal with the large region deformation problem. Aiming at the above two problems, this paper proposes a cascaded multi-level registration network model based on transformer,and equipped it with a difficult deformable region perceptron based on mean square error. The difficult deformation perceptron uses sliding window and floating window techniques to retrieve the registered images, obtain the difficult deformation coefficient of each voxel, and identify the regions with the worst registration effect. In this study, the cascaded multi-level registration network model adopts the difficult deformation perceptron for hierarchical connection, and the self-attention mechanism is used to extract global features in the basic registration network to optimize the registration results of different scales. The experimental results show that the method proposed in this paper can perform progressive registration of complex deformation regions, thereby optimizing the registration results of brain medical images, which has a good auxiliary effect on the clinical diagnosis of doctors.</p>

    </el-card>
        </div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 6">
            <el-card class="box-card">   
        <h1>基于空间信息和视觉信息的文档目标检测器</h1>
        <div style="text-align:center;">
            <el-link type="danger" href="基于空间信息和视觉信息的文档目标检测器.html">详细内容>></el-link>
        </div>
                 <p>由于布局复杂性和对象多样性，文档对象检测是一项具有挑战性的任务。大多数现有方法主要关注视觉信息，而忽略了文档对象之间具有代表性的内在空间相关关系。为了捕获结构信息和上下文依赖性，研究团队提出了一种基于空间相关关系和视觉的新型文档对象检测器。它由三部分组成：视觉特征提取网络、关系特征聚合网络和结果细化网络。视觉特征提取网络通过采用特征增强路径来增强层级特征金字塔之间的信息传播。然后，关系特征聚合网络结合了图构建模块和图学习模块。图构建模块根据区域建议的几何属性计算空间信息以编码关系信息，而图学习模块堆叠图卷积网络（GCN）层以在全局范围内聚合关系信息。视觉和关系特征都被送入结果细化网络进行特征融合和关系推理。实验数据表明本文算法在三个公开可用的数据集上能够取得较好的检测效果。</p>
                 <p>Document object detection is a challenging task due to layout complexity and object diversity. Most of existing methods mainly focus on vision information, neglecting representative inherent spatial-related relationship among document objects. To capture structural information and contextual dependencies, we propose a novel document object detector based on spatial-related relation and vision (SRRV). It consists of three parts: vision feature extraction network, relation feature aggregation network and result refinement network. Vision feature extraction network enhances information propagation of hierarchical feature pyramid by adopting feature augmentation paths. Then, relation feature aggregation network combines graph construction module and graph learning module. Specifically, graph construction module calculates spatial information from geometric attributes of region proposals to encode relation information, while graph learning module stacks Graph Convolutional Network (GCN) layers to aggregate relation information at global scale. Both the vision and relation features are fed into result refinement network for feature fusion and relational reasoning. Experiments on the PubLayNet, POD and Article Regions datasets demonstrate that spatial relation information improves the performance with better accuracy and more precise bounding box prediction.</p>

    </el-card></div>
        </transition>
        <transition name="fade">
<div class="index" v-if="currentIndex === 7">
    <el-card class="box-card">   
        <h1>岩心图像交互式分割系统</h1>
            <div style="text-align:center;">
                <el-link type="danger" href="岩心图像交互式分割系统.html">详细内容>></el-link>
            </div>
                    <p>我们通过一个交互模块对2D砂岩的图像进行人机交互式的分割。在训练过程中以点击的方式进行交互式分割，所有的点击均可自动生成。经过每次的分割结果自动模拟点击下一次的误差最大的地方，在训练过程中不需要人机交互，训练之后我们将采用交互工具来修订一些存在不合理的地方的分割图像。交互工具的其流程为加载数据，进行点击分割，最后保存mask。交互工具的作用可表现为人们参与到对分割结果的补充修正的过程中进而提升分割的精准度。</p>
                    <p>We perform human-computer interactive segmentation of 2D sandstone images by means of an interactive module. The interactive segmentation is performed with clicks during the training process, and all clicks can be generated automatically. After each segmentation result the next click is automatically simulated where the error is the largest. No human-machine interaction is required during the training process, and after the training we will use the interactive tool to revise the segmented images with some unreasonable areas. The process of the interactive tool is to load the data, click on the segmentation, and finally save the mask. The interactive tool can be used to improve the accuracy of the segmentation by involving people in the process of adding corrections to the segmentation results.</p>
    </el-card>
</div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 8">
            <el-card class="box-card">   
        <h1>医学影像三维重建及可视化系统</h1>
        <div style="text-align:center;">
            <el-link type="danger" href="医学影像三维重建及可视化系统.html">详细内容>></el-link>
        </div>
                 <p>随着数字化信息时代的来临，诊断成像设备中各种先进计算机技术和数字化图像技术的应用为医学影像信息系统的发展奠定了基础。历经逾百年发展，医学影像成像技术也从最初的X射线成像发展到现在的各种数字成像技术。当下电子计算机断层扫描（CT）因作为新冠肺炎疫情中重要的诊断手段之一，也让大家认识到AI辅助医疗影像数据分析的重要性。随着人工智能技术的发展，目前技术已可以利用深度学习模型提取图像特征，完成影像分类、自动检测、图形分割、图像重建等任务。人工智能常见的应用环节是辅助诊断（影像辅助诊断、病理诊断）等。但是，目前国产医疗影像比较前沿的技术大多数处于成长期，医疗影像系统普及率也有待提高。
研究团队基于腹腔器官病变影像的AI辅助诊断需求，研发了“医学影像处理系统”该系统可以对常见的CT图像、核磁共振图像等进行器官分割、疾病分类诊断和3D模型重建可视化工作。
</p>
                 <p>With the advent of the digital information era, the application of various advanced computer technologies and digital image technologies in diagnostic imaging equipment has laid the foundation for the development of medical imaging information systems. After more than a century of development, medical imaging technology has also evolved from the initial X-ray imaging to various digital imaging technologies nowadays. The current electronic computed tomography (CT) scan, as one of the important diagnostic tools in the new coronary pneumonia epidemic, has also made everyone realize the importance of AI-assisted medical image data analysis. With the development of artificial intelligence technology, the technology is now available to extract image features using deep learning models to complete tasks such as image classification, automatic detection, graphic segmentation, and image reconstruction. Common application segments of artificial intelligence are auxiliary diagnosis (image assisted diagnosis, pathology diagnosis), etc. However, most of the cutting-edge technologies of domestic medical imaging are in the formative stage, and the penetration rate of medical imaging systems has yet to be improved.

Based on the demand for AI-assisted diagnosis of abdominal organ lesion images, the research team has developed the "Medical Image Processing System", which can perform organ segmentation, disease classification and 3D model reconstruction of common CT images and MRI images.
</p>

    </el-card></div>
        </transition>
        <transition name="fade">
          <div class="index" v-if="currentIndex === 9"><el-card class="box-card">   
        <h1>基于图像多级信息的信息提取和预判系统</h1>
        <div style="text-align:center;">
            <el-link type="danger" href="基于图像多级信息的信息提取和预判系统.html">详细内容>></el-link>
        </div>
                 <p>随着深度学习和人工智能行业的飞速发展，近年来，深度学习成为计算机视觉领域的研究热点，为满足领域内各任务对图像特征信息的需求，保证模型学习特征信息的有效性，其关键在于如何正确完整的提取原图像中的一种或多种多级信息，如图像的边缘信息、结构信息和纹理信息。此外，若图像有部分损坏，是否能够在最大程度上利用已知的未损坏部分图像的多级信息，正确完整的对图像的损坏区域的多级信息进行预判。图像的多级信息提取直接影响着语义分割、超分辨率和图像修复等研究领域的发展和进步。
综上所述，研究团队研发了“基于图像多级信息的信息提取和预判系统”。该系统能够根据图像的损坏与否，提取和预判出已知图像的边缘、结构和纹理等多级信息。
</p>
                 <p>With the rapid development of deep learning and artificial intelligence industry, deep learning has become a research hotspot in the field of computer vision in recent years. In order to meet the demand for image feature information for various tasks in the field and ensure the effectiveness of the model to learn feature information, the key lies in how to correctly and completely extract one or more multi-level information in the original image, such as edge information, structure information and texture information of the image. In addition, if the image is partially damaged, whether the multi-level information of the damaged area of the image can be correctly and completely predicted by using the known multi-level information of the undamaged part of the image to the maximum extent. The multilevel information extraction of images directly affects the development and progress of research fields such as semantic segmentation, super-resolution and image restoration.
In summary, the research team developed the "Information Extraction and Prediction System based on Image Multilevel Information". The system is capable of extracting or predicting multi-level information such as edge, structure and texture of known images based on the damage or not of the image.
</p>

    </el-card></div>
        </transition>
      </div>
</template>
  
<style scoped>
/* 设置卡片和文本样式 */
.box-card {
    width: 70%;
    margin: 0 auto;
}

h1 {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
}

p {
    text-indent: 2em;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.index-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.index {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-size: 19px;
    margin-right: 10px;
    padding: 10px;
}
</style>
  
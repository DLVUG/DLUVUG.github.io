<script lang="ts">
import { ref } from 'vue'
export default {
    setup() {


        const dialogVisible = ref(false)
        return { dialogVisible }
    },
    data() {
        return {
            item: 0,
            types: ["primary", "success", "warning", "danger", "info"]
        }
    },
    methods: {
        randomTypes() {
            return this.types[Math.floor(Math.random() * this.types.length)]
        }
    }

}

</script>
<template>
    <el-dialog v-model="dialogVisible" title="BibTex" width="50%" draggable>
        
        <span v-if="(item == 1)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;"> 
@article{shi2022lateral,
title={Lateral feature enhancement network for page object detection},
author={Shi, Cao and Xu, Canhui and Bi, Hengyue and Cheng, Yuanzhi and Li, Yuteng and Zhang, Honghong},
journal={IEEE Transactions on Instrumentation and Measurement},
volume={71},
pages={1--10},
year={2022},
publisher={IEEE}
}
                                                         </pre>
        </span>
        <span v-else-if="(item == 2)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{shi2022graph,
title={Graph-based convolution feature aggregation for retinal vessel segmentation},
author={Shi, Cao and Xu, Canhui and He, Jianfei and Chen, Yinong and Cheng, Yuanzhi and Yang, Qi and
Qiu,
Haitao},
journal={Simulation Modelling Practice and Theory},
volume={121},
pages={102653},
year={2022},
publisher={Elsevier}
}
                                                                                                                                                                </pre>
        </span>
        <span v-else-if="(item == 3)">
<pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{bi2022srrv,
title={SRRV: A Novel Document Object Detector Based on Spatial-Related Relation and Vision},
author={Bi, Hengyue and Xu, Canhui and Shi, Cao and Liu, Guozhu and Li, Yuteng and Zhang, Honghong and Qu, Jing},
journal={IEEE Transactions on Multimedia},
year={2022},
publisher={IEEE}
}     
                                                                                                                                                                </pre>
        </span>
        <span v-else-if="(item == 4)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{JSYJ2022111000E, 
author = {李玉腾,史操,许灿辉 & 程远志}, 
title = {基于视觉和文本的多模态文档图像目标检测}, 
journal = {计算机应用研究}, 
volume = {}, 
number = {}, 
year = {}, 
issn = {1001-3695}, 
doi ={10.19734/j.issn.1001-3695.2022.08.0425} 
}
                                                                                                                                                                </pre>
        </span>
        <span v-else-if="(item == 5)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{xu2021end,
title={End-to-end dilated convolution network for document image semantic segmentation},
author={Xu, Can-hui and Shi, Cao and Chen, Yi-nong},
journal={Journal of Central South University},
volume={28},
number={6},
pages={1765--1774},
year={2021},
publisher={Springer}
}
</pre>
        </span>
        <span v-else-if="(item == 6)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{xu2021page,
title={A page object detection method based on mask R-CNN},
author={Xu, Canhui and Shi, Cao and Bi, Hengyue and Liu, Chuanqi and Yuan, Yongfeng and Guo, Haoyan and Chen, Yinong},
journal={IEEE Access},
volume={9},
pages={143448--143457},
year={2021},
publisher={IEEE}
}
</pre>
        </span>
        <span v-else-if="(item == 7)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{tao2014document,
title={Document page structure learning for fixed-layout e-books using conditional random fields},
author={Tao, Xin and Tang, Zhi and Xu, Canhui},
booktitle={Document Recognition and Retrieval XXI},
volume={9021},
pages={158--166},
year={2014},
organization={SPIE}
}
</pre>
        </span>
        <span v-else-if="(item == 8)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{shi2014visual,
title={Visual improvement for bad handwriting based on Monte-Carlo method},
author={Shi, Cao and Xiao, Jianguo and Xu, Canhui and Jia, Wenhua},
booktitle={Imaging and Multimedia Analytics in a Web and Mobile World 2014},
volume={9027},
pages={24--30},
year={2014},
organization={SPIE}
}
</pre>
        </span>
        <span v-else-if="(item == 9)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{shi2014nonlinear,
title={Nonlinear and non-gaussian bayesian based handwriting beautification},
author={Shi, Cao and Xiao, Jianguo and Xu, Canhui and Jia, Wenhua},
booktitle={Computational Imaging XII},
volume={9020},
pages={276--282},
year={2014},
organization={SPIE}
}
</pre>
        </span>
        <span v-else-if="(item == 10)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{shi2014automatic,
title={Automatic generation of Chinese character using features fusion from calligraphy and font},
author={Shi, Cao and Xiao, Jianguo and Xu, Canhui and Jia, Wenhua},
booktitle={The Engineering Reality of Virtual Reality 2014},
volume={9012},
pages={180--186},
year={2014},
organization={SPIE}
}
</pre>
        </span>
        <span v-else-if="(item == 11)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{tao2014contextual,
title={Contextual modeling for logical labeling of PDF documents},
author={Tao, Xin and Tang, Zhi and Xu, Canhui},
journal={Computers \& Electrical Engineering},
volume={40},
number={4},
pages={1363--1375},
year={2014},
publisher={Elsevier}
}
</pre>
        </span>
        <span v-else-if="(item == 12)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{tao2014ground,
title={Ground-truth and performance evaluation for page layout analysis of born-digital documents},
author={Tao, Xin and Tang, Zhi and Xu, Canhui and Gao, Liangcai},
booktitle={2014 11th IAPR International Workshop on Document Analysis Systems},
pages={247--251},
year={2014},
organization={IEEE}
}
</pre>
        </span>
        <span v-else-if="(item == 13)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{xu2013graph,
title={Graph-based layout analysis for pdf documents},
author={Xu, Canhui and Tang, Zhi and Tao, Xin and Li, Yun and Shi, Cao},
booktitle={Imaging and printing in a web 2.0 world iv},
volume={8664},
pages={34--41},
year={2013},
organization={SPIE}
}
</pre>
        </span>
        <span v-else-if="(item == 14)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{shi2013character,
title={Character feature integration of Chinese calligraphy and font},
author={Shi, Cao and Xiao, Jianguo and Jia, Wenhua and Xu, Canhui},
booktitle={Document Recognition and Retrieval XX},
volume={8658},
pages={207--214},
year={2013},
organization={SPIE}
}
</pre>
        </span>
        <span v-else-if="(item == 15)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{xu2013graphic,
title={Graphic composite segmentation for PDF documents with complex layouts},
author={Xu, Canhui and Tang, Zhi and Tao, Xin and Shi, Cao},
booktitle={Document Recognition and Retrieval XX},
volume={8658},
pages={121--130},
year={2013},
organization={SPIE}
}
</pre>
        </span>
        <span v-else-if="(item == 16)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{xu2012integration,
title={Integration of Text Information and Graphic Composite for PDF Document Analysis},
author={Xu, Canhui and Tang, Zhi and Tao, Xin and Shi, Cao},
booktitle={CCF International Conference on Natural Language Processing and Chinese Computing},
pages={13--22},
year={2012},
organization={Springer}
}
</pre>
        </span>
        <span v-else-if="(item == 17)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{shi2012automatic,
title={Automatic generation of Chinese character based on human vision and prior knowledge of calligraphy},
author={Shi, Cao and Xiao, Jianguo and Jia, Wenhua and Xu, Canhui},
booktitle={CCF International Conference on Natural Language Processing and Chinese Computing},
pages={23--33},
year={2012},
organization={Springer}
}
</pre>
        </span>
        <span v-else-if="(item == 18)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@incollection{zou2012pcnn,
title={PCNN-DDF Filter for Color Image},
author={Zou, Beiji and Zhou, Haoyu and Chen, Hao and Shi, Cao},
booktitle={Green Communications and Networks},
pages={803--812},
year={2012},
publisher={Springer}
}
</pre>
        </span>
        <span v-else-if="(item == 19)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{史操2012自适应异步采样运动数据压缩算法,
title={自适应异步采样运动数据压缩算法},
author={史操 and 邹北骥 and 蔡美玲 and 孟志刚 and 陈再良},
journal={电子学报},
volume={40},
number={1},
pages={128},
year={2012}
}

</pre>
        </span>
        <span v-else-if="(item == 20)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{xu2012flotation,
title={Flotation process fault detection using output PDF of bubble size distribution},
author={Xu, Canhui and Gui, Weihua and Yang, Chunhua and Zhu, Hongqiu and Lin, Yiqiu and Shi, Cao},
journal={Minerals Engineering},
volume={26},
pages={5--12},
year={2012},
publisher={Elsevier}
}
    </pre>
        </span>
        <span v-else-if="(item == 21)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{cole2012experimental,
title={Experimental studies and numerical model validation of overflowing 2D foam to test flotation cell crowder designs},
author={Cole, KE and Brito-Parada, PR and Xu, C and Neethling, SJ and Cilliers, JJ},
journal={Chemical Engineering Research and Design},
volume={90},
number={12},
pages={2196--2201},
year={2012},
publisher={Elsevier}
}
</pre>
        </span>
        <span v-else-if="(item == 22)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{article,
author = {Chen, Zailiang and Zou, Beiji and Li, Haibing and Shi, Cao},
year = {2011},
month = {01},
pages = {},
title = {Extraction of a region of interest using orientation feature fusion},
volume = {39},
journal = {Journal of Huazhong University of Science and Technology}
}
</pre>
        </span>
        <span v-else-if="(item == 23)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{陈再良2011基于方向特征融合的感兴趣区域提取算法,
title={基于方向特征融合的感兴趣区域提取算法},
author={陈再良 and 邹北骥 and 李海冰 and 史操},
journal={华中科技大学学报: 自然科学版},
volume={39},
number={12},
pages={102--106},
year={2011}
}
</pre>
        </span>
        <span v-else-if="(item == 24)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{zou2009enhanced,
title={Enhanced hexagonal-based search using direction-oriented inner search for motion estimation},
author={Zou, Bei-Ji and Shi, Cao and Xu, Can-Hui and Chen, Shu},
journal={IEEE transactions on circuits and systems for video technology},
volume={20},
number={1},
pages={156--160},
year={2009},
publisher={IEEE}
}
</pre>
        </span>
        <span v-else-if="(item == 25)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
                                                                                                                                                                </pre>
        </span>
        <span v-else-if="(item == 26)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">

                                                                                                                                                                </pre>
        </span>
        <span v-else-if="(item == 27)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">

                                                                                                                                                                </pre>
        </span>
        <span v-else-if="(item == 28)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{zhou2010clustering,
title={Clustering-driven watershed adaptive segmentation of bubble image},
author={Zhou, Kai-jun and Yang, Chun-hua and Gui, Wei-hua and Xu, Can-hui},
journal={Journal of Central South University of Technology},
volume={17},
number={5},
pages={1049--1057},
year={2010},
publisher={Springer}
}
</pre>
        </span>
        <span v-else-if="(item == 29)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{zou2009automatic,
title={Automatic reconstruction of 3D human motion pose from uncalibrated monocular video sequences based on markerless human motion tracking},
author={Zou, Beiji and Chen, Shu and Shi, Cao and Providence, Umugwaneza Marie},
journal={Pattern Recognition},
volume={42},
number={7},
pages={1559--1571},
year={2009},
publisher={Elsevier}
}
</pre>
        </span>
        <span v-else-if="(item == 30)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{yang2009bubble,
title={Bubble size estimation using interfacial morphological information for mineral flotation process monitoring},
author={Yang, Chun-Hua and Xu, Can-Hui and Mu, Xue-min and Zhou, Kai-Jun},
journal={Transactions of Nonferrous Metals Society of China},
volume={19},
number={3},
pages={694--699},
year={2009},
publisher={Elsevier}
}
</pre>
        </span>
        <span v-else-if="(item == 31)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{yang2009nonparametric,
title={Nonparametric density estimation of bubble size distribution for monitoring mineral flotation process},
author={Yang, Chunhua and Xu, Canhui and Gui, Weihua and Du, Jianjiang},
booktitle={Proceedings of the 48h IEEE Conference on Decision and Control (CDC) held jointly with 2009 28th Chinese Control Conference},
pages={2941--2945},
year={2009},
organization={IEEE}
}
</pre>
        </span>
        <span v-else-if="(item == 32)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{yang2009application,
title={Application of highlight removal and multivariate image analysis to color measurement of flotation bubble images},
author={Yang, Chunhua and Xu, Canhui and Gui, Weihua and Zhou, Kaijun},
journal={International Journal of Imaging Systems and Technology},
volume={19},
number={4},
pages={316--322},
year={2009},
publisher={Wiley Online Library}
}
</pre>
        </span>
        <span v-else-if="(item == 33)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{zou2008markerless,
title={Markerless 3-D human motion tracking for monocular video sequences},
author={Zou, BJ and Chen, S and Peng, XN and Shi, C},
journal={J. Comput.-Aided Design Comput. Graphics},
volume={20},
number={8},
pages={1047--1055},
year={2008}
}
</pre>
        </span>
        <span v-else-if="(item == 34)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{邹北骥2008适用于单目视频的无标记三维人体运动跟踪,
title={适用于单目视频的无标记三维人体运动跟踪},
author={邹北骥 and 陈姝 and 彭小宁 and 史操},
journal={计算机辅助设计与图形学学报},
volume={20},
number={8},
pages={1047--1055},
year={2008}
}
</pre>
        </span>
        <span v-else-if="(item == 35)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@inproceedings{shi2019sentiment,
title={Sentiment Analysis of Home Appliance Comment Based on Generative Probabilistic Model},
author={Shi, Cao and Tao, Ye and Xu, Canhui and Wang, Xiaodong and Wang, Yanzhe and Wang, Zihao},
booktitle={2019 IEEE Fourth International Conference on Data Science in Cyberspace (DSC)},
pages={318--321},
year={2019},
organization={IEEE}
}
</pre>
        </span>
        <span v-else-if="(item == 40)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{wang2018improved,
title={Improved skeleton extraction method considering surface feature of natural micro fractures in unconventional shale/tight reservoirs},
author={Wang, Xin and Guo, Chaohua and He, Sheng and Jiang, Zeyun and Ma, Yongjie},
journal={Journal of Petroleum Science and Engineering},
volume={168},
pages={521--532},
year={2018},
publisher={Elsevier}
}
</pre>
        </span>
        <span v-else-if="(item == 41)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{li2018pore,
title={A pore-skeleton-based method for calculating permeability and capillary pressure},
author={Li, Xinling and Jiang, Zeyun and Ma, Jingsheng and Wang, Xin},
journal={Transport in Porous Media},
volume={124},
pages={767--786},
year={2018},
publisher={Springer}
}
</pre>
        </span>
        <span v-else-if="(item == 42)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{guo2018effect,
title={Effect of pore structure on displacement efficiency and oil-cluster morphology by using micro computed tomography ($\mu$CT) technique},
author={Guo, Chaohua and Wang, Xin and Wang, Hua and He, Sheng and Liu, Hong and Zhu, Peng},
journal={Fuel},
volume={230},
pages={430--439},
year={2018},
publisher={Elsevier}
}
</pre>
        </span>
        <span v-else-if="(item == 43)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{wang2017new,
title={A new method of fast distance transform 3D image based on “neighborhood between voxels in space” theory},
author={Wang, Xin and Yao, Jun and Jiang, Zeyun and Zhang, Qi and Zhang, Zhen and Duan, Liya and Jia, Xinxin},
journal={Chinese Science Bulletin},
volume={62},
number={15},
pages={1662--1669},
year={2017},
publisher={Science in China Press}
}
</pre>
        </span>
        <span v-else-if="(item == 44)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{wang2018extraction,
title={Extraction and identification methods of micro-fractured characteristics information in pore space of porous media based on morphological theory},
author={Wang, X and Jiang, Z and Yao, J and others},
journal={China Acad J Elect Publishing House},
volume={63},
number={5-6},
pages={579--589},
year={2018}
}
</pre>
        </span>
        <span v-else-if="(item == 45)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{XTYY202204008,
author = {王广涵,程远志,史操 &amp; 许灿辉},
title = {基于注意力机制多任务的肺结节癌变风险判断},
journal = {计算机系统应用},
volume = {},
number = {117-122},
year = {2022},
issn = {1003-3254},
doi ={10.15888/j.cnki.csa.008446}
}

</pre>
        </span>
        <span v-else-if="(item == 46)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{HLGX202206014,
author = {刘宇博,刘国柱,史操 &amp; 许灿辉},
title = {多视图与注意力机制结合的肺结节检测算法},
journal = {哈尔滨理工大学学报},
volume = {},
number = {115-123},
year = {2022},
issn = {1007-2683},
doi ={10.15938/j.jhust.2022.06.014}
}

</pre>
        </span>
        <span v-else-if="(item == 47)">
            <pre style="word-wrap: break-word; white-space: pre-wrap;">
@article{zhang2023hsca,
title={HSCA-Net: A Hybrid Spatial-Channel Attention Network in Multiscale Feature Pyramid for Document Layout Analysis},
author={Zhang, Honghong and Xu, Canhui and Shi, Cao and Bi, Hengyue and Li, Yuteng and Mian, Sami},
journal={Journal of Artificial Intelligence and Technology},
volume={3},
number={1},
pages={10--17},
year={2023}
}
</pre>
        </span>
       


    </el-dialog>

    <!-- 时间线的每个item，后续使用v-for进行完善 -->
    <el-timeline>
        <el-timeline-item timestamp="2023" placement="top" size="large" icon="MoreFilled" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Zhang, H., Xu, C., Shi, C., Bi, H., Li, Y., & Sami Mian. (2022). HSCA-Net: A Hybrid Spatial-Channel Attention Network in Multiscale Feature Pyramid for Document Layout Analysis. <b><em>Journal of Artificial Intelligence and Technology</em></b>, 3(1), 10–17. https://doi.org/10.37965/jait.2022.0145</p>
                <el-button class="button"><el-link
                        href="/papers/students/2023 HSCA-Net_张洪红.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="dialogVisible = true, item = 47">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>



            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023" placement="top" size="large" icon="MoreFilled" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Cao Shi, Xin Wang, Canhui Xu. Graph-based convolution feature aggregation for enhancement of pore segmentation in mineral CT image.<b><em>15th Annual International Conference on Porous Media, InterPore2023</em></b>.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/1.jpg"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>Accepted</el-link></el-button>
                <!-- <el-button class="button" @click="dialogVisible = true, item = 36">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button> -->



            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023" placement="top" size="large" icon="MoreFilled" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Canhui Xu, Cao Shi, Xin Wang, Zhaoyan Zhong. Borehole image reconstruction based on transformer and spatial consistency.<b><em>15th Annual International Conference on Porous Media, InterPore2023</em></b>.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2.jpg"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>Accepted</el-link></el-button>
                <!-- <el-button class="button" @click="dialogVisible = true, item = 37">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button> -->



            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023" placement="top" size="large" icon="MoreFilled" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Qijie Huang, Zhaoyan Zhong, Canhui Xu, Cao Shi, Dongxing Du, Xin Wang. 3D Digtal Rocks Reconstruction with Mineral Information based on the Wasserstein-GAN Method.<b><em>15th Annual International Conference on Porous Media, InterPore2023</em></b>.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/3.jpg"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>Accepted</el-link></el-button>
                <!-- <el-button class="button" @click="dialogVisible = true, item = 38">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button> -->



            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023" placement="top" size="large" icon="MoreFilled" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Liguo Niu, Yingqi Zhang, Canhui Xu, Cao Shi, Dongxing Du, Xin Wang. Study on Super-resolution of Shale Images Guided by Semantic Information.<b><em>15th Annual International Conference on Porous Media, InterPore2023</em></b>.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/4.jpg"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>Accepted</el-link></el-button>
                <!-- <el-button class="button" @click="dialogVisible = true, item = 39">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button> -->



            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022" placement="top" size="large" icon="MoreFilled" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Cao Shi, Canhui Xu, Hengyue Bi, Yuanzhi Cheng, Yuteng Li, Honghong Zhang. Lateral
                    Feature
                    Enhancement Network for Page Object Detection[J]. <b><em>IEEE Transactions on Instrumentation and
                            Measurement</em></b>, 2022, 71:1-10</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2022 Lateral Feature Enhancement Network for Page Object Detection.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="dialogVisible = true, item = 1">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>



            </el-card>
        </el-timeline-item>

        <!--  -->
        <el-timeline-item timestamp="2022" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Cao Shi, Canhui Xu, Jianfei He, Yinong Chen, Yuanzhi Cheng, Qi Yang, Haitao Qiu. Graph-based
                    convolution feature aggregation for retinal vessel segmentation[J]. <b><em>Simulation Modelling
                            Practice and Theory</em></b>,2022</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2022 Graph-based convolution feature aggregation for retinal vessel segmentation.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 2)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>



            </el-card>
        </el-timeline-item>
        <!--  -->
        <el-timeline-item timestamp="2022" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Hengyue Bi, Canhui Xu, Cao Shi, Guozhu Liu, Yuteng Li, Honghong Zhang, Jing Qu. SRRV: A Novel
                    Document Object Detector Based on Spatial-Related Relation and Vision[J]. <b><em>IEEE Transactions
                            on
                            Multimedia</em></b>, 2022.</p>
                <el-button class="button"><el-link href="/papers/students/2022 SRRV_A_Novel_Document_Object_Detector_Based_on_Spatial-Related_Relation_and_Vision.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 3)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>李玉腾,史操,许灿辉等.基于视觉和文本的多模态文档图像目标检测[J/OL].<b>计算机应用研究</b>:1-6[2023-02-21].</p>
                <el-button class="button"><el-link href="/papers/students/2022 基于视觉和文本的多模态文档图像目标检测_李玉腾.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 4)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>王广涵,程远志,史操等.基于注意力机制多任务的肺结节癌变风险判断[J].<b>计算机系统应用</b>,2022,31(04):117-122.</p>
                <el-button class="button"><el-link href="/papers/students/2022 基于注意力机制多任务的肺结节癌变风险判断_王广涵.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 45)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>刘宇博,刘国柱,史操等.多视图与注意力机制结合的肺结节检测算法[J].<b></b>哈尔滨理工大学学报,2022,27(06):115-123.</p>
                <el-button class="button"><el-link href="/papers/students/2022 基于视觉和文本的多模态文档图像目标检测_李玉腾.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 46)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Canhui Xu, Cao Shi, Yinong Chen. End-to-end dilated convolution network for document image semantic
                    segmentation[J]. <b><em>Journal of Central South University</em></b>, 2021, 28(6): 1765-1774.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2021 End-to-end dilated convolution network for document image semantic segmentation.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 5)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Canhui Xu, Cao Shi, Hengyue Bi, Chuanqi Liu, Yongfeng Yuan, Haoyan Guo, Yinong Chen. A Page Object
                    Detection Method Based on Mask R-CNN[J]. <b><em>IEEE Access</em></b>, 2021, 9: 143448-143457.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2021 A Page Object Detection Method Based on Mask R-CNN.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 6)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>C. Shi, Y. Tao, C. Xu, X. Wang, Y. Wang and Z. Wang,Sentiment Analysis of Home Appliance Comment Based on Generative Probabilistic Model,<b><em>2019 IEEE Fourth International Conference on Data Science in Cyberspace (DSC)</em></b>, Hangzhou, China, 2019, pp. 318-321.</p>
                <!-- <el-button class="button"><el-link
                        href="/papers/teachers/2019 Sentiment Analysis of Home Appliance Comment Based on Generative Probabilistic Model.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button> -->
                <el-button class="button" @click="(dialogVisible = true, item = 35)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2019" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Xin Wang, Chaohua Guo, et al.Improved skeleton extractionmethod considering surface feature of natural micro-fractures in unconventional shale/tight reservoirs[J]. <b><em>Journal of Petroleum Science and Engineering</em></b>,2018,168:521-532.</p>
               
                <el-button class="button" @click="(dialogVisible = true, item = 40)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Li X, Jiang Z , Ma J & Wang X. A Pore-Skeleton-Based Method for Calculating Permeability and Capillary Pressure[J]. <b><em>Transport in Porous Media</em></b>, 2018,1-20.</p>
               
                <el-button class="button" @click="(dialogVisible = true, item = 41)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Chaohua Guo, Xin.Wang*. Effect of pore structure on displacement efficiency andoil-cluster morphology by using micro computed tomography(u-CT) techniquel[J]. <b><em>Fuel</em></b>,2018,230:430-439.</p>
               
                <el-button class="button" @click="(dialogVisible = true, item = 42)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2017" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Wang X, Yao J, Jiang Z Y, et al. A new method of fast distance transform 3D image based on ‘neighborhood between voxels in space’ theory[J]. <b><em>Chinese Science Bulletin</em></b>, 2017, 62: 1662-1669.</p>
               
                <el-button class="button" @click="(dialogVisible = true, item = 43)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2017" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Wang X, Jiang Z Y, Yao J, et al. Extraction and identification methods of micro-fractured characteristics information in pore spaceof porous media based on morphological theory[J]. <b><em>Chinese Science Bulletin</em></b>, 2017, 63(5-6), 579-589.</p>
               
                <el-button class="button" @click="(dialogVisible = true, item = 44)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2014-02-06" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Xin Tao, Zhi Tang, Canhui Xu. Document Page Structure Learning for Fixed-layout E-books Using
                    Conditional Random Fields. SPIE 9021, <b><em>Document Recognition and Retrieval XXI</em></b>,
                    90210I-(1~9). 6 Feb
                    2014, Oral, U.S. San Francisco . (EI)</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2014 Document Page Structure Learning for Fixed-layout E-books Using Conditional Random Fields.PDF"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 7)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2014-02-05" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Cao Shi, Jianguo Xiao, Canhui Xu, Wenhua Jia. Visual improvement for bad handwriting based on
                    Monte-Carlo method. SPIE 9027, <b><em>Imaging and Multimedia Analytics in a Web and Mobile World
                            2014</em></b>,
                    902708-(1~7). 5 Feb 2014, Oral, U.S. San Francisco . (EI)</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2014 Visual Improvement for Bad Handwriting based on Monte-Carlo Method.PDF"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 8)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2014-02-05" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Cao Shi, Jianguo Xiao, Canhui Xu, Wenhua Jia. Nonlinear and non-Gaussian Bayesian-based handwriting
                    beautification. SPIE 9020, <b><em>Computational Imaging XII</em></b>, 902012-(1~7). 5 Feb 2014,
                    Poster, U.S. San
                    Francisco . (EI) </p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2014 Nonlinear and Non-Gaussian Bayesian Based Handwriting Beautification.PDF"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 9)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2014-01-06" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Cao Shi, Jianguo Xiao, Canhui Xu, Wenhua Jia. Automatic generation of Chinese character using
                    features fusion from calligraphy and font. SPIE 9012, <b><em>The Engineering Reality of Virtual
                            Reality
                            2014</em></b>, 90120N-(1~7). 6 Jan 2014, Poster, U.S. San Francisco .</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2014 Automatic Generation of Chinese Character Using Features Fusion from Calligraphy and Font.PDF"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 10)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2014" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Xin Tao, Zhi Tang, Canhui Xu. Contextual Modeling for Logical Labeling of PDF Documents.
                    <b><em>Computers and Electrical Engineering</em></b>, 2014, 40, 1363-1375. EI, SCI.
                </p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2014 Contextual modeling for logical labeling of PDF documents.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 11)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2014" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Xin Tao, Zhi Tang, Canhui Xu, Liangcai Gao. Ground-truth and Performance Evaluation for Page Layout
                    Analysis of Born-digital Documents. 2014 .<b><em>11th IAPR International Workshop on Document
                            Analysis
                            Systems</em></b>. EI.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2014 Ground-truth and Performance Evaluation for Page Layout Analysis of Born-digital Documents.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 12)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2013-03-21" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Canhui xu, zhi Tang, Xin Tao, Cao Shi. Graph-based layout analysis for PDF documents. Proc. SPIE
                    8664, <b><em>Imaging and Printing in a Web 2.0 World IV</em></b>, 866407-1~8. March 21, 2013. ( EI )
                </p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2013 Graph-based Layout Analysis for PDF Documents.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 13)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2013-02-04" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Cao Shi, Jianguo Xiao, Wenhua Jia, Canhui Xu. Character Feature Integration of Chinese Calligraphy
                    and Font. Proc. SPIE 8658, <b><em>Document Recognition and Retrieval XX</em></b>, 86580M-1~8.
                    February 4, 2013. ( EI
                    )</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2013 Character Feature Integration of Chinese Calligraphy and Font.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 14)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2013-02-04" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Canhui xu, zhi Tang, Xin Tao, Cao Shi. Graphic Composite Segmentation for PDF Documents with Complex
                    Layouts. Proc. SPIE 8658, <b><em>Document Recognition and Retrieval XX</em></b>, 86580E-1~10.
                    February 4, 2013. ( EI
                    )</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2013 Graphic Composite Segmentation for PDF Documents with Complex Layouts.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 15)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2013" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Canhui xu, zhi Tang, Xin Tao, Cao Shi. Integration of Text Information and Graphic Composite for PDF
                    Document Analysis. <b><em>The 1st CCF Conference on Natural Language Processing &
                            Chinese
                            Computing, NLPCC 2012</em></b>, Springer CCIS 333, pp.13-22. 2012. ( EI )</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2013 Integration of Text Information and Graphic Composite for PDF Document Analysis.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 16)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2012" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Cao Shi, Jianguo Xiao, Wenhua Jia, Canhui Xu. Automatic Generation of Chinese Character Based on
                    Human Vision and Prior Knowledge of Calligraphy. <b><em>The 1st CCF Conference on Natural Language
                            Processing & Chinese Computing, NLPCC 2012</em></b>, Springer CCIS 333, pp.23-33. 2012. ( EI
                    )</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2012 Automatic Generation of Chinese Character Based on Human Vision and Prior Knowledge of Calligraphy.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 17)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2012" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Beiji Zou, Haoyu Zhou, Hao Chen, Cao Shi. PCNN-DDF Filter for Color Image. <b><em>Green
                            Communications and
                            Networks</em></b>, GCN 2011. 2012, 803-812.</p>
                <el-button class="button"><el-link href="https://link.springer.com/chapter/10.1007/978-94-007-2169-2_96"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 18)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2012" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>史操, 邹北骥, 蔡美玲, 孟志刚, 陈再良. 自适应异步采样运动数据压缩算法. <b>电子学报
                </b>
                    , 2012,40(1):128-133. ( EI )</p>
                <el-button class="button"><el-link href="/papers/teachers/2012 自适应异步采样运动数据压缩算法.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 19)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2012" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Canhui Xu, Weihua Gui, Chunhua Yang, Hongqiu Zhu, Yiqiu Lin, Cao Shi. Flotation Process Fault
                    Detection Using Output PDF of Bubble Size Distribution. <b><em>Minerals Engineering</em></b>. 2012,
                    26:5-12. ( SCI,
                    EI )</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2012 Flotation process fault detection using output PDF of bubble size distribution.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 20)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2012" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>K.E. Cole, P.R. Brito-Parada, Canhui Xu, S.J. Neethling, J.J. Cilliers. Experimental Studies and
                    Numerical Model Validation of Overflowing 2D Foam to Test Flotation Cell Crowder Designs.
                    <b><em>Chemical
                            Engineering Research and Design</em></b>. 2012, 90(12), 2196-2201. EI, SCI.
                </p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2012 Experimental studies and numerical model validation of overﬂowing 2D foam to test ﬂotation cell crowder designs.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 21)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2011" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Zailiang Chen, Beiji Zou, Haibing Li, Cao Shi. Extraction of Region of Interest Using Orientation
                    Feature Fusion. <b><em>Journal of Huazhong University of Science & Technology (Natural Science
                            Edition)</em></b>.
                    2011,39(12):102-106. ( in Chinese )</p>
                <el-button class="button"><el-link
                        href="https://www.researchgate.net/publication/267471507_Extraction_of_a_region_of_interest_using_orientation_feature_fusion"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 22)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2011" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>陈再良, 邹北骥, 李海冰, 史操. 基于方向特征融合的感兴趣区域提取算法. <b>华中科技大学学报(自然科学版)</b>.
                    2011,39(12):102-106.电子学报</p>
                <el-button class="button"><el-link
                        href="https://kns.cnki.net/kcms/detail/detail.aspx?dbcode=CJFD&dbname=CJFD2011&filename=HZLG201112038&uniplatform=NZKPT&v=LEx9qAlGNqHz2WrKqijvYoEmwMXLLR5vMXfq4XNeAWU65RD10ZedipxagPojecm0"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 23)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2010" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Bei-Ji Zou, Cao Shi, Can-Hui Xu, Shu Chen. Enhanced Hexagonal-Based Search Using Direction-Oriented
                    Inner Search for Motion Estimation. <b><em>IEEE Transactions on Circuits and Systems for Video
                            Technology</em></b>. 2010,20(1):156-160. ( SCI )</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2010 Enhanced Hexagonal-Based Search Using Direction-Oriented Inner Search for Motion Estimation.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 24)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2010" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Zhigang Meng, Beiji Zou, Cao Shi. Introducing Direct Interaction Mechanism of Ant Colony Foraging
                    Simulation. <b><em>2010 3rd International Conference on Computational Intelligence and Industrial
                            Application (PACIIA 2010)</em></b>, 438-442. ( EI )</p>
                <el-button class="button"><el-link href="/" target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 25)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2010" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Meiling Cai, Beiji Zou, Cao Shi, Guojiang Xin, Jianfeng Li. Modeling Human Motion Based on Spline
                    Curve. <b><em>China Computer Federation Proceedings: CAD/CG' 2010</em></b>. 124-131. ( in Chinese )
                </p>
                <el-button class="button"><el-link href="/" target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 26)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2010" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>蔡美玲, 邹北骥, 史操, 辛国江, 李建峰. 基于样条曲线的人体运动建模. <b>全国第16届计算机辅助设计与图形学学术会议（CAD/CG' 2010）</b>
                    2010,7:124-131.</p>
                <!-- <el-button class="button"><el-link href="/" target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button> -->
                <el-button class="button" @click="(dialogVisible = true, item = 27)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2010" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Kaijun Zhou, Chunhua Yang, Weihua Gui, Canhui Xu. Clustering-driven Watershed Adaptive Segmentation
                    of Bubble Image. <b><em>Journal of Central South University of Technology</em></b>. 2010, 17(5),
                    1049-1057. EI, SCI.
                </p>
                <el-button class="button"><el-link href="https://link.springer.com/article/10.1007/s11771-010-0597-y"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 28)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2009" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Beiji Zou, Shu Chen, Cao Shi, Umugwaneza Marie Providence. Automatic Reconstruction of 3D Human
                    Motion Pose from Uncalibrated Monocular Video Sequences Based on Markerless Human Motion Tracking.
                    <b><em>Pattern Recognition</em></b>. 2009,42(7):1559-1571.
                </p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2009 Automatic reconstruction of 3Dhuman motion pose from uncalibrated monocular video sequences based on markerless human motion tracking.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 29)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2009" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Yang Chunhua, Xu Canhui, Mu Xueming and Zhou Kaijun. Bubble Size Estimation Using Interfacial
                    Morphological Information for Mineral Flotation Process Monitoring. <b><em>Transactions of
                            Nonferrous
                            Metals Society of China</em></b>, 2009, 19(3):694-699. EI, SCI.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2009 Bubble size estimation using interfacial morphological information for mineral flotation process monitoring.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 30)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2009" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Yang Chunhua, Xu Canhui, Weihua Gui, Du Jianjiang. Nonparametric Density Estimation of Bubble Size
                    Distribution for Monitoring Mineral Flotation Process. <b><em>In 48th IEEE Conference on Decision
                            and
                            Control</em></b>, Shanghai, 2009, 2941-2945. EI.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2009 Nonparametric Density Estimation of Bubble Size Distribution for Monitoring Mineral Flotation Process .pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 31)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2009" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>YChunhua Yang, Canhui Xu, Weihua Gui, Kaijun Zhou. Application of Highlight Removal and Multivariate
                    Image Analysis to Color Measurement of Flotation Bubble Images. <b><em>International Journal of
                            Imaging
                            Systems and Technology</em></b>. 2009, 19, 316-322.EI, SCI.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2009 Application of Highlight Removal and Multivariate Image Analysis to Color Measurement of Flotation Bubble Images.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 32)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2008" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>Beiji Zou, Shu Chen, Xiaoning Peng, Cao Shi. Markerless 3D Human Motion Tracking for Monocular Video
                    Sequences. <b><em>Journal of Computer-Aided Design & Computer Graphics</em></b>.
                    2008,20(8):1407-1055. (in Chinese)
                    ( EI )</p>
                <el-button class="button"><el-link href="/" target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 33)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2008" placement="top" :type="randomTypes()">
            <el-card shadow="hover">
                <p>邹北骥, 陈姝, 彭小宁, 史操. 适用于单目视频的无标记三维人体运动跟踪. <b>计算机辅助设计与图形学学报</b>. 2008,20(8):1407-1055.</p>
                <el-button class="button"><el-link
                        href="/papers/teachers/2008 适用于单目视频的无标记三维人体运动跟踪.pdf"
                        target="_blank"><el-icon>
                            <Link />
                        </el-icon>PDF</el-link></el-button>
                <el-button class="button" @click="(dialogVisible = true, item = 34)">
                    <font color='LightSkyBlue'><el-icon>
                            <DocumentCopy />
                        </el-icon>Bib</font>
                </el-button>
            </el-card>
        </el-timeline-item>




    </el-timeline>
</template>

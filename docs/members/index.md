---
layout: page
title: 团队成员
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const coreMembers = [
  {
    avatar: '/imgs/avatars/史操.jpg',
    name: '史操',
    title: '指导老师',
    desc: 'Cao Shi received Ph. D degree in 2011 from Central South University, and now works with the School of Information Science and Technology, Qingdao University of Science and Technology, China. He was a postdoctoral research fellow at Peking University from 2011 to 2013. His research interests include image, video processing, and artificial intelligence.',

  },
    {
    avatar: '/imgs/avatars/许灿辉.jpg',
    name: '许灿辉',
    title: '指导老师',
    desc: 'Canhui Xu received her Ph.D. degree from Central South University, China, in 2011. She is currently working in the School of Information Science and Technology, Qingdao University of Science and Technology, China. She was a postdoctoral research fellow at Peking University from 2012 to 2014. She was a visiting scholar at Arizona State University, USA, from 2019 to 2020, and a visiting Ph.D. student at Imperial Collage London, UK, from 2009 to 2010. Her research interests include deep learning, document layout analysis and image understanding.',

  },
]

const tutorsOthers = [
  {
    avatar: '/imgs/avatars/王鑫.jpg',
    name: '王鑫',
    title: '指导老师',
    desc: 'Wang Xin received his Ph.D. degree from China University of Petroleum, China, in 2013. Currently working as Associate Professor for School of Information Science and Technology, Qingdao University of Science and Technology, China. He was the director of Pore-scale Imaging Lab in Qingdao City from 2017 to 2020, also a doctoral supervisor of Graduate School of International Studies, Shandong Academy of Sciences in 2018-2020. He was a visiting scientist at Imperial Collage London, Herriot-Watt University and Far East Branch Russian Academy of Sciences. He participated in the National Joint-Scientific Expedition team with Russia and Japan in the year of 2016 and 2017. His research interests include 2D&3D image processing，computer vision & artificial intelligence.',

  },
    {
    avatar: '/imgs/avatars/程远志.jpg',
    name: '程远志',
    title: '指导老师',
    desc: 'Yuanzhi Cheng received the Ph.D. degree from the Harbin Institute of Technology, Harbin, China. He was with the School of Computer Science and Technology, Harbin Institute of Technology, until 2020. He is currently a professor with the School of Information Science and Technology, Qingdao University of Science and Technology, Qingdao, China. His research interests include pattern recognition, image processing, and computer-assisted surgical system.',

  },
]

const student20 =[
  {
    avatar: '/imgs/avatars/毕恒悦.jpg',
    name: '毕恒悦',
    title: '2020级',
    desc: 'Hengyue Bi currently working toward the M.S. degree with the School of Information Science and Technology, Qingdao University of Science and Technology, Qingdao, China. His research interests include object detection, document layout analysis, scene text understanding, and 3D reconstruction.',

  },
    {
    avatar: '/imgs/avatars/李玉腾.jpg',
    name: '李玉腾',
    title: '2020级',
    desc: 'Yuteng Li received B.E. degree from Jining Medical University in 2016. Now he is  a Master student majoring in Computer technology degree at Qingdao University of Science and Technology,under the supervision of Ph.D. Cao Shi. His research interests include deep learning, computer vision, image processing.',

  },
    {
    avatar: '/imgs/avatars/张洪红.jpg',
    name: '张洪红',
    title: '2020级',
    desc: 'Honghong Zhang  is currently pursuing the M.S. degree with School of Information Science and Technology, Qingdao University of Science and Technology, Shandong, China. Her research interests include artificial intelligence, computer vision, image processing.',

  },

  {
    avatar: '/imgs/avatars/李冲冲.jpg',
    name: '李冲冲',
    title: '2020级',
    desc: 'Chongchong Li received B.E. degree from Zaozhuang University in 2014. Now he is a Master student majoring in Computer technology degree at Qingdao University of Science and Technology,under the supervision of Ph.D. Cao Shi. His research interests include deep learning, computer vision, image processing.',
  },

  {
    avatar: '/imgs/avatars/C01-20-潘英杰.jpg',
    name: '潘英杰',
    title: '2020级',
    desc: 'Yingjie Pan is currently working for a master\'s degree in the School of Information Science and Technology, Qingdao University of Science and Technology. His research interests include deep learning，computer vision, medical image registration.',
  },

  {
    avatar: '/imgs/avatars/C02-20-王烨楠.jpg',
    name: '王烨楠',
    title: '2020级',
    desc: 'Yenan Wang is currently studying for her master\'s degree in the College of Information Science and Technology at Qingdao University of Science and Technology in Qingdao, China. Her main research field is medical image processing, and the specific research direction is the classification and localization of chest radiographs.',
  },

  {
    avatar: '/imgs/avatars/C03-20-黄长见.jpg',
    name: '黄长见',
    title: '2020级',
    desc: 'Changjian Huang graduated from the Zhongyuan University of Technology in 2019 with an engineering degree. Now he is a postgraduate student in software engineering at Qingdao University of Science and Technology, and his tutor is Professor Yuanzhi Cheng. His research interests include deep learning, computer vision, and medical image processing.',
  },
  {
    avatar: '/imgs/avatars/C04-20-刘豪.jpg',
    name: '刘豪',
    title: '2020级',
    desc: 'Liu Hao, an outstanding graduate of Changchun University of Technology in 2020, received a bachelor\'s degree in engineering. Now he is a Master student majoring in Computer Science and Technology degree at Qingdao University of Science and Technology, under the guidance of Professor Cheng Yuanzhi. His research interests include deep learning, computer vision, and medical image segmentation.',
  },

]

const student21 =[
  {
    avatar: '/imgs/avatars/何健飞.jpg',
    name: '何健飞',
    title: '2021级',
	desc: 'Jianfei He received B.E. degree from Hebei University of Science and Technology in 2021. Now he is  a Master student majoring in Computer Science and Technology degree at Qingdao University of Science and Technology, under the supervision of Ph.D. Canhui Xu . His research interests include deep learning, computer vision, and medical image segmentation.',

  },
  {
    avatar: '/imgs/avatars/王翔.jpg',
    name: '王翔',
    title: '2021级',
	desc: 'My name is Xiang Wang.I am a Postgraduate student majoring in SE in QUST.I love gaming(like Snooker offline, LOL on-line), programming(like Python, Cplusplus, lua and nothing else) and sleeping most and regard peace as my destination.',

  },
  {
    avatar: '/imgs/avatars/陈文达.jpg',
    name: '陈文达',
    title: '2021级',
	desc: 'I graduated from Qingdao University of Science and Technology majoring in Computer Science and Technology in 2019. Now I am studying for a master‘s degree in Electronic Information in Qingdao University of Science and Technology,under the supervision of Ph.D. Cao Shi .My research interests include computer vision, image processing and medical image segmentation.',
  },
  {
    avatar: '/imgs/avatars/邱海韬.jpg',
    name: '邱海韬',
    title: '2021级',
	desc: 'Haitao Qiu received B.E. degree from Qingdao Agricultural University. Now I am  a Master student majoring in Electronic and Information Engineering degree at Qingdao University of Science and Technology, under the supervision of Ph.D. Cao Shi. My research interests include deep learning, computer vision, medical image segmentation.',
  },
  {
    avatar:  '/imgs/avatars/杨琦.jpg',
    name: '杨琦',
    title: '2021级',
	desc: 'Qi Yang currently working toward the M.S. degree with the School of Information Science and Technology,Qingdao University of Science and Technology, Qingdao, China. His research interests include object detection,image segmentation,panoptic segmentation. Sometimes he also develops frontend, such as Vue (this website is built with Vue, more precisely, Vitepress).',
  },
  {
    avatar:  '/imgs/avatars/王鑫06-21-仲昭岩.jpg',
    name: '仲昭岩',
    title: '2021级',
	desc: 'Zhaoyan Zhong received his Bachelor of Engineering degree from Qingdao University of Science and Technology in 2021. He is currently a master\'s student in Computer Science and Technology at Qingdao University of Science and Technology, under the supervision of Prof. Wang Xin. His research interests include deep learning, computer vision and logging image restoration.',
  },
  {
    avatar:  '/imgs/avatars/王鑫07-21-黄奇杰.jpg',
    name: '黄奇杰',
    title: '2021级',
	desc: 'QiJie Huang is currently working toward the M.S. degree with the School of Information Science and Technology, Qingdao University of Science and Technology, under the supervision of Prof. Wang Xin. His research interests include deep learning, computer vision,and 3D mineral reconstruction.',
  },
  {
    avatar:  '/imgs/avatars/王鑫08-21-赵相欣.jpg',
    name: '赵相欣',
    title: '2021级',
	desc: 'QiJie Huang is currently working toward the M.S. degree with the School of Information Science and Technology, Qingdao University of Science and Technology, under the supervision of Prof. Wang Xin. His research interests include deep learning, computer vision,and 3D mineral reconstruction.',
  },
  {
    avatar:  '/imgs/avatars/C05-21-赵东.jpg',
    name: '赵东',
    title: '2021级',
	desc: 'Dong Zhao is currently pursuing the M.S. degree with School of Information Science and Technology, Qingdao University of Science and Technology, under the supervision of Prof. Yuanzhi Cheng. His research interests include deep learning, computer vision, medical image segmentation and Marine organism classification.',
  },
  {
    avatar:  '/imgs/avatars/C06-21-王南南.jpg',
    name: '王南南',
    title: '2021级',
	desc: 'Nannan Wang is currently pursuing the M.S. degree with School of Information Science and Technology, Qingdao University of Science and Technology. His research interests include deep learning, medical image segmentation and tumor segmentation.',
  },
  {
    avatar:  '/imgs/avatars/C07-21-任玉涛.jpg',
    name: '任玉涛',
    title: '2021级',
	desc: 'Yutao Ren received his bachelor\'s degree from Qingdao University of Science and Technology in 2021. Now he is studying for a master\'s degree in electronic information from Qingdao University of Science and Technology. His tutor is Professor Yuanzhi Cheng. His professional knowledge is mainly in deep learning. His main research directions include computer vision and medical image segmentation.',
  },
  {
    avatar:  '/imgs/avatars/C08-21-胡帅.jpg',
    name: '胡帅',
    title: '2021级',
	desc: 'Shuai Hu graduated from Qingdao University of Science and Technology in 2020 and is now a master student in computer science and technology at Qingdao University of Science and Technology, under the supervision of Ph.D. Yuanzhi Cheng. His research interests include deformable image registration, image processing and medical image segmentation.',
  },
  {
    avatar:  '/imgs/avatars/C09-21-李忠昊.jpg',
    name: '李忠昊',
    title: '2021级',
	desc: 'Zhonghao Li received his Bachelor of Science degree from Hohai University. He is now a master student of Computer Science and Technology in Qingdao University of Science and Technology under the supervision of Professor Yuanzhi Cheng. His research focuses on deep learning, specifically medical image segmentation.',
  },
  {
    avatar:  '/imgs/avatars/C10-21-于生正.jpg',
    name: '于生正',
    title: '2021级',
	desc: 'Shengzheng Yu received B.E. degree from Qufu Normal University in 2021. Now, he is a Master student majoring in Electronic Information in Qingdao University of Science &Technology, under the supervision of Prof. Yuanzhi Cheng. His reserach interests include computer vision, Marine organism classification and recognition, medical image segmentation and so on.',
  },
]

const student22 =[
  {
    avatar: '/imgs/avatars/袁正一.jpg',
    name: '袁正一',
    title: '2022级',
	desc: 'Zhengyi Yuan received B.E. degree from Qingdao University of Science and Technology in 2021.Now he is a Master student majoring in Software Engineering degree at Qingdao University of Science and Technology,under the supervision of Ph.D. CaoShi. He research interests include deep learning, computer vision, image processing.',
  },
  // {
  //   avatar: '/imgs/avatars/张栋.jpg',
  //   name: '张栋',
  //   title: '2022级',
	// desc: 'Dong Zhang received B.E. degree from XiHua University in 2021. Now he is  a Master student majoring in Computer technology degree at Qingdao University of Science and Technology,under the supervision of Ph.D. Canhui Xu. His research interests include deep learning, computer vision, image processing.',
  // },
  {
    avatar: '/imgs/avatars/谢彧.jpg',
    name: '谢彧',
    title: '2022级',
	desc: 'Xie Yu is currently pursuing the M.S. degree with School of Information Science and Technology, Qingdao University of Science and Technology, Shandong. He is interested in artificial intelligence, and his research focuses on computer vision.',
  },
  {
    avatar: '/imgs/avatars/王鑫01-22-牟鑫涛.jpg',
    name: '牟鑫涛',
    title: '2022级',
	desc: 'XinTao Mou received B.E. degree from Weifang University in 2021. Now he is a Master student majoring in Computer Technology degree at Qingdao University of Science and Technology,under the supervision of Prof. Wang Xin. His research interests include deep learning, computer vision, image processing.',
  },
  {
    avatar: '/imgs/avatars/王鑫02-22-刘艳霞.jpg',
    name: '刘艳霞',
    title: '2022级',
	desc: 'Liu Yanxia is currently working toward the M.S. degree with the School of Information Science and Technology, Qingdao University of Science and Technology, Qingdao, China,under the supervision of Prof. Xin Wang. Her research interests include artificial intelligence, computer vision, image processing.',
  },
  {
    avatar: '/imgs/avatars/王鑫03-22-张英琦.jpg',
    name: '张英琦',
    title: '2022级',
	desc: 'Yingqi Zhang received her bachelor\'s degree in 2022. Now,she is a Master student majoring in Computer Technology degree at Qingdao University of Science and Technology, under the supervision of Prof.Wang Xin. Her research interests include computer vision,image reconstruction and permeability prediction.',
  },
  {
    avatar: '/imgs/avatars/王鑫04-22-牛力国.jpg',
    name: '牛力国',
    title: '2022级',
	desc: 'Liguo Niu is currently working toward the M.S. degree with the School of Information Science and Technology at Qingdao University of Science and Technology, under the supervision of Prof. Wang Xin. His research interests include deep learing, computer vision and image processing.',
  },
  {
    avatar: '/imgs/avatars/王鑫05-22-贵雪峰.jpg',
    name: '贵雪峰',
    title: '2022级',
	desc: 'Xuefeng Gui is currently studying for the M.S. degree at Qingdao University of Science and Technology, Shandong Province, under the supervision of Prof. Wang Xin. He is interested in computer vision, and his current research focus on target detection and tracking.',
  },


  {
    avatar: '/imgs/avatars/C11-22-王子轩.jpg',
    name: '王子轩',
    title: '2022级',
	desc: 'Zixuan Wang, graduated from Qingdao University of Science and Technology in 2022. He is continuing to do the M.S. degree at the same university. He is majoring in computer technology under the supervision of Ph.D. Yuanzhi Cheng. His research domains include deep learning, computer vision and image processing.',
  },

  {
    avatar: '/imgs/avatars/C12-22-朱庚鑫.jpg',
    name: '朱庚鑫',
    title: '2022级',
	desc: 'Gengxin Zhu received B.E. degree from Qingdao University of Science and Technology in 2022.Now he is a Master student majoring in Computer technology degree at Qingdao University of Science and Technology. His research interests include deep learning, computer vision, image processing.',
  },

  {
    avatar: '/imgs/avatars/C13-22-许浩天.jpg',
    name: '许浩天',
    title: '2022级',
	desc: 'Haotian Xv Received B.E. degree from Yantai University in 2021, and now he is a Master student majoring in Computer technology degree at Qingdao University of Science and Technology,under the supervision of Ph.D. Yuanzhi Cheng. His research interests include computer vision and deep learing.',
  },

  {
    avatar: '/imgs/avatars/C14-22-马春帅.jpg',
    name: '马春帅',
    title: '2022级',
	desc: 'Chunshuai Ma Received B.E. degree from Qingdao University of Science and Technology in 2022. Now he is a Master student majoring in Computer technology degree at Qingdao University of Science and Technology, under the supervision of Ph.D. Yuanzhi Cheng. His research interests include computer vision and deep learing.',
  },

  {
    avatar: '/imgs/avatars/C15-22-谢培栋.jpg',
    name: '谢培栋',
    title: '2022级',
	desc: 'Peidong Xie is currently studying in the School of Information Science and Technology at Qingdao University of Science and Technology for his master\'s degree, under the supervision of Yuanzhi Cheng. His research interests include deep learning and image processing.',
  },

]
const undergraduate =[  {
    avatar: '/imgs/avatars/牟翔宇.jpg',
    name: '牟翔宇',
    title: '2019级',
    desc: 'Mou Xiangyu is currently an undergraduate student pursuing a Bachelor\'s degree in the School of Information Science and Technology at Qingdao University of Science and Technology. His research interests revolve around deep learning text generation and fundamental computer algorithm research.',
  }]
  
const student19 =[
  {
    avatar: '/imgs/avatars/C16-19-王广涵.jpg',
    name: '王广涵',
    title: '2019级',
    desc: 'Guanghan Wang, a postgraduate student, graduated from Qingdao University of Science and Technology in 2022 and currently works in Hiaser Medical Center of Qingdao. His research direction is deep learning image field -- medical image processing.',
  },
  {
    avatar: '/imgs/avatars/C17-19-刘宇博.jpg',
    name: '刘宇博',
    title: '2019级',
    desc: 'Yubo Liu received B.E. degree from Yantai University in 2019, and received Master degree from Qingdao University of Science and Technology in 2022.His supervisor is Professor Guozhu Liu. His research fields include: computer vision, medical image processing, lung disease detection, etc. Now, he works in Shandong High-speed Information Group.',
  },
]


</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>指导老师</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamMembers size="medium" :members="tutorsOthers" />  
  <VPTeamPageSection>
    <template #title>20级研究生</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="medium" :members="student20" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>21级研究生</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="medium" :members="student21" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>22级研究生</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="medium" :members="student22" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>本科生</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="medium" :members="undergraduate" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>毕业研究生</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="medium" :members="student19" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

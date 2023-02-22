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
const partners =[
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
    avatar: '/imgs/avatars/何健飞.jpg',
    name: '何健飞',
    title: '2021级',
	desc: 'Jianfei He received B.E. degree from Hebei University of Science and Technology in 2021. Now he is  a Master student majoring in Computer Science and Technology degree at Qingdao University of Science and Technology, under the supervision of Ph.D. Canhui Xu . His research interests include deep learning, computer vision, and medical image segmentation.',

  },
    {
    avatar: '/imgs/avatars/王翔.jpg',
    name: '王翔',
    title: '2021级',
	desc: 'My name is Xiang Xang.I am a Postgraduate student majoring in SE in QUST.I love gaming(like Snooker offline, LOL on-line), programming(like Python, Cplusplus, lua and nothing else) and sleeping most and regard peace as my destination.',

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
	desc: 'Qi Yang currently working toward the M.S. degree with the School of Information Science and Technology,Qingdao University of Science and Technology, Qingdao, China. His research interests include object detection,image segmentation,panoptic segmentation .Sometimes he also develops frontend, such as Vue (this website is built with Vue, more precisely, Vitepress).',

  },
    {
    avatar: '/imgs/avatars/袁正一.jpg',
    name: '袁正一',
    title: '2022级',
	desc: 'yuanzhengyi received B.E. degree from Qingdao University of Science and Technology in 2021.Now he is a Master student majoring in Software Engineering degree at Qingdao University of Science and Technology,under the supervision of Ph.D. CaoShi. He research interests include deep learning, computer vision, image processing.',

  },
{
    avatar: '/imgs/avatars/张栋.jpg',
    name: '张栋',
    title: '2022级',
	desc: 'Dong Zhang received B.E. degree from XiHua University in 2021. Now he is  a Master student majoring in Computer technology degree at Qingdao University of Science and Technology,under the supervision of Ph.D. Canhui Xu. His research interests include deep learning, computer vision, image processing.',

  },
{
    avatar: '/imgs/avatars/谢彧.jpg',
    name: '谢彧',
    title: '2022级',
	desc: 'Xie Yu is currently pursuing the M.S. degree with School of Information Science and Technology, Qingdao University of Science and Technology, Shandong. He is interested in artificial intelligence, and his research focuses on computer vision.',

  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>导师</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>学生</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="medium" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
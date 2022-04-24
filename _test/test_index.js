//内容部分
//guid->all全部 guid->nostart未开始  guid->being学习中 guid->finish已完成
Mock.mock('/getListData/', function () {
    return Mock.mock({
        custom: {
            'list|4': [
                {
                    'type|+1':['being','nostart','finish','finish'],//类型
                    guid:'@guid',
                    href: 'images/pic-0@integer(1,3).png',//图片
                    title:'二级建造师-机电工程专业知识',//标题
                    refer:'@cword(12,32)',//培训内容
                    totlearn:'@float(1,14,1,1)',//总学时
                    coursetot:'5章-20节-38课时',//课程数
                    value: '@integer(0,100)',//学习占比
                    'name|+1': ['学习中','未开始','已完成'],//学习状态
                    finishlearn:'@float(1,14,1,1)',//已学
                    prevlearntime:'@datetime(yyyy-MM-dd HH-MM-SS)'//上次学习时间
                }
            ]
        },
        status: {
            code: 200,
            text: '',
            url: ''
        }
    });
});
//顶部
Mock.mock('/getTopData/', function () {
    return Mock.mock({
        custom: {
            title: '@cword(14,20)', //标题
            refer: '@cword(16,24)', //培训机构名称
            totnum: '18.0', //总学时
            learnnum: '@float(1,17,1,1)', //已学
            pernum: '@integer(1,100)', //占比
            perlearntime: '@datetime(yyyy-MM-dd HH-MM-SS)', //上次学习时间
            word: '@cword(60,130)' //介绍
        },
        status: {
            code: 200,
            text: '',
            url: ''
        }
    });
});

//视频部分
Mock.mock('/getVideoData/', function () {
    return Mock.mock({
        custom: {
            href: 'images/video-0@integer(1,2).png' //视频
        },
        status: {
            code: 200,
            text: '',
            url: ''
        }
    });
});

//视频导航部分
Mock.mock('/getVideoNavData/', function () {
    return Mock.mock({
        custom: [
            {
                chapter: '第一章', //章节
                name: '@cword(4,6)', //章节标题
                'section|4': [
                    {
                        'sect|+1': ['第1节', '第2节', '第3节', '第4节'], //小节
                        name: '@cword(4,5)', //小节名称
                        'course|3': [
                            {
                                guid: '@guid',
                                'type|+1': ['finish', 'being', 'nostart'], //类型
                                'courseTime|+1': ['第1课时', '第2课时', '第3课时'], //课时
                                train: '@cword(4,6)' //课时名称
                            }
                        ]
                    }
                ]
            },
            {
                chapter: '第二章',
                name: '@cword(4,6)',
                section: [
                    {
                        sect: '第1节',
                        name: '@cword(4,5)',
                        'course|3': [
                            {
                                guid: '@guid',
                                'type|+1': ['nostart', 'nostart', 'nostart'],
                                'courseTime|+1': ['第1课时', '第2课时', '第3课时'],
                                train: '@cword(4,6)'
                            }
                        ]
                    },
                    {
                        sect: '第2节',
                        name: '@cword(4,5)',
                        'course|3': [
                            {
                                guid: '@guid',
                                'type|+1': ['finish', 'finish', 'being'],
                                'courseTime|+1': ['第1课时', '第2课时', '第3课时'],
                                train: '@cword(4,6)'
                            }
                        ]
                    },
                    {
                        sect: '第3节',
                        name: '@cword(4,5)',
                        'course|3': [
                            {
                                guid: '@guid',
                                'type|+1': ['finish', 'finish', 'finish'],
                                'courseTime|+1': ['第1课时', '第2课时', '第3课时'],
                                train: '@cword(4,6)'
                            }
                        ]
                    },
                    {
                        sect: '第4节',
                        name: '@cword(4,5)',
                        'course|3': [
                            {
                                guid: '@guid',
                                'type|+1': ['being', 'nostart', 'nostart'],
                                'courseTime|+1': ['第1课时', '第2课时', '第3课时'],
                                train: '@cword(4,6)'
                            }
                        ]
                    }
                ]
            },
            {
                chapter: '第三章',
                name: '@cword(4,6)',
                'section|2': [
                    {
                        'sect|+1': ['第1节', '第2节'],
                        name: '@cword(4,5)',
                        'course|3': [
                            {
                                guid: '@guid',
                                'type|+1': ['nostart', 'nostart', 'nostart'],
                                'courseTime|+1': ['第1课时', '第2课时', '第3课时'],
                                train: '@cword(4,6)'
                            }
                        ]
                    }
                ]
            },
            {
                chapter: '第四章',
                name: '@cword(4,6)',
                'section|4': [
                    {
                        'sect|+1': ['第1节', '第2节', '第3节', '第4节'],
                        name: '@cword(4,5)',
                        'course|2': [
                            {
                                guid: '@guid',
                                'type|+1': ['finish', 'finish'],
                                'courseTime|+1': ['第1课时', '第2课时', '第3课时'],
                                train: '@cword(4,6)'
                            }
                        ]
                    }
                ]
            }
        ],
        status: {
            code: 200,
            text: '',
            url: ''
        }
    });
});

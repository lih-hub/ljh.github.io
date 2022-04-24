/* eslint-disable no-undef */
/**!
 * [江苏省继续教育培训系统]
 * date:2020-03-15
 * author: [liujihua];
 */
(function (win, $) {
    var $learnstate = $('.learn-state'),
        $search = $('.search');

    //内容区
    function getPieData(guid) {
        $.ajax({
            url: '/getListData/',
            type: 'POST',
            dataType: 'json',
            data: {
                params: JSON.stringify({
                    guid: guid
                })
            },
            success: function (data) {
                var datas = data.custom.list;

                Util.render('#item-Tmpl', datas, $('#learnList'));

                for (var i = 0; i < datas.length; i++) {
                    var sign = datas[i].guid,
                        signprogress = sign + 'Progress';

                    signprogress = echarts.init(document.getElementById('progress-' + sign));

                    if (datas[i].type === 'being') {
                        colorList = '#1E63E4';
                    } else if (datas[i].type === 'nostart') {
                        colorList = '#999';
                    } else {
                        colorList = '#62B246';
                    }
                    
                    signprogress.setOption({
                        title: {
                            left: '20%',
                            top: '25%',
                            textStyle: {
                                fontSize: 14,
                                fontWeight: 'bold',
                                fontFamily: 'SHR',
                                align: 'center',
                                color: colorList
                            },
                            text: datas[i].value + '%'
                        },
                        series: [
                            {
                                type: 'pie',
                                center: ['50%', '50%'],
                                radius: ['70%', '100%'],
                                label: {
                                    show: false
                                },
                                silent: true,
                                color: [colorList, '#C4C4C4'],
                                data: [datas[i].value, 100 - datas[i].value]
                            }
                        ]
                    });
                }
            }
        });
    }
    getPieData();

    //点击切换
    $learnstate
        .on('click', '.state-item', function () {
            var $this = $(this),
                tabGuid = $this.data('guid');
            if ($this.hasClass('active')) return;
            $this.addClass('active').siblings().removeClass('active');
            getPieData(tabGuid);
        })
        .find('.state-item')
        .eq(0)
        .click();

    //搜索
    $search.bind('keydown', function (e) {
        if (e.keyCode === 13) {
            getPieData();
        }
    });

    $search.on('click', '.search-btn', function () {
        getPieData();
    });
})(this, jQuery);

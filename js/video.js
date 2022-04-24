/* eslint-disable no-undef */
/**!
 * [视频]
 * date:2020-03-22
 * author: [liujihua];
 */
(function (win, $) {
    var $videoList = $('.video-list');

    //顶部
    $.ajax({
        url: '/getTopData/',
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            var datas = data.custom;
            Util.render('#top-Tmpl', datas, '#videoTop');
        }
    });

    //视频
    function getVideoData(tabGuid) {
        $.ajax({
            url: '/getVideoData/',
            type: 'POST',
            dataType: 'json',
            data: {
                params: JSON.stringify({
                    guid: tabGuid
                })
            },
            success: function (data) {
                var datas = data.custom;

                Util.render('#video-Tmpl', datas, '#video-pic');
            }
        });
    }

    // 视频导航
    function getVideoNavData() {
        $.ajax({
            url: '/getVideoNavData/',
            type: 'POST',
            dataType: 'json',
            success: function (data) {
                var datas = data.custom;

                Util.render('#video-nav-tmpl', datas, '#videoList');
                judgeStage();

                $videoList.find('.video-item:first .videosubtab:first').click();
            }
        });
    }
    getVideoNavData();

    //状态判断
    function judgeStage() {
        var $video = $('.video-item');
        var lenSub, numsubFinish, numsubNo, len, numFinish;
        $.each($video, function (i, e) {
            var $subTabVideo = $(e).find('.videotab');

            lenSub = $subTabVideo.find('.videosubtab').length;
            numsubFinish = $subTabVideo.find('.finish').length;
            numsubNo = $subTabVideo.find('.nostart').length;

            if (lenSub === numsubFinish) {
                $subTabVideo.attr('class', 'video-item-sub videotab parentfinish');
            } else if (lenSub === numsubNo) {
                $subTabVideo.attr('class', 'video-item-sub videotab parentnostart');
            } else {
                $subTabVideo.attr('class', 'video-item-sub videotab parentbeing');
            }

            len = $(e).find('.videotab').length;
            numFinish = $(e).find('.parentfinish').length;

            if (len === numFinish) {
                $(e).attr('class', 'video-item allfinish');
            }
        });
    }

    //点击事件
    $videoList
        .on('click', '.video-arrow', function () {
            var $this = $(this),
                $chapter = $this.closest('li').find('.video-chapter-sub'),
                $item = $this.closest('li').find('ul');

            $this.toggleClass('up');
            if ($this.hasClass('up')) {
                $chapter.addClass('nobefore');
                $item.addClass('hidden');
            } else {
                $chapter.removeClass('nobefore');
                $item.removeClass('hidden');
            }
        })
        .on('click', '.videosubtab', function () {
            var $this = $(this);

            tabGuid = $this.data('guid');
            getVideoData(tabGuid);
        });
})(this, jQuery);

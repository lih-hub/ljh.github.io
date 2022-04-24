/**!
 * [登录页]
 * date:2020-03-21
 * author: [liujihua];
 */
(function (win, $) {
    var $method = $('.method'),
        $password = $('.forget-password');

    //登录方式
    $method
        .on('click', '.method-item', function () {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
        })
        .find('.method-item')
        .eq(0)
        .click();

    //忘记密码
    $password.on('click', '.check-btn', function () {
        var $this = $(this);
        $this.toggleClass('check');
    });
})(this, jQuery);

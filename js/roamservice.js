/**
 * Created by Chris on 16/10/24.
 */
var CardData="no";
var PhoneData="yes";
var RoameFature="yes";
//mediate
(function () {
    var width=$("body").css("width", $(window).width());
    $('.roam-service-page').css('width',width);
})();
//login
(function () {
    $('.login-button').click(function () {
        if($('.login-button span').text()=="请登录"){
            $('.alert-box').css('display','block');
        }
        if($('.login-button span').text()=="推出登录"){
            $('.alert-box').css('display','block');
            $('.login-button span').text('请登录');
            $('.roam-body-block-all').css('display','none');
            $('.login-button').removeClass('login-button-active');
        }
    });
    $('.roam-login-head i').click(function () {
        $('.alert-box').css('display','none');
    });
    $('.roam-login-button button').click(function () {
        $('.alert-box').css('display','none');
        $('.roam-body-block-all').css('display','block');
        $('.login-button span').text('推出登录');
        $('.login-button').addClass('login-button-active');
    });
})();
//support or not
(function () {
    if (CardData=="yes"){
        $('.telephone-card-detail .card-block-data').addClass('card-support');
        $('.card-block-data i').addClass('icon-zhengque');
        $('.card-block-data .card-place').text('您的卡可以在该国家/地区使用');
        $('.card-block-data .card-data span').text('支持');
    }else if (CardData=="no"){
        $('.telephone-card-detail .card-block-data').removeClass('card-support');
        $('.card-block-data i').addClass('icon-chacha');
        $('.card-block-data .card-place').text('您的卡不支持办理国际漫游业务,请先换卡.');
        $('.card-block-data .card-data span').text('不支持');
    }
    if (PhoneData=="yes"){
        $('.telephone-card-detail .phone-block-data').addClass('card-support');
        $('.phone-block-data i').addClass('icon-zhengque');
        $('.phone-block-data .card-place').text('您的手机可以在该国家/地区使用');
        $('.phone-block-data .card-data span').text('支持');
    }else if (PhoneData=="no"){
        $('.telephone-card-detail .phone-block-data').removeClass('card-support');
        $('.phone-block-data i').addClass('icon-chacha');
        $('.phone-block-data .card-place').text('您的手机无法在该地区使用,建议更换.');
        $('.phone-block-data .card-data span').text('不支持');
    }
    if (RoameFature=="yes"){
        $('.telephone-card-detail .place-block-data').addClass('card-support');
        $('.place-block-data i').addClass('icon-zhengque');
        $('.place-block-data .card-place').text('您的国际漫游功能已开通,请放心使用.');
        $('.place-block-data .card-data span').text('已开通');
    }else if (RoameFature=="no"){
        $('.telephone-card-detail .place-block-data').removeClass('card-support');
        $('.place-block-data i').addClass('icon-chacha');
        $('.place-block-data .card-place').text('您暂未开通办理国际漫游功能.');
        $('.place-block-data .card-data span').text('未开通');
    }
})();
//select
(function () {
    $('#roamheadback .block').click(function () {
        var a=$(this).index();
        var thoseClass=$('#roamheadback .block');
        switch(a){
            case 0:
                $('#roamheadback .block').removeClass('active');
                thoseClass.eq(0).addClass('active');
                $('.roam-body .roam-body-block').css('display','none');
                $('.roam-body .roam-body-block').eq(0).css('display','block');
                break;
            case 1:
                $('#roamheadback .block').removeClass('active');
                thoseClass.eq(1).addClass('active');
                $('.roam-body .roam-body-block').css('display','none');
                $('.roam-body .roam-body-block').eq(1).css('display','block');
                break;
            case 2:
                $('#roamheadback .block').removeClass('active');
                thoseClass.eq(2).addClass('active');
                $('.roam-body .roam-body-block').css('display','none');
                $('.roam-body .roam-body-block').eq(2).css('display','block');
                break;
        }
    })
})();
(function () {
    $('#charges .block').click(function () {
        var a=$(this).index();
        var thoseClass=$('#charges .block');
        switch(a){
            case 0:
                thoseClass.eq(0).removeClass('call-active');
                thoseClass.eq(1).removeClass('message-active');
                thoseClass.eq(2).removeClass('internet-active');
                thoseClass.eq(0).addClass('call-active');
                $('#charges .right-block').css('display','none');
                $('#charges .right-block').eq(0).css('display','block');
                break;
            case 1:
                thoseClass.eq(0).removeClass('call-active');
                thoseClass.eq(1).removeClass('message-active');
                thoseClass.eq(2).removeClass('internet-active');
                thoseClass.eq(1).addClass('message-active');
                $('#charges .right-block').css('display','none');
                $('#charges .right-block').eq(1).css('display','block');
                break;
            case 2:
                thoseClass.eq(0).removeClass('call-active');
                thoseClass.eq(1).removeClass('message-active');
                thoseClass.eq(2).removeClass('internet-active');
                thoseClass.eq(2).addClass('internet-active');
                $('#charges .right-block').css('display','none');
                $('#charges .right-block').eq(2).css('display','block');
                break;
        }
    })
})();
(function () {
    $('#callstyle .block').click(function () {
        var a=$(this).index();
        var thoseClass=$('#callstyle .block');
        switch(a){
            case 0:
                thoseClass.eq(0).removeClass('call-active');
                thoseClass.eq(1).removeClass('message-active');
                thoseClass.eq(2).removeClass('internet-active');
                thoseClass.eq(0).addClass('call-active');
                $('#callstyle .right-block').css('display','none');
                $('#callstyle .right-block').eq(0).css('display','block');
                break;
            case 1:
                thoseClass.eq(0).removeClass('call-active');
                thoseClass.eq(1).removeClass('message-active');
                thoseClass.eq(2).removeClass('internet-active');
                thoseClass.eq(1).addClass('message-active');
                $('#callstyle .right-block').css('display','none');
                $('#callstyle .right-block').eq(1).css('display','block');
                break;
            case 2:
                thoseClass.eq(0).removeClass('call-active');
                thoseClass.eq(1).removeClass('message-active');
                thoseClass.eq(2).removeClass('internet-active');
                thoseClass.eq(2).addClass('internet-active');
                $('#callstyle .right-block').css('display','none');
                $('#callstyle .right-block').eq(2).css('display','block');
                break;
        }
    })
})();
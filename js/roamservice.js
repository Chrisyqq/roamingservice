/**
 * Created by Chris on 16/10/24.
 */
var CardData="no";
var PhoneData="yes";
var RoameFature="yes";
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
function searchToggle(obj, evt) {
    var container = $(obj).closest('.search-wrapper');
    container.find('.search-input').focus();
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
    }
    else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
        // clear and hide result container when we press close
        container.find('.result-container').fadeOut(100, function () {
            $(this).empty();
        });
    }
}

function submitFn(obj, evt) {
    value = $(obj).find('.search-input').val().trim();

    if (value == '2017') {
        $("#searchDiv").fadeOut(3200);                //设定元素淡出效果，并加入淡出时间跨度及显示附加信息
        $('#loadingBar').removeClass('fullwidth').fadeIn(1000).removeAttr('hidden').delay(100).queue(function (next) {
            $(this).addClass('fullwidth');
            next();
        });
        setTimeout(function(){removePageOne();},3500);
    }
    else {
        _html = "https://www.baidu.com/s?wd=" + value;
        window.location.href = _html;
    }
    evt.preventDefault();
}
function removePageOne(){
    $('#pageOne').fadeOut(1000);
    $('#loadingBar').fadeOut(1000);
    $('#pageTwo').fadeIn(1300).removeAttr('hidden');
    setTimeout(function(){S.init();},2000);

}
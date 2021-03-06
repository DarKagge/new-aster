$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

    $('.popup').magnificPopup();

});

//Форма отправки 2.0
$(function() {
    $("[name=send]").click(function () {
        $(":input.error").removeClass('error');
        $(".allert").remove();

        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');
        var subject = btn.closest('form').find('[name=form_subject]');
        var form = btn.closest('form'), name = form.find('[name=name]').val();
        $(ref).each(function () {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if (!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
                var patterntel = /^()[0-9]{9,18}/i;
                if ($(this).attr("type") == 'tel') {
                    if (!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });
        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });



            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: msg,
                success: function (data) {
                    $.magnificPopup.close();
                    form[0].reset();
                    $(send_btn).each(function () {
                        $(this).attr('disabled', false);
                    });

                    $("a[href='#popupty']").click();


                },
                error: function (xhr, str) {
                    alert('Возникла ошибка: ' + xhr.responseCode);
                }
            });
        }
        else{
            if(form.hasClass("form-shake")){
                form.parents(".form-block").addClass("shake");
                form.parents(".form-block").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                    $(this).removeClass("shake");
                });
            }
        }
        return false;
    });
});











$('.hamburger').on('click',function(){
    $(this).toggleClass('is-active');
    $(".head-menu").toggleClass('is-active');
});
$(document).on("click",function(event){
    if( $(event.target).closest(".head-menu,.hamburger").length )return;
    $('.hamburger').removeClass('is-active');
    $(".head-menu").removeClass('is-active');
    event.stopPropagation();
});




    var autoplaySlider = $('#adaptive').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        pager:false,
        controls:false,
        loop:true,
    });
    $(".left-arrow-r a").on("click",function (e) {
        e.preventDefault();
        autoplaySlider.goToPrevSlide();
    });
    $(".right-arrow-r a").on("click",function (e) {
        e.preventDefault();
        autoplaySlider.goToNextSlide();
    });





    var feast = $('#feast').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        pager:false,
        controls:false,
        loop:true,
    });
    $(".left-arrow-i a").on("click",function (e) {
        e.preventDefault();
        feast.goToPrevSlide();
    });
    $(".right-arrow-i a").on("click",function (e) {
        e.preventDefault();
        feast.goToNextSlide();
    });




    var whereone = $('#where-one').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        pager:false,
        controls:false,
        loop:true,
    });
    $(".left-arrow-one a").on("click",function (e) {
        e.preventDefault();
        whereone.goToPrevSlide();
    });
    $(".right-arrow-one a").on("click",function (e) {
        e.preventDefault();
        whereone.goToNextSlide();
    });





    var wheretwo = $('#where-two').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        pager:false,
        controls:false,
        loop:true,
    });
    $(".left-arrow-two a").on("click",function (e) {
        e.preventDefault();
        wheretwo.goToPrevSlide();
    });
    $(".right-arrow-two a").on("click",function (e) {
        e.preventDefault();
        wheretwo.goToNextSlide();
    });




    var wheretree = $('#where-tree').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        pager:false,
        controls:false,
        loop:true,
    });
    $(".left-arrow-tree a").on("click",function (e) {
        e.preventDefault();
        wheretree.goToPrevSlide();
    });
    $(".right-arrow-tree a").on("click",function (e) {
        e.preventDefault();
        wheretree.goToNextSlide();
    });
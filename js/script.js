$(document).ready(function (){
    $(".header__menu, .footer__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $('.js-toggler').on('click', function(){
        $('.header').toggleClass('open').removeClass('cl');
        $('body').toggleClass('overfl');
    });

    $('.header__menu ul li a').on('click', function(){
        $('.header').addClass('cl').removeClass('open');
        $('body').removeClass('overfl');
    });

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })


    var swiper = new Swiper(".js-ex-slider", {
        effect: "cards",
        grabCursor: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    var swiper2 = new Swiper(".js-project-slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-n-al",
            prevEl: ".swiper-button-p-al",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        breakpoints: {
            991: {
                spaceBetween: 30,
            }
        },
    });


    var swiper3 = new Swiper(".js-reviews-slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });

    var swiper4 = new Swiper(".js-projects-slider-tg", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-n-tg",
            prevEl: ".swiper-button-p-tg",
        }
    });


    var swiper5 = new Swiper(".js-projects-slider-tg2", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-n-tg2",
            prevEl: ".swiper-button-p-tg2",
        }
    });
    var swiper6 = new Swiper(".js-projects-slider-tg3", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-n-tg3",
            prevEl: ".swiper-button-p-tg3",
        }
    });
    var swiper7 = new Swiper(".js-projects-slider-tg4", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-n-tg4",
            prevEl: ".swiper-button-p-tg4",
        }
    });


    const dt = new DataTransfer();

    $(".attachment").on('change', function(e){
        for(var i = 0; i < this.files.length; i++){
            let fileBloc = $('<span/>', {class: 'file-block'}),
                fileName = $('<span/>', {class: 'name', text: this.files.item(i).name});
            fileBloc.append('<span class="file-delete"><img src="images/svg/close.svg" alt=""></span>')
                .append(fileName);
            $(".filesList > .files-names").append(fileBloc).parent().parent().parent().addClass('open');
        };
        for (let file of this.files) {
            dt.items.add(file);
        }
        this.files = dt.files;
        $('.file-delete').click(function(){
            $(".form__file").removeClass('open');
            let name = $(this).next('.names').text();
            $(this).parent().remove();
            for(let i = 0; i < dt.items.length; i++){
                if(name === dt.items[i].getAsFile().name){
                    dt.items.remove(i);
                    continue;
                }
            }
            document.getElementsByClassName('attachment').files = dt.files;
        });
    });

    $("#attachment2").on('change', function(e){
        for(var i = 0; i < this.files.length; i++){
            let fileBloc = $('<span/>', {class: 'file-block'}),
                fileName = $('<span/>', {class: 'name', text: this.files.item(i).name});
            fileBloc.append('<span class="file-delete2"><img src="images/svg/close.svg" alt=""></span>')
                .append(fileName);
            $(".filesList2 > .files-names2").append(fileBloc).parent().parent().parent().addClass('open');
        };
        for (let file of this.files) {
            dt.items.add(file);
        }
        this.files = dt.files;

        $('.file-delete2').click(function(){
            $(".form__file").removeClass('open');
            let name = $(this).next('.names2').text();
            $(this).parent().remove();
            for(let i = 0; i < dt.items.length; i++){
                if(name === dt.items[i].getAsFile().name){
                    dt.items.remove(i);
                    continue;
                }
            }
            document.getElementsByClassName('attachment2').files = dt.files;
        });
    });


    /* validation*/

    var validSrc = '<span></span>';
    var invalidSrc = "<span></span>";

    $(document).ready(function() {
        initMasks();
        initListeners();
    });

    function initMasks() {
        $('input[name="phone-number"]').mask("+7 (000) 000-00-00");
    }

    function initListeners() {
        $("#phone").on("blur", validatePhone);
        $("#name").on("blur", validateName);

        $("#phone2").on("blur", validatePhone2);
        $("#name2").on("blur", validateName2);

        $(".submitBtn").on("click", validateForm);
        $(".submitBtn2").on("click", validateForm2);
    }



    function validatePhone() {
        var isValid = false;
        var length = $("#phone").val().length;
        if (length == 18) {
            $(".phoneValidationImg").html( '').parent().parent().removeClass('er');
            $("#phone").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validatePhone2() {
        var isValid = false;
        var length = $("#phone2").val().length;
        if (length == 18) {
            $(".phoneValidationImg2").html( '').parent().parent().removeClass('er');
            $("#phone2").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg2").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    function validateName() {
        var isValid = false;
        var length = $("#name").val().length;
        if (length > 1) {
            $(".nameValidationImg").html( '').parent().parent().removeClass('er');
            $("#name").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validateName2() {
        var isValid = false;
        var length = $("#name2").val().length;
        if (length > 1) {
            $(".nameValidationImg2").html( '').parent().parent().removeClass('er');
            $("#name2").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg2").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    function validateForm() {
        var formIsValid = true;

        if (!validatePhone()) {
            $("#phone").addClass("invalid");
            formIsValid = false;
        } else {
            $("#phone").removeClass("invalid");
        }


        if (!validateName()) {
            $("#name").addClass("invalid");
            formIsValid = false;
        } else {
            $("#name").removeClass("invalid");
        }
    }
    function validateForm2() {
        var formIsValid2 = true;

        if (!validatePhone2()) {
            $("#phone2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#phone2").removeClass("invalid");
        }


        if (!validateName2()) {
            $("#name2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#name2").removeClass("invalid");
        }
    }



});

/* global $ . console , alert */
$(function () {
    'use strict';
    
    //trigger nicescroll
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: '10px' ,
        cursorborder:'none' 
    });


    //adjust header height
    $('.headers').height($(window).height());


    //add/remove class active from navbar links
    $('.navbars .menu li').on('click' , function () {
        $(this).addClass('active').siblings('.menu li').removeClass('active');
    });


    //show/hide navbar 
    $('.navbars .links .menuIcon').on('click' , function () {
        $('.navbars .menu').toggleClass('showMenu');
    });


    //scroll to features
    $('.headers .arrow').on('click' , function () {
        $('html , body').animate({
            scrollTop : $('.fearutes').offset().top
        },700);
    });


    //scroll to our team
    $('.headers .hire').on('click' , function () {
        $('html , body').animate({
            scrollTop : $('.ourTeam').offset().top
        },700);
    });


    //scroll to our works
    $('.headers .ourW').on('click' , function () {
        $('html , body').animate({
            scrollTop : $('.ourWork').offset().top 
        },700);
    });


    //sync navbar links with body sections
    $(window).scroll(function () {
        $('.syncLinks').each(function () {
            if($(window).scrollTop() > $(this).offset().top -1) {
                var currentId = $(this).attr('id');

                $('.navbars li').removeClass('active');

                $('.navbars .menu li a[data-scroll ="' + currentId + '"]').parent().addClass('active');
            }
        });
    });


    //show hidden images in my work
    $('.ourWork .showMore').on('click', function () {
        $('.ourWork .itemBox .item').removeClass('hidden');
        // $('.ourWork .hidden').fadeIn(1000); other way
    });


    //check testimonials
    function checkClients() {
    
        //ternary operator
        $('.testimonial .client:first').hasClass('active') ? $('.leftArrow').fadeOut() : $('.leftArrow').fadeIn() ;
        $('.testimonial .client:last').hasClass('active') ? $('.rightArrow').fadeOut() : $('.rightArrow').fadeIn() ;

    }

    checkClients();


    //click on arrows to change slides
    $('.testimonial i').on('click' , function () {
        if($(this).hasClass('rightArrow')) {
            $('.testimonial .active').fadeOut(100 , function() {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {
            $('.testimonial .active').fadeOut(100 , function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });



});



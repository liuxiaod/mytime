$(function(){
    $('.pic li').hover(function(){
        $(this).stop().animate({'width':400},600).siblings().stop().animate({'width':50},600)
        $(this).find('img').stop().animate({'left':0},600).parent().siblings().find('img').stop().animate({'left':-179},600)
        $(this).find('span').hide().parent().siblings().find('span').show()
    },function(){
        $('.pic li').stop().animate({'width':100},600).find('img').stop().animate({'left':-155},600)
        $('.pic li').find('span').show()
    })
})
$(function(){
    
    var overlay, popup;
    popup = $('.pop-up');
    overlay = $('.overlay');
    overlay.hide();
    popup.hide();   

    var date = new Date();
    var day,month,year;
    var oDate = date.getMonth()+1 +"/"+date.getDay()+"/"+date.getFullYear();
    var ampm = (date.getHours() >= 12) ? "PM" : "AM";
    var time = date.getHours() + ':' + date.getUTCMinutes()+' '+ampm;

    $('body').click(function(){
        $('.today-date').val(oDate);
        
    });

    $('.today-date').text(oDate);

    $('aside .section').click(function(){
        $(overlay).show();
        $(popup).show();
        
        $(overlay).click(function(){
            $(this).hide();
            $(popup).hide();  
        });
        $('.close').click(function(){
            $(overlay).hide();
            $(popup).hide();  
        });
        console.log('section clicked');
    });
});

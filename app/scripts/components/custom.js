/* JS */


/* Navigation */

$(document).ready(function (){

  $(window).resize(function()
  {
    if($(window).width() >= 765){
      $(".sidebar #nav").slideDown(350);
    }
    else{
      $(".sidebar #nav").slideUp(350); 
    }
  });


  $("#nav > li > a").on('click',function(e){
      if($(this).parent().hasClass("has_sub")) {
        e.preventDefault();
      }   
      if(!$(this).hasClass('subdrop')){
        if($(this).next('ul').hasClass('opened')){
          $(this).next('ul').slideUp();
          $(this).next('ul').removeClass('opened')
        }else{
          $(this).next('ul').slideDown();
        }
        $(this).parents('ul').find('a.subdrop').removeClass('subdrop');
        $(this).addClass("subdrop");
      }else if($(this).hasClass("subdrop")){
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
      }     
  });
});

$(document).ready(function(){
  $(".sidebar-dropdown a").on('click',function(e){
      e.preventDefault();

      if(!$(this).hasClass("open")) {
        // hide any open menus and remove all other classes
        $(".sidebar #nav").slideUp(350);
        $(".sidebar-dropdown a").removeClass("open");
        
        // open our new menu and add the open class
        $(".sidebar #nav").slideDown(350);
        $(this).addClass("open");
      }
      
      else if($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(".sidebar #nav").slideUp(350);
      }
  });

});

/* Widget close */

$('.wclose').click(function(e){
  e.preventDefault();
  var $wbox = $(this).parent().parent().parent();
  $wbox.hide(100);
});

/* Widget minimize */

  $('.wminimize').click(function(e){
    e.preventDefault();
    var $wcontent = $(this).parent().parent().next('.widget-content');
    if($wcontent.is(':visible')) 
    {
      $(this).children('i').removeClass('icon-chevron-up');
      $(this).children('i').addClass('icon-chevron-down');
    }
    else 
    {
      $(this).children('i').removeClass('icon-chevron-down');
      $(this).children('i').addClass('icon-chevron-up');
    }            
    $wcontent.toggle(500);
  }); 

/* Calendar */

  $(document).ready(function() {
  
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    $('#calendar').fullCalendar({
      header: {
        left: 'prev',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,next'
      },
      editable: true,
      events: [
        {
          title: 'All Day Event',
          start: new Date(y, m, 1)
        },
        {
          title: 'Long Event',
          start: new Date(y, m, d-5),
          end: new Date(y, m, d-2)
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d-3, 16, 0),
          allDay: false
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d+4, 16, 0),
          allDay: false
        },
        {
          title: 'Meeting',
          start: new Date(y, m, d, 10, 30),
          allDay: false
        },
        {
          title: 'Lunch',
          start: new Date(y, m, d, 12, 0),
          end: new Date(y, m, d, 14, 0),
          allDay: false
        },
        {
          title: 'Birthday Party',
          start: new Date(y, m, d+1, 19, 0),
          end: new Date(y, m, d+1, 22, 30),
          allDay: false
        },
        {
          title: 'Click for Google',
          start: new Date(y, m, 28),
          end: new Date(y, m, 29),
          url: 'http://google.com/'
        }
      ]
    });
    
  });

/* Progressbar animation */

    setTimeout(function(){

        $('.progress-animated .progress-bar').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");

            //TODO: left and right text handling

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc>=perc) {
                    clearInterval(progress);
                } else {
                    current_perc +=1;
                    me.css('width', (current_perc)+'%');
                }

                me.text((current_perc)+'%');

            }, 600);

        });

    },600);

/* Slider */

    $(function() {
        // Horizontal slider
        $( "#master1, #master2" ).slider({
            value: 60,
            orientation: "horizontal",
            range: "min",
            animate: true
        });

        $( "#master4, #master3" ).slider({
            value: 80,
            orientation: "horizontal",
            range: "min",
            animate: true
        });        

        $("#master5, #master6").slider({
            range: true,
            min: 0,
            max: 400,
            values: [ 75, 200 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });


        // Vertical slider 
        $( "#eq > span" ).each(function() {
            // read initial values from markup and remove that
            var value = parseInt( $( this ).text(), 10 );
            $( this ).empty().slider({
                value: value,
                range: "min",
                animate: true,
                orientation: "vertical"
            });
        });
    });



/* Support */

$(document).ready(function(){
  $("#slist a").click(function(e){
     e.preventDefault();
     $(this).next('p').toggle(200);
  });
});

/* Scroll to Top */


  $(".totop").hide();

  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop()>300)
      {
        $('.totop').slideDown();
      } 
      else
      {
        $('.totop').slideUp();
      }
    });

    $('.totop a').click(function (e) {
      e.preventDefault();
      $('body,html').animate({scrollTop: 0}, 500);
    });

  });

/* jQuery Notification */

$(document).ready(function(){

  //setTimeout(function() {noty({text: '<strong>Howdy! Hope you are doing good...</strong>',layout:'topRight',type:'information',timeout:15000});}, 7000);

  //setTimeout(function() {noty({text: 'This is an all in one theme which includes Front End, Admin & E-Commerce. Dont miss it. Grab it now',layout:'topRight',type:'alert',timeout:13000});}, 9000);

});


$(document).ready(function() {

  $('.noty-alert').click(function (e) {
      e.preventDefault();
      noty({text: 'Some notifications goes here...',layout:'topRight',type:'alert',timeout:2000});
  });

  $('.noty-success').click(function (e) {
      e.preventDefault();
      noty({text: 'Some notifications goes here...',layout:'top',type:'success',timeout:2000});
  });

  $('.noty-error').click(function (e) {
      e.preventDefault();
      noty({text: 'Some notifications goes here...',layout:'topRight',type:'error',timeout:2000});
  });

  $('.noty-warning').click(function (e) {
      e.preventDefault();
      noty({text: 'Some notifications goes here...',layout:'bottom',type:'warning',timeout:2000});
  });

  $('.noty-information').click(function (e) {
      e.preventDefault();
      noty({text: 'Some notifications goes here...',layout:'topRight',type:'information',timeout:2000});
  });

});


/* Date picker */

  $(function() {
    $('#datetimepicker1').datetimepicker({
      pickTime: false
    });
  });

   $(function() {
    $('#datetimepicker2').datetimepicker({
      pickDate: false
    });
  });




/* CL Editor */

$(".cleditor").cleditor({
    width: "auto",
    height: "auto"
});

/* Modal fix */

$('.modal').appendTo($('body'));

/* Pretty Photo for Gallery*/

jQuery("a[class^='prettyPhoto']").prettyPhoto({
overlay_gallery: false, social_tools: false
});

/* jQuery chosen */
$(document).ready(function(){
  $('.select-with-search').chosen({width: "100%"});
  $('#select-report-head').chosen({disable_search_threshold: 5,width:'60%',class:'select-report-head'})
});

/* Package-channel-new validate */
$(document).ready(function(){
  $('#packageChannelNewForm').validate({
    rules:{
      channelID:{
        required:true,
        channelID:[2,16]
      },
      channelName:{
        required:true,
        channelName:[2,12]
      },
      channelScale:{
        range:[0,100]
      }
    },
    errorClass:'error',
    validClass:'success',
    highlight:function(element){
      $(element).addClass('highlight-error').removeClass('highlight-success');
    },
    unhighlight:function(element){
      $(element).removeClass('highlight-error').addClass('highlight-success');
    },
    errorPlacement:function(error,element){
      error.insertAfter(element);
    }
  });
});

/* Package-channel-edit validate */
$(document).ready(function(){
  $('#packageChannelEditForm').validate({
    rules:{
      channelName:{
        required:true,
        channelName:[2,12]
      },
      channelScale:{
        range:[0,100]
      }
    },
    errorClass:'error',
    validClass:'success',
    highlight:function(element){
      $(element).addClass('highlight-error').removeClass('highlight-success');
    },
    unhighlight:function(element){
      $(element).removeClass('highlight-error').addClass('highlight-success');
    },
    errorPlacement:function(error,element){
      error.insertAfter(element);
    }
  });
});

/* Payment-channel-new validate */
$(document).ready(function(){
  $('#paymentChannelNewForm').validate({
    rules:{
      channelID:{
        required:true,
        channelID:[2,16]
      },
      channelName:{
        required:true,
        channelName:[2,12]
      }
    },
    errorClass:'error',
    validClass:'success',
    highlight:function(element){
      $(element).addClass('highlight-error').removeClass('highlight-success');
    },
    unhighlight:function(element){
      $(element).removeClass('highlight-error').addClass('highlight-success');
    },
    errorPlacement:function(error,element){
      error.insertAfter(element);
    }
  });
});

/* Payment-channel-edit validate */
$(document).ready(function(){
  $('#paymentChannelEditForm').validate({
    rules:{
      channelName:{
        required:true,
        channelName:[2,12]
      }
    },
    errorClass:'error',
    validClass:'success',
    highlight:function(element){
      $(element).addClass('highlight-error').removeClass('highlight-success');
    },
    unhighlight:function(element){
      $(element).removeClass('highlight-error').addClass('highlight-success');
    },
    errorPlacement:function(error,element){
      error.insertAfter(element);
    }
  });
    
});

/* Tooltip */
$(document).ready(function(){
  $('.tooltipbox').tooltip();
});
  
/* Filter search button */
$(document).ready(function(){
  $('#filterBtn').on('click',function(e){
    var $this = $(this),
        $dropdownMenu = $this.next('.dropdown-menu');
    if($dropdownMenu.css('display')=='block'){
      $dropdownMenu.slideUp();
    }else if($dropdownMenu.css('display')=='none'){
      $dropdownMenu.slideDown();
    }
  })
  
  $('.checkAll').click(function(){
      var $this = $(this),
          $checkBoxs = $this.parents('.form-group').next().find('input[type="checkbox"]'),
          checked = $checkBoxs.prop('checked'),
          thisChecked = $(this).prop('checked'),
          $checkBoxsLength = $checkBoxs.size();
      if(thisChecked){
        $this.parents('.form-group-box').find('.checkInverse').prop('checked',false);
        $checkBoxs.each(function(){
          $(this).prop('checked',true);
        });
      }else{
        $checkBoxs.each(function(){
          $(this).prop('checked',false);
        });
      }
  }); 
  $('.checkInverse').click(function(){
      var $this = $(this),
          $checkBoxs = $this.parents('.form-group').next().find('input[type="checkbox"]'),
          thisChecked = $(this).prop('checked');
      if(thisChecked){
        $this.parents('.form-group-box').find('.checkAll').prop('checked',false);
        $checkBoxs.each(function(){
        var checked = $(this).prop('checked');
        if(checked){
          $(this).prop('checked',false);
        }else{
          $(this).prop('checked',true);
        }
        
      });
      }else{
        $checkBoxs.each(function(){
        var checked = $(this).prop('checked');
        if(checked){
          $(this).prop('checked',false);
        }else{
          $(this).prop('checked',true);
        }
        
      });
      }
  });
  $('.checkboxs').find('input[type="checkbox"]').click(function(){
    var $this = $(this),
        length = $this.parents('.form-group-box').find(':checkbox:not(:checked)');
        $this.parents('.form-horizontal').find('.checkInverse').prop('checked',false);
        if(length){
          $this.parents('.form-horizontal').find('.checkAll').prop('checked',false);
        }


  }); 

  $('#filterCloseBtn').click(function(e){
    e.preventDefault();
    $(this).parents('.dropdown-menu').slideUp();
  }); 

  $('#filterApplyBtn').click(function(e){
    e.preventDefault();
    var $platforms = $('#filterPlatforms').find('input:checked'),
        $channels = $('#filterChannels').find('input:checked'),
        $servers = $('#filterServers').find('input:checked'),
        platformNames = [],
        channelNames = [],
        serverNames = [],
        platformNamesStr = "",
        channelNamesStr = "",
        serverNamesStr = "";
    $platforms.each(function(){
      platformNames.push($(this).parent().text());
    });
    $channels.each(function(){
      channelNames.push($(this).parent().text());
    });
    $servers.each(function(){
      serverNames.push($(this).parent().text());
    });

    platformNamesStr = platformNames.join(" ");
    channelNamesStr = channelNames.join(" ");
    serverNamesStr = serverNames.join(" ");

    $('#filterResultPlatforms').find('span').text(platformNamesStr);
    $('#filteResultChannels').find('span').text(channelNamesStr);
    $('#filterResultServers').find('span').text(serverNamesStr);

  })
});


/* StickUp */
jQuery(function($) {
  $(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('#report .subnav').stickUp();
  });
});





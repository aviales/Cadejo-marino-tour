$(document).ready(function(){  

  var site           = document.location.origin + "/";
  var theme          = "wp-content/themes/asuaire-v4/";
  var $lang          = $(".lang-choose").text().substr(0, 2);
  var array_duration =  [ "1", "8-9", "10-12", "13-16","17" ];
  var currentRequest;

  $("body").on("click",".btn-custom-trip",function() {
    let content = $('.designtrip .content-form');
    if (content.hasClass('toHide')) {
      $('.designtrip .content-form').removeClass('toHide');
      $(this).text('Regresar');
    } else {
      $('.designtrip .content-form').addClass('toHide');
      $(this).text('Personaliza tu viaje');
    }
  });

  // This function preload the slug and category dropdown
  $(".carrousel-filters, .filters").on("click",".dropdown-menu a",function() {
      
      var $this = $(this);
      var value = $this.attr('data-value');
      var name  = $this.text();
      $this.closest('.dropdown-menu').parent().find('button a').text(name);
      $this.closest('.dropdown-menu').parent().find('button a').attr('data-value',value);
      $this.closest('.dropdown-menu').parent().find('button a, span').removeClass('inactive');
      $this.closest('.dropdown-menu').parent().find('button a, span').addClass('active');
     
  });
  // this fuction filter post or pages using dropdown filters
  $("body").on("click",".btnFilter",function() {
    console.log(2);
    if ( $( '.country-filter a' ).hasClass( "active" )) {
      var lang='';
      var country   = $('.country-filter a').attr('data-value');
      var category  = $('.type-filter a').attr('data-value');
      var duration  = $('.duration a').attr('data-value');
      if($lang != 'es'){
        lang = $lang +'/';
      }
      cookieCountry(country);
      if($.inArray(duration,array_duration) > -1 ){
        if( $( '.type-filter a' ).hasClass( "active" )  && category != 0 ){
          fbq('track', 'Search');
          window.location.href = site + lang + country + "/" + category + "/?duration="+duration;
        }else{
          fbq('track', 'Search');
          window.location.href = site + lang + country +  "/?duration="+duration;
        }
      }else{
        if( $( '.type-filter a' ).hasClass( "active" ) && category != 0){
          fbq('track', 'Search');
          window.location.href = site + lang + country + "/" + category;
        }else{
          fbq('track', 'Search');
          window.location.href = site + lang + country;
        }
      }
      
    }else{
      console.log('Some fields are required');
    }
     
  });

  // This function created permanet cookie of country

  function cookieCountry(country){
    switch(country) {
        case "panama":
            $.cookie('country-iso', "pan", { expires: 1, path: '/' });
            break;
        case "nicaragua":
            $.cookie('country-iso', "nic", { expires: 1, path: '/' });
            break;
        case "guatemala":
            $.cookie('country-iso', "gua", { expires: 1, path: '/' });
            break;    
        default:
            $.cookie('country-iso', "crc", { expires: 1, path: '/' });
    }
  }

  $("nav").on("click",".mega-dropdown .parent",function() {
    $(this).parent().find('.menu-preview .row').addClass('hide');
    $(this).parent().find('.menu-preview .row:first').removeClass('hide');
  });

  $(".dropdown.mega-dropdown").hover(function(){
    $(".dropdown.mega-dropdown").removeClass('show')
    $(".dropdown.mega-dropdown").attr("aria-expanded","false");
    $(".dropdown.mega-dropdown ul").removeClass('show')
    $(this).addClass('show');
    $(this).find('a').attr("aria-expanded","true");
    $(this).find('ul').addClass('show');
  });

  $("#navbarNav").mouseleave(function(){
    $(".dropdown.mega-dropdown").removeClass('show')
    $(".dropdown.mega-dropdown").attr("aria-expanded","false");
    $(".dropdown.mega-dropdown ul").removeClass('show')
  });


  $( ".submenu li" ).hover(
    function() {
    $('.menu-preview .row').addClass('hide');
    $('.menu-preview .' + $(this).attr('data-id')).removeClass('hide');
    }, function() {}
  );

  $( ".options-country a" ).hover(
    function() {
     $('.country_image div').css('display','none');
     $('.country_image .' + $(this).attr('data-value')).css('display','block');
    }
  );

  /** Single pack post relations **/

  $(".destinations .gallery").slick({
          dots: false,
          lazyLoad: 'ondemand',
          infinite: true,
          slidesToShow: 1,
          arrows: true,
          speed: 2000,
          autoplaySpeed:8000,
          autoplay: false,
          slidesToScroll: 1,
          arrows:true
  });

  var countHotel = $('.carrousel-hotel .col').length;
  var hotelLimit = 3;
    
  if(countHotel == 1){
    hotelLimit = 1;
    $('.carrousel-hotel').css('max-width','1024px');
  }else if(countHotel == 2){
    hotelLimit = 2;
    $('.carrousel-hotel .carrousel-img').css('height','29vh');
  }
  $(".carrousel-hotel").slick({
        dots: true,
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: hotelLimit,
        arrows: true,
        speed: 2000,
        autoplaySpeed:8000,
        autoplay: false,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 766,
              settings: {
                arrows: false,
                slidesToScroll: 1,
                slidesToShow: 1
              }
            }
            ]
  });

  var countCar = $('.carousel-car .col').length;
  var carlLimit = 2;
  
  if(countCar == 1){
    carlLimit = 1;
    $('.carousel-car').css('max-width','1024px');
  }else if(countCar == 2){
    $('.carousel-car .carousel-img').css('height','29vh');
  }

  $(".carousel-car" ).slick({
          dots: true,
          lazyLoad: 'ondemand',
          infinite: true,
          slidesToShow: carlLimit,
          arrows: true,
          speed: 2000,
          autoplaySpeed:8000,
          autoplay: false,
          slidesToScroll: 1,
          arrows:true,
          responsive: [
              {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 766,
                settings: {
                  arrows: false,
                  slidesToScroll: 1,
                  slidesToShow: 1
                }
              }
              ]
  });

  $(".achievements .achieve").slick({
          dots: true,
          lazyLoad: 'ondemand',
          infinite: true,
          slidesToShow: 1,
          arrows: true,
          speed: 2000,
          autoplaySpeed:8000,
          autoplay: false,
          slidesToScroll: 1,
          arrows:false
  });
  // This blocked is about tabs sections

  $.fn.tabbing = function (options) {
      var opts = {delayTime : 200};
      options = options || {};
      opts = $.extend(opts,options);    
      return this.each(function () {
          $(this).on('click', function (event) {
              event.preventDefault();
              var sum = 0;
              $(this).prevAll().each(function(){  sum += $(this).width();});
            var get = document.getElementById('tabs').scrollWidth
              var dist = sum - ( $(this).parent().width() - $(this).width()) / 2;
            if(dist < 0){
              dist = 0;
            }
            /* else if(dist+sum > get){
              dist = get-sum+dist+dist;
            } */
              $(this).parent().animate({
                  scrollLeft: dist
              },opts['delayTime']);
          });
      });
  };

  $('#tabs li').tabbing();


  $('#tabs li').click(function(){
    var  hashit = $(this).find('a').attr('href')
    var autoHeight = $(hashit).height() + 30;
    // $('.tab-content').animate({min-height: autoHeight}, 100);
  });

  $('.arrow-tabs a').on('click', function () {

    total    = $('.out-wrap #tabs li').length;
    $dir     = $(this).attr('data-dir');
    $current = $('.out-wrap #tabs .nav-item').find('.active').attr('href');
    $current = $current.substr(5, $current.length);
    
    if($dir == 'back'){
      if($current > 1){
        $('.out-wrap #tabs .nav-item').find('.active').parent().prev('.nav-item').find('a').click()
        $('.arrow-next').css('display','flex'); 
      }
      
      if($current < 2){
        $(this).hide();
      }

    }else{
      if($current < total){
        $('.out-wrap #tabs .nav-item').find('.active').parent().next('.nav-item').find('a').click()
        $('.arrow-back').css('display','flex');  
    }

      if($current == total){  

      $('.arrow-next').removeClass('show');        
        $(this).hide();
      }
    }

  });

  $('.out-wrap #tabs .nav-link').on('click', function () {
    total    = $('.out-wrap #tabs li').length;
    $current = $(this).attr('href');
    $current = $current.substr(5, $current.length);
    console.log($current);
    if($current > 1){
      $('.arrow-back').css('display','flex');
    }else{
      $('.arrow-back').hide();
    }

    if($current < total){          
        $('.arrow-next').css('display','flex');
    }else{
      $('.arrow-next').removeClass('show');
      $('.arrow-next').hide();
    }

  });
  
  var countTabs= $('.out-wrap #tabs li').length;
  if(countTabs > 0){
    if(screen.width >= 1920){
      if(countTabs < 7){
        $('.arrow-next').removeClass("show");
        console.log(2);
      }
    } 
  }
  
  // Endtabs sections
  
  /** Gellery Section **/
  $(".gallery").slick({
        dots: false,
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 1,//$('.gallery .slider div').length,
        arrows: true,
        speed: 2000,
        autoplaySpeed:8000,
        autoplay: false,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
        // {
        //   breakpoint: 992,
        //   settings: {
        //     arrows: true,
        //     slidesToShow: 2
        //   }
        // },
        {
          breakpoint: 766,
          settings: {
            arrows: true,
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
        ]
    });

  $('.gallery, .thumbnail').slickLightbox({
      src: 'src',
      itemSelector: '.ga-item'
  });

  /** Calendar **/
 
  var defaultRangeDate = moment(new Date()).format("YYYY/MM/DD") +' - '+ moment(new Date()).add(1, 'day').format("YYYY/MM/DD");
  var exitDateRange    = $('input[name="date-range"]').length;
  var noLuisito        = $('#form-luisito input[name="date-range"]').length
  
  if(exitDateRange > 0){
    $('input[name="date-range"]').dateRangePicker(getOptionsCalendar(false,false,0));
  }

  var defaultDate = moment(new Date()).format("YYYY/MM/DD");
  var exitDate = $('input[name="arrival"]').length;
  if(exitDate > 0){
    $('input[name="arrival"]').dateRangePicker(getOptionsCalendar(true,false,0));
  }
  
  var defaultDateBook = moment(new Date()).add(2, 'days').format("YYYY/MM/DD");
  var exitDateBook    = $('input[name="wild_booking"]').length;
  if(exitDateBook > 0){
    $('input[name="wild_booking"]').dateRangePicker(getOptionsCalendar(true,false,2));
  }

  var defaultDateBookRange = moment(new Date()).add(2, 'days').format("YYYY/MM/DD");
  var exitDateBookRange    = $('input[name="booking_range"]').length;
  if(exitDateBookRange > 0){
    $('input[name="booking_range"]').dateRangePicker(getOptionsCalendar(false,false,2));
  }

  var existBookingRange = $('.content-date').length;
  if(existBookingRange > 0){

     $(".content-date .two_inputs").dateRangePicker({
        startOfWeek: 'monday',
        separator: ' - ',
        format: 'YYYY/MM/DD',
        autoClose: true,
        showShortcuts: false,
        time: {
        enabled: false
        },
        inline: false,
        container: '.content-calendar',
        hoveringTooltip: false,
        minDate: moment().add(2,'days'),
        language: $("html").attr('lang'),
        defaultTime: moment().startOf('day').toDate(),
        defaultEndTime: moment().endOf('day').toDate(),
        startDate:moment().add(2,'days').toDate(),

        getValue: function()
        {
          $('.date .form-control').removeClass('error');
          if ($('#start_range').val() && $('#end_range').val() )
            return $('#start_range').val() + ' to ' + $('#end_range').val();
          else
            return '';
        },
        setValue: function(s,s1,s2)
        {
          $('.date .form-control').removeClass('error');
          $('#start_range').val(s1);
          $('#end_range').val(s2);
        }
    });

  }

  function getOptionsCalendar(singleDate,inline,plusDays){

    var options = {
                    startOfWeek: 'monday',
                    separator: ' - ',
                    format: 'YYYY/MM/DD',
                    autoClose: true,
                    singleDate : singleDate,
                    showShortcuts: false,
                    time: {
                      enabled: false
                    },
                    hoveringTooltip: false,
                    minDate: moment().add(plusDays,'days'),
                    language: $("html").attr('lang'),
                    defaultTime: moment().startOf('day').toDate(),
                    defaultEndTime: moment().endOf('day').toDate(),
                    startDate:moment().add(plusDays,'days').toDate(),
                    getValue: function() {
                      $('input[name="'+this.name+'"]').removeClass('error');
                      return this.value;
                    },
                    setValue: function(s) {
                      this.value = s;
                      $('input[name="'+this.name+'"]').removeClass('error');
                      var booking_from = $('input[name="booking_from"]');
                      if(booking_from.length > 0){
                        booking_from.val(s);
                      }
                     }

                  };

    if(inline == true){
      options.inline = true;
      options.container = '.date-container';
    }      

    return options
  }
 
  /** Design your Trips Steps **/
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $("#form-design").on("click",".next",function() {
    
    var $this  = $(this);
    var form   = '#form-design';
    var state  = validateForm(form + ' .step-' + $(this).attr('data-step'));

    if(state != true){
      
      flowSteps(this,'next','html, body');
   
    }
  
  });

  $("#form-design").on("click",".previous",function() {
    
    flowSteps(this,'back','html, body');

  });

  $("#form-design").on("click",".submit",function() {
    
    current_fs = $(this).parent().parent();
    next_fs = $(this).parent().parent().next();
    var state = validateForm('.step-'+$(this).attr('data-step'));
    var form   = '#' + $(this).attr('data-form');
    
    if(state != true){
      
      $(form + ' button').attr('disabled','disabled');
      $('.waiting').css('display','inline-block');
               
      $.ajax({
          type: 'POST',
          async: true,
          dataType: "json",
          url:  site + theme + "php-files/ajax/salesforce/lead.php",
          data: $(form).serialize(), 
          success: function(data){
            
            if(data[0] != 0){
                // current_fs.hide('slide', {direction: 'left'}, 600);
                // next_fs.show('slide', {direction: 'right'}, 600);
                current_fs.hide();
                next_fs.show();
                
                if($lang == 'en'){
                  dataLayer.push({'event': 'disenatuviajeEN'});
                }else if($lang == 'de'){
                  dataLayer.push({'event': 'disenatuviajeGER'});
                }else{
                  dataLayer.push({'event': 'disenatuviaje'});
                }
                fbq('track', 'Lead');
                $('#form-' + data[2])[0].reset();
                $('.cs-select .cs-options li:first-of-type').click();
                $('.cs-select').removeClass('cs-active');
                $('.waiting').css('display','none');

            }
          },
          error: function(error){
            console.log('Design Error');
          }
      });
    }

  });
  
  $('input[name="toVisit[]"]').change(function () {

    var count = $('input[name="toVisit[]"]:checked').length;
    if(count > 0){
      $('input[name="toVisit[]"]').next('label').removeClass('error-label');
    }
      
  });

  $('input[name="dn-trip"]').change(function () {

    var count = $('input[name="dn-trip"]:checked').length;
    if(count > 0){
      $('input[name="dn-trip"]').next('label').removeClass('error-label');
    }
      
  })
  
  $('input[name="dn-tickets"]').change(function () {

    var $inputs  = jQuery('.info-tickets input');
    var count = $('input[name="dn-tickets"]:checked').length;
    if(count > 0){
      $('input[name="dn-tickets"]').next('label').removeClass('error-label');
    }  
    if(this.value == "1" || this.value == 1){
       
       $('.info-tickets').css('display','flex');
       $inputs.each(function() {
          $('#'+this.id).addClass('required');
       });      
    
    }else{
       $('.info-tickets').slideUp('slow');
       $inputs.each(function() {
          $('#'+this.id).removeClass('required');
       });
       $(".info-tickets").find('input').removeClass('error');     
    }
      
  });
    
  /** End Design your Trips Steps **/

  // This function handle the way we want to display the forms by steps

  function flowSteps(ev,direction,topDiv){

    current_fs   = $(ev).parent().parent();
    direction_fs = $(ev).parent().parent().next();
   
    if(direction == 'back'){
      
      $("form").find('.error').removeClass('error');
      $("form").find('.error-label').removeClass('error-label');
      $("form").find('.cs-select').css('background','#fff');

      direction_fs = $(ev).parent().parent().prev();
    
    }
       
    current_fs.hide();
    direction_fs.show();
   
    var stepID = parseInt(current_fs.attr('data-step'))+ 1;   
    
    if(direction == 'back'){

      stepID = parseInt(current_fs.attr('data-step'));   
    
    }
    
    if(stepID == undefined){ 
      stepID = 4;
    }else if(stepID == 1){
       $('.breadcrumb-steps div:first-of-type').removeClass('current');
    } 

    if(direction == 'back'){
      $('.step-'+stepID).removeClass('current');
    }else{
      $('.step-'+stepID).addClass('current');
    }
    
    $('html, body').animate({scrollTop:$(topDiv).position().top}, 'slow');
  }

  /** Booking Section **/

  $("#different_loc").change(function() {
    if($(this).is(":checked")) {
      $('.content-drop').css('display','flex');
      $('.place_drop_off').removeClass('hide');
      $('.place_drop_off').find('input').addClass('required');
    }else{
      $('.content-drop').css('display','none');
      $('.place_drop_off').addClass('hide');
      $('.place_drop_off').find('input').removeClass('required');    
    }
  });

  // $(".chkextras").change(function() {
  //  // alert(22);
  //   if($(this).is(":checked")) {
  //     $name = $(this).attr('id');
  //     $("select[name='chk_"+$name+"'").addClass('required');
  //     $(this).parent().parent().find('.count').show();  
  //     $(this).parent().parent().find('.cs-select .cs-options li:first-of-type').click();
  //     $(this).parent().parent().find('.cs-select').removeClass('cs-active');
  //   }else{
  //     $("select[name='chk_"+$name+"'").removeClass('required');
  //     $(this).parent().parent().find('.count').hide();
  //     $(this).parent().parent().find('.cs-select .cs-options li:first-of-type').click();
  //     $(this).parent().parent().find('.cs-select').removeClass('cs-active');
  //   }
  //   $('#half_cover').parent().show();
  //   $('#full_cover').parent().show();
  //   if($(this).attr('id') == 'full_cover'){
      
  //     if($(this).is(":checked")) {
        
  //       $('#half_cover').prop('checked', false);
  //       $('#half_cover').removeClass('required');
  //       $('#half_cover').parent().hide();
      
  //     }

  //   }else if($(this).attr('id') == 'half_cover'){
      
  //     if($(this).is(":checked")) {
      
  //      $('#full_cover').prop('checked', false);
  //      $('#full_cover').removeClass('required');
  //      $('#full_cover').parent().hide();
      
  //     }

  //   }
  //   console.log();

  // });

  $("body").on("click",".booking_section .breadcrumb-steps a",function(event) {
 
    $current = parseInt($(this).attr('data-pos'));
    $valid   = $(this).parent().hasClass('current');
    
    if($valid){
      
      var $stepActive = parseInt($('.booking_section .breadcrumb-steps .current').length);
      console.log('$stepActive '+$stepActive);
      if($current < $stepActive && $stepActive < 4){
         console.log('Si');
        for(var i = $stepActive; i > $current; i--){
          $('.step-'+ i).parent().find('.back-step a').click(); 
        } 

    
      }     

    }

  });

  $("body").on("click",".frmBooking .btnNext",function(event) {
    event.stopPropagation();
   
    var $this    = $(this);
    var form     = '.frmBooking';
    var state    = validateForm(form + ' .step-' + $(this).attr('data-step'));
    var position = $($this).attr('data-step');
    var extra    = $($this).attr('data-extra');

    if(state != true){

      $($this).attr('disabled','disabled');
      $(form + ' .waiting').css('display','inline-block');

      if(position == 1 || extra != undefined){
          console.log('entro');
          $.ajax({
            type: "POST",
            dataType: 'JSON',
            data: $(form).serialize(),   
            url: site +theme + "php-files/ajax/tourplan/tourplan-request.php",
              beforeSend: function( xhr ) {
                console.log('enviando...');
              },
              complete: function(response) {
                
                  var obj = jQuery.parseJSON(response.responseText );
           
                
                  if(obj.code == 200){

                      fbq('track', 'Search');

                      // this booking is available
                      console.log('OPT ' + obj.opt);

                       $('.summary_book').html(obj.message);
                       // $('.booking_' + (position-1)).fadeOut(500);
                       // $('.booking_' + position).fadeIn();
                       $("input[name='opt']").val(obj.opt);        
                       $(form + ' button').removeAttr('disabled');

                      var name = 'Nombre';
                      var lastName = 'Apellido';
                      
                      if( $lang == "en"){
                        
                        name = "Name";
                        lastName = 'LastName';

                      }else if( $lang == "de"){

                        name = "Vorname";
                        lastName = 'Nachname';

                      }

                      $('.aboutYou_Adults').html('');
                      $('.aboutYou_Children').html('');
                      $('.aboutYou_Infants').html('');

                      if(obj.adults > 0){
                         createDomBooking('Adults',obj.adults,'Adulto(s)',name,lastName);
                      }

                      if(obj.children > 0){
                        createDomBooking('Children',obj.children,'Niño(s)',name,lastName);
                      }

                      if(obj.infants > 0){
                        createDomBooking('Infants',obj.infants,'Infantes(s)',name,lastName);
                      }
                        
                      flowSteps($this.parent().parent(),'next','#booking');

                  }else{
                    $('.booking_message').slideDown('slow');
                    $('.booking_message').html(obj.message);
                    setTimeout(function () {
                         $('.booking_message').slideUp('slow');
                     }, 6000);
                  }

                  $(form + ' .waiting').css('display','none');
                  $($this).removeAttr('disabled');
               
            },
              error: function(error) {
                console.log(error);
                $(form + ' .waiting').css('display','none');
      
              }
          });

      }else{
        
        $($this).removeAttr('disabled');
        // $('.booking_' + (position-1)).fadeOut(500);
        // $('.booking_' + position).fadeIn();
        flowSteps($(this).parent(),'next','#booking');
        $(form + ' .waiting').css('display','none');
      

      }
    }

  });

  $('.frmBooking .previous').on('click', function () {
    flowSteps($(this).parent(),'back','#booking');
  });

  $("body").on("click",".frmBooking .btnBook",function(event) {
    event.stopPropagation();
    var $this  = $(this);
    console.log($(this).attr('data-key'));
    var form   = '.frmBooking';
    var state  = validateForm(form + ' .step-' + $(this).attr('data-step'));
    var terms  = validateForm(form + ' .terms-conditions');
    var key    = $(this).attr('data-key');
    $('#optionBooking').val(key);
    var position = $($this).attr('data-step');

    if(state != true && terms != true){

      $this.find('i').css('display','inline-block');
      $this.attr('disabled','disabled');
        $.ajax({
            type: "POST",
            dataType: 'JSON',
            data: $(form).serialize(),   
            url: site +theme + "php-files/ajax/tourplan/tourplan-booking.php",
              beforeSend: function( xhr ) {
                console.log('enviando...');
              },
              complete: function(response) {
                  console.log('termino...');
                  var obj = jQuery.parseJSON(response.responseText );
           
                  console.log(obj);
                  if(obj.code == 200){
                    
                    fbq('track', 'AddToCart');
                    fbq('track', 'InitiateCheckout');

                    if(obj.postType == 'tour'){
                      $('.booking_detail .items .rates').html(obj.service);  
                    }else{
                      $('.date_travel').html(obj.datetravel);
                      if(obj.extras != '' && obj.extras != undefined){
                        $('.block_extras').html(obj.extras);
                      }else{
                        $('.carinfo').hide();                     
                      }
                      
                      $('.bk_driver').html(obj.full_name);
                       
                    }
                   
                    $('.bk_name').html(obj.bookingName);                    
                    $('.bk_reference').html(obj.ref);
                    $('.bk_price').html(obj.price); 
                    $('#panel-result').html(obj.stripe);
                    $('#panel-result').show();
                    flowSteps($this.parent(),'next','#booking');
                    
                    if(key != 'save'){
                      $('.readme').hide();
                    }

                  }else{
                    $('.booking_message').slideDown('slow');
                    $('.booking_message').html(obj.message);
                    setTimeout(function () {
                         $('.booking_message').slideUp('slow');
                     }, 6000);                    
                  }

                  $this.find('i').css('display','none');
                  $this.removeAttr('disabled');
               
            },
              error: function(error) {
                console.log(error);
                $(form + ' .waiting').css('display','none');
      
              }
        });
      
      }

  });

  function createDomBooking(type,limit,title,name,lastName){
    
    $('.aboutYou_' + type).html('');
    $('.aboutYou_' + type).html('<div class="title-wrap">'+ title +'</div>');

    for (var i = 0; i < limit; i++) {

      if(i == 0 && type == 'Adults'){

        $('.aboutYou_' + type).append("<div class='row'>" +
      "<div class='form-group col-md-4 p-0 pr-md-3'>" +
      "<input type='text' class='form-control required josue' name='name_" + type + "[]' placeholder='" + name + "'/>" +
      "</div>" +
      "<div class='form-group col-md-4 p-0 pr-md-3'>" +
      "<input type='text' class='form-control required josue'  name='lastName_" + type + "[]' placeholder='" + lastName + "'/>" +
      "</div>" +
      "<div class='form-group col-md-4 p-0 pr-md-3'>" +
      "<input type='email' class='form-control required josue'  name='main_mail' placeholder='Email'/>" +
      "</div>" +
      "</div> ");

      }else{

        $('.aboutYou_' + type).append("<div class='row'>" +
        "<div class='form-group col-md-6 p-0 pr-md-3'>" +
        "<input type='text' class='form-control required josue' name='name_" + type + "[]' placeholder='" + name + "'/>" +
        "</div>" +
        "<div class='form-group col-md-6 p-0 pr-md-3'>" +
        "<input type='text' class='form-control required josue'  name='lastName_" + type + "[]' placeholder='" + lastName + "'/>" +
        "</div>" +
        "</div> ");  
      
      }
      

    } 
  }

  /** End Booking Section **/


  // esta funcion esta lista
  function getLoadingGif(){
      return '<p class="text-center"><img src="'+ site + theme +'assets/images/loading.gif" width="150"/></p>';
  }

  // esta funcion esta lista
  function requestXHR($file, $data, $output, $loading , $async){
    
      cancelCurrentRequest();
      var result = 0;
      
      $($loading).css('display','inline-block');
      $('.notResults').hide();
      $('.pagination').show();

      currentRequest = $.ajax({
          type: 'POST',
          async: $async,
          dataType: "json",
          url:  site + theme + "php-files/ajax/"+ $file +".php",
          data: $data, 
          success: function(data){
            console.log('AQUI');

            console.log(data);

            if(data != 0){
              
              if(data[0] == 'success-form'){

                $('#form-' + data[2])[0].reset();
                $('#form-' + data[2]).submit();
                $('.cs-select .cs-options li:first-of-type').click();
                $('.cs-select').removeClass('cs-active');

                if(exitDate > 0){
                  $('input[name="arrival"]').val(defaultDate);
                }

                if(exitDateRange > 0){
                  $('input[name="date-range"]').val(defaultRangeDate);
                }

                $($output).slideDown('slow');
                $('#form-'+data[2]+' button').hide();
                $('.waiting').css('display','none');
                $('.info-tickets').hide();

                setTimeout( function() {
                  $('#form-'+data[2]+' button').slideDown('slow');
                  $($output).hide();
                  $('#form-'+data[2]+' button').removeAttr('disabled');
                  $('.exit').click();
                }, 4000 );
                
                switch(data[2]){
                    case 'package':
                      fbq('track', 'Lead');
                      if($lang == 'en'){
                      //dataLayer.push({'event': 'tripsformEN'});
                        dataLayer.push({'event': 'disenatuviajeEN'});
                      }else if($lang == 'de'){
                      //dataLayer.push({'event': 'paquetes_GER'});
                        dataLayer.push({'event': 'disenatuviajeGER'});
                      }else{
                      //dataLayer.push({'event': 'tripsform'});
                        dataLayer.push({'event': 'disenatuviaje'});
                      }
                    break;
                    case 'hotel':
                      fbq('track', 'Lead');
                      if($lang == 'en'){
                        //dataLayer.push({'event': 'hotelsformEN'});
                        dataLayer.push({'event': 'disenatuviajeEN'});
                      }else if($lang == 'de'){
                        //dataLayer.push({'event': 'hoteles_GER'});
                        dataLayer.push({'event': 'disenatuviajeGER'});
                      }else{
                        //dataLayer.push({'event': 'hotelsform'});
                        dataLayer.push({'event': 'disenatuviaje'});
                      }
                    break;
                    case 'tour':
                      fbq('track', 'Lead');
                      if($lang == 'en'){
                        //dataLayer.push({'event': 'tourformEN'});
                        dataLayer.push({'event': 'disenatuviajeEN'});
                      }else if($lang == 'de'){
                        //dataLayer.push({'event': 'tours_GER'});
                        dataLayer.push({'event': 'disenatuviajeGER'});
                      }else{
                        //dataLayer.push({'event': 'tourform'});
                        dataLayer.push({'event': 'disenatuviaje'});
                      }  
                    break;
                    case 'transportation':
                      fbq('track', 'Lead');
                      if($lang == 'en'){
                        dataLayer.push({'event': 'rentacarformEN'});
                      }else if($lang == 'de'){
                        dataLayer.push({'event': 'carrental_GER'});
                      }else{
                        dataLayer.push({'event': 'rentacarform'});
                      }
                    break;
                    case 'contact':
                      fbq('track', 'CompleteRegistration');
                      if($lang == 'en'){
                        //dataLayer.push({'event': 'contactformEN'});
                        dataLayer.push({'event': 'disenatuviajeEN'});
                      }else if($lang == 'de'){
                        //dataLayer.push({'event': 'contactform_GER'});
                        dataLayer.push({'event': 'disenatuviajeGER'});
                      }else{
                        //dataLayer.push({'event': 'contactform'});
                        dataLayer.push({'event': 'disenatuviaje'});
                      }
                    break;
                    case 'fitour':
                      fbq('track', 'Lead');
                      dataLayer.push({'event': 'fitour'});
                    break;
                    default:
                      fbq('track', 'Lead');
                      //dataLayer.push({'event': data[2]});
                      dataLayer.push({'event': 'disenatuviaje'});
                    break;
                } 

              }else if(data[0] != 'login-profile'){
                  
                  console.log(data[3]);                  

                  if(data[2] == 'thin' && data[3] == ''){
                    $($output).append(data[0]);
                    $pos = $('.showmore a').attr('data-pos');
                    $pos = parseInt($pos)+1;
                    if($pos > data[1]){
                      $('.showmore').slideUp('slow');  
                    }
                    $('.showmore a').attr('data-pos',$pos);

                  }else{
                    $($output).html(data[0]);
                  }
                  
                  $('.pag-footer .p-next').attr('max-page',data[1]);
                  console.log('JOsue '+ data[1]);
                  $('.page-limit').text(data[1]);
                  
                  if(data[1] < 2){
                  
                    $('.controls').hide();
                  
                  }else{

                    console.log('JOsue '+ data[1]);
                    $('.page-limit').text(data[1]);
                  }
              
              }
            
            }else{

              $($output).html('');
              $('.notResults').show();
              $('.pagination').hide();

            }

            if($loading != $output){
              $($loading).css('display','none');
            }
            
            result = data;
          },
          error: function(error){
            $($loading).css('display','none');
            result = error;
          }
      });

      return result;
  }
    
  $("body").on("click",".fitour .form button",function(event) {
    event.stopPropagation();
    var form   = '#' + $(this).attr('data-form');
    var result = validateForm( form );
    if(!result){
      $(form + ' button').attr('disabled','disabled');
      $data = $(form).serialize();
      requestXHR('salesforce/lead', $data, '.success-info','.waiting',true );
    }
  });

  $("body").on("click",".frmCommon button",function(event) {
    event.stopPropagation();
    var form   = '#' + $(this).attr('data-form');
    var result = validateForm( form );
    if(!result){
      $(form + ' button').attr('disabled','disabled');
       $data = $(form).serialize();
      // requestXHR('salesforce/lead', $data, '.success-info','.waiting',true );
      var setting = ["newlead", 5, $(this).attr('data-form'), form+' '+ '.booking-button','.success-info'];
      ajaxRequest('salesforce/send',$(form).serialize(),setting,true);
      

    }
  });

  // esta funcion esta lista
  $("body").on("click",".user-opt a",function(event) {
    event.preventDefault();
    $next_div = $(this).attr('data-opt');
    $('.user-opt').hide();
      $("."+ $next_div).show(); 
  });

  // esta funcion esta lista
  $("body").on("click",".goback a",function(event) {
    event.preventDefault();
    $div_hidden = $(this).attr('data-opt');
    $("."+ $div_hidden).hide();
      $('.user-opt').show();  
  });
  
  // esta funcion esta lista
  $("body").on("click","#btn_register",function(event) {
    event.preventDefault();

    $('#btn_register i').css('display','inline-block');
    $(this).attr('disabled',true);
    var flag_form = validateForm('#form-register');
    
    if(!flag_form){
      
      var data   = $('#form-register').serialize();
      var response = requestXHR('user-login-register', data , '', '',false);
      //$('#btn_register i').css('display','none');
      $(this).removeAttr('disabled');
      
      if(response[0] != 0 ){

        $('.name-profile').text(response[1]);

        if(response[2] != null){

          $('.login-section .icon').html("<img src='"+ response[2]+"'/>");  
        
        }else{

          $('.login-section .icon').html("<i class='fa fa-user-circle-o' aria-hidden='true'></i>"); 

        }

        $('.name-profile').text(response[1]);
        $('.form-register').hide();
        $('.user-profile').show();  
        fbq('track', 'CompleteRegistration');

      }else{
        
        $('#form-register .email').css('display','block');
        setTimeout( function() {
        $('#form-register .email').hide();
      }, 10000 );
         
      
      }

    }else{
      $('#btn_register i').css('display','none');
        $(this).removeAttr('disabled');
    }

  });

  // esta funcion esta lista
  $("body").on("click","#btn_login",function(event) {
    event.preventDefault();
    
    //$('#btn_login i').css('display','inline-block');
    $(this).attr('disabled',true);
    var flag_form = validateForm('#form-login');
    
    if(!flag_form){
      
      var data   = $('#form-login').serialize();
      var response = requestXHR('user-login-register', data , '', '',false);
      //$('#btn_register i').css('display','none');
      $(this).removeAttr('disabled');
      
      if(response[0] != 0 ){

        $('.name-profile').text(response[1]);

        if(response[2] != null){

          $('.login-section .icon').html("<img src='"+ response[2]+"'/>");  
        
        }else{

          $('.login-section .icon').html("<i class='fa fa-user-circle-o' aria-hidden='true'></i>"); 

        }

        $('.name-profile').text(response[1]);
        $('.user-login').hide();
        $('.user-profile').show();  

      }else{
        
      $('.login_error').css('display','block');
        setTimeout( function() {
        $('.login_error').hide();
      }, 10000 );
         
      
      }

    }else{
      $('#btn_login i').css('display','none');
        $(this).removeAttr('disabled');
    }

  });
  
  // esta funcion esta lista
  $('.form input:not(:input[type="button"])').focusout(function(event){
    
    if (event.target.value.replace(/\s/g, '') != '') {
      $("input[name='"+ event.target.name +"']").removeClass('error');
    }else{
      $("input[name='"+ event.target.name +"']").addClass('error');
    }

  });

  $('.form textarea').focusout(function(event){
    
    if (event.target.value.replace(/\s/g, '') != '') {
      $("textarea[name='"+ event.target.name +"']").removeClass('error');
    }else{
      $("textarea[name='"+ event.target.name +"']").addClass('error');
    }

  });

  // esta funcion esta lista
  function validateForm(form){
      console.log(form);
      var $inputs  = jQuery(form + ' .required');
      var hasError = false;
      var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
      
      if($inputs.length > 0){
        $inputs.each(function() {
          
          switch(this.type){
            case 'checkbox':
              var count = $('input[name="'+this.name+'"]:checked').length;
              if(count < 1){
                $(form + ' input[name="'+this.name+'"]').next('label').addClass('error-label');
                $(form + ' input[name="'+this.name+'"]').next('label').next('a').addClass('error-label');
                hasError = true;
              }else{
                $(form + ' input[name="'+this.name+'"]').next('label').removeClass('error-label');
                $(form + ' input[name="'+this.name+'"]').next('label').next('a').removeClass('error-label');
              }
              
            break;
            case 'radio':
              var count = $('input[name="'+this.name+'"]:checked').length;
              if(count < 1){
                $(form + ' input[name="'+this.name+'"]').next('label').addClass('error-label');
                $(form + ' input[name="'+this.name+'"]').next('label').next('a').addClass('error-label');
                hasError = true;
              }else{
                $(form + ' input[name="'+this.name+'"]').next('label').removeClass('error-label');
                $(form + ' input[name="'+this.name+'"]').next('label').next('a').removeClass('error-label');
              }
              
            break;
            case 'select-one':
              console.log('NAme: ' + this.name + ' '+this.value )
              if(this.value < 1 || this.value.replace(/\s/g, '') == '' ){
               
                $(form + ' select[name="'+this.name+'"]').parent().css('background','#f7dada');
                hasError = true;
              }
              
            break;
            case 'text':
              if(this.value.replace(/ /g, '') == ''){
                $(form + ' input[name="'+this.name+'"]').addClass('error');
                $(form + ' input[name="'+this.name+'"]').val(''); 
                hasError = true;
              }
            break;
            case 'email':
              if(validacion_email.test(this.value) == false){
                $(form + ' input[name="'+this.name+'"]').addClass('error');
                //$('#'+this.id).val(''); 
                hasError = true;
              }
            break;
            case 'time':
              if(this.value.replace(/ /g, '') == ''){
                $(form + ' input[name="'+this.name+'"]').addClass('error');
                $(form + ' input[name="'+this.name+'"]').val(''); 
                hasError = true;
              }
            break;
            case 'textarea':
              if(this.value.replace(/ /g, '') == ''){
                $(form + ' textarea[name="'+this.name+'"]').addClass('error');
                hasError = true;
              }
            break;
            case 'password':
              if(this.value.replace(/ /g, '') == '' && this.value.length < 5){
                $(form + ' input[name="'+this.name+'"]').addClass('error');
                //$('#'+this.id).val(''); 
                hasError = true;
              }
            break;
          }
          
        });
      }
    return hasError;
  }

  /** Pagination section **/

  $("body").on("click",".p-back",function(event) {

      var paged = parseInt($('.pag-footer .current-page').text()) - 1;
      var max_limit = parseInt($('.pag-footer .p-next').attr('max-page'));
      var keyword   = $("input[name='filterTours']").val();
      var duration  = $('.duration a').attr('data-value');
      var order     = $('#order-dropdown').val();
      var orderby   = 'id';

      switch(order){
        case "newest":
          order = 'DESC';
        break;
        case "oldest":
          order = 'ASC';
        break;
        case "higher":
          order   = 'DESC';
          orderby = 'price';
        break;
        case "lowest":
          order   = 'ASC';
          orderby = 'price';
        break;
      }

      if(duration != 0 && duration != undefined){
        if(duration != '1'){
          duration = duration + "_days";
        }else{
          duration = duration + "_week";
        }
      }
      
      if(paged < max_limit){
        $('.split').show(); 
        $('.p-next').show();
      }

      if(paged < 2){
        $(".p-back").hide();
        $('.split').hide(); 
      }
      
      $('.current-page').text(paged);
      
      var post_type = $('#wrap-content').attr('data-post-type');
      var category  = $('#wrap-content').attr('data-category');
      var cat_type  = $('.packs').attr('data-category-type');

      var data = {"key" : keyword,'lang': $lang, 'post_type':post_type, 'category': category, 'type':2, 
                  'paged':paged,'duration':duration,'order':order,'orderby':orderby,'cat_type': cat_type};

      var result = requestXHR('post-tours', data, '.packs .content-result','.loading_posts',true);

  });

  $("body").on("click",".p-next",function(event) {
    
    var paged     = parseInt($('.pag-footer .current-page').text()) + 1;
    var max_limit = parseInt($('.pag-footer .p-next').attr('max-page'));
    var keyword   = $("input[name='filterTours']").val();
    var duration  = $('.duration a').attr('data-value');
    var order     = $('#order-dropdown').val();
    var orderby   = 'id';

    switch(order){
      case "newest":
        order = 'DESC';
      break;
      case "oldest":
        order = 'ASC';
      break;
      case "higher":
        order   = 'DESC';
        orderby = 'price';
      break;
      case "lowest":
        order   = 'ASC';
        orderby = 'price';
      break;
    }

    if(duration != 0 && duration != undefined){
      if(duration != '1'){
        duration = duration + "_days";
      }else{
        duration = duration + "_week";
      }
    }
    
    if(paged > 1 && paged <= max_limit){

      $('.p-back').show();
      $('.split').show(); 
    }

    if(paged >= max_limit){
      $('.p-next').hide();
      $('.split').hide();   
    }
    
    $('.current-page').text(paged);
    
    var post_type = $('#wrap-content').attr('data-post-type');
    var category  = $('#wrap-content').attr('data-category');
    var cat_type  = $('.packs').attr('data-category-type');

    var data = {"key" : keyword,'lang': $lang, 'post_type':post_type, 'category': category, 'type':2, 
                'paged':paged,'duration':duration,'order':order,'orderby':orderby,'cat_type':cat_type};
    
    var result = requestXHR('post-tours', data, '.packs .content-result' ,'.loading_posts',true);
  });

  // esta funcion esta lista
  function reorderResults(column, order, _card = '.card-post'){

    $('.content-result').each(function(){
        var $this = $(this);
        $this.append($this.find(_card).get().sort(function(a, b) {
            if (order == "desc"){
              return $(a).attr(column) - $(b).attr(column); 
            }else{
              return $(b).attr(column) - $(a).attr(column);
            }
            
        }));
    });

  }

  /** End Pagination section **/

  /*** Selects ***/
 
  [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {  

    new SelectFx(el, {
      stickyPlaceholder: true,
      onChange: function(val){
          
        $('select[name="'+el.name+'"]').parent().css('background','initial');

        //console.log("Josyue "+ el.attr('data-order'));
        if(el.id == 'order-dropdown'){
          
          switch(val){
            
            case 'newest':
              reorderResults('data-order','desc');
            break;
            case 'oldest':
              reorderResults('data-order','asc');
            break;
            case 'higher':
              reorderResults('data-price','asc');
            break;
            case 'lowest':
              reorderResults('data-price','desc');
            break;
            default:
            break;
          
          }
        
        }

        if(el.name == 'pax_filter'){ ajaxRequest('post/post',$('.frm-booking').serialize(),'content-result',true); }
        if(el.name == 'departure_place_book'){ $('input[name="departure_point"]').val(val); }
        if(el.name == 'insurance'){ 
          var setting = ["booking", 99,'cars-choose'];
          ajaxRequest('tourplan/tourplan-request',$('.form-car').serialize(),setting,true);
        }
        
      }
    });
  });

  /** End Selects **/ 

  window.fbAsyncInit = function() {
      FB.init({
        appId      : '124586031578946',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.10'
      });
     // FB_loginStatus();
  };

  // Load the SDK Asynchronously
  (function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/es_ES/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
  }(document));


  function share_fb() {
      
      var content = $('.short-description .content').text();
      var title   = $('.carrousel-info h1').text();
      var url     = $('.share-like').attr('data-url');
      var img     = $('.share-like').attr('data-img');
      
      FB.ui({
          method: 'share_open_graph',
          action_type: 'og.shares',
          action_properties: JSON.stringify({
              object : {
                 'og:url': url, // your url to share
                 'og:title': title,
                 'og:description': content,
                 'og:image': img
              }
          })
          },
          // callback
          function(response) {
          if (response && !response.error_message) {
              // then get post content
              console.log('successfully posted');
          } else {
              console.log('Something went error.');
          }
      });

  }

  $("body").on("click",".fbg-api .fb",function(event) {
     var form_type = $(this).attr('form-type');
     FB_loginStatus(form_type);
  });
      
  function FB_loginStatus(form_type){

    FB.login(function(response) {
    
        if (response.authResponse) {

          var FB_permiss = true;
          var FB_userID = response.authResponse.userID;
          
          FB.api('/me/permissions', function(perm) {
          
          for (i = 0; i < perm.data.length; i++) { 
           
            if (perm.data[i].status == 'declined' && perm.data[i].permission == 'email' ) {
              FB_permiss = false;
              return;
            }
          }

          if(!FB_permiss){
            FB_loginStatus(form_type);
          }else{
            FB.api('/me', {fields: 'id,first_name,last_name,email'}, function(response) {
               
               var image_url = 'https://graph.facebook.com/'+response.id+'/picture?type=large';

               var data = {'form-type':'red_social','id_social':response.id,'name':response.first_name,
                       'lastName':response.last_name,'email':response.email,'red':'facebook','image':image_url};

               var response = requestXHR('user-login-register', data , '', '',false);

            if(response[0] != 0 ){

                $('.name-profile').text(response[1]);

                if(response[2] != null){

                  $('.login-section .icon').html("<img src='"+ response[2]+"'/>");  
                
                }else{

                  $('.login-section .icon').html("<i class='fa fa-user-circle-o' aria-hidden='true'></i>"); 

                }

                $('.name-profile').text(response[1]);
                $('.' + form_type).hide();
                $('.user-profile').show();  
        
              }
            
            });
          }

        });
      }else{
        console.log('No Dio permisos');
      }

    },{scope: 'public_profile,email',auth_type: 'rerequest'});
  }

  $("body").on("click",".fbg-api .gplus",function(event) {
      var form_type = $(this).attr('form-type');
      Google_loginStatus(form_type);
  });

  function Google_loginStatus(form_type){

      gapi.load('client:auth2', {
        
        callback: function() {
          gapi.client.init({
              clientId: '710062963836-2auf3p1qqv82p3j8faj9qneaopa0smqu.apps.googleusercontent.com',
              apiKey:   'AIzaSyAnLViX798gcm7A6jgLqnkhgrpGtS6i2Ns',
              scope:    'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
          }).then(
            
            function(success) {
                
                gapi.auth2.getAuthInstance().signIn().then(
                
                function(success) {
          
                  // API call to get user information
                  gapi.client.request({ path: 'https://www.googleapis.com/plus/v1/people/me' }).then(
                    // On success
                    function(success) {
                      var user_info = JSON.parse(success.body);
                      var data = {'form-type':'red_social','id_social':user_info.id,'name':user_info.displayName,
                                'lastName':'N/A','email':user_info.emails[0].value,'red':'google', 'image':user_info.image.url};

                        var response = requestXHR('user-login-register', data , '', '',false);

                        if(response[0] != 0 ){

                            $('.name-profile').text(response[1]);

                            if(response[2] != null){

                              $('.login-section .icon').html("<img src='"+ response[2]+"'/>");  
                            
                            }else{

                              $('.login-section .icon').html("<i class='fa fa-user-circle-o' aria-hidden='true'></i>"); 

                            }

                            $('.name-profile').text(response[1]);
                            $('.' + form_type).hide();
                            $('.user-profile').show();  
                            fbq('track', 'CompleteRegistration');
                          }

                    },
                    // On error
                    function(error) {
                      console.log('Error : Failed to get user user information');
                    }
                  );
                },
                // On error
                function(error) {
                  console.log('No dio permisos');
                }
              );
            }, 
            // On error
            function(error) {
              console.log('Error : Failed to Load Library');
              }
          );
        }

      });
  }

  $("body").on("click",".currency-iso a",function(event) {
      var currency = $(this).attr('data-currency');
      $.cookie('currency-code', currency, { expires: 1, path: '/' });
      location.reload();
  });

  $("body").on("click",".country-choose .dropdown-menu a",function(event) {
      var country = $(this).attr('data-country');
      //document.cookie = "country-iso=" + country + ";expires=30;path=/";
      $.cookie('country-iso', country, { expires: 1, path: '/' });
      location.href = site;
  });
  
  $("body").on("click",".bookcar",function(event) {
     event.stopPropagation();
     var obj = $(this);
     $('html, body').animate({
          scrollTop: $(obj.attr('href')).offset().top
     }, 1000);
     fbq('track', 'ReservarViaje');
  });

  $("body").on("click",".short-description .controls button",function(event) {
      event.stopPropagation();

      fbq('track', 'PersonalizarViaje');
      $('.sidebar').css('transform','translate3d(100%, 0, 0)');
      $(".sidebar").find('[form-post]').addClass('hide');
      
      var form = $(this).attr('form-post');
      $('.short-description .controls button').removeClass('active');
      $(this).addClass('active');

      $('.sidebar').css('transform','translate3d(0, 0, 0)');
      $(".sidebar").find('[form-post='+ form +']').removeClass('hide');
      $('.sidebar form').find('.error').removeClass('error');
       $(window).scrollTop($('body').offset().top).scrollLeft($('body').offset().left); 
  });

  $("body").on("click",".exit",function(event) {

      $('.sidebar').css('transform','translate3d(100%, 0, 0)');
      $('.short-description .controls button').removeClass('active');
      $('.sidebar form').find('.error').removeClass('error');
  });

  // $(document).on('click', function (event) {
  
  //  if(!$(event.target).hasClass('fa') && !$(event.target).hasClass('available')){
  //     if (!$(event.target).closest('.sidebar').length ) {
  //       // ... clicked on the 'body', but not inside of #menutop
  //        $('.sidebar').css('transform','translate3d(100%, 0, 0)');
  //        $('.short-description .controls button').removeClass('active');
  //     }
  //   }
    
  // });

  $("body").on("click",".shareFB",function(event) {

     share_fb();
  
  });

  $("body").on("click",".shareTW",function(event) {

      var content = $('.short-description .content').text();
       var url     = "";//$('.share-like').attr('data-url');
      var posicion_x; 
      var posicion_y; 
      var ancho=575;
      var alto=354;
      posicion_x=(screen.width/2)-(ancho/2); 
      posicion_y=(screen.height/2)-(alto/2);
      window.open("https://twitter.com/share?text="+ url +"", "Asuaire.com", "width="+ancho+",height="+alto+",menubar=0,toolbar=0,directories=0,scrollbars=no,resizable=no,left="+posicion_x+",top="+posicion_y+"");

  });

  $("body").on("click",".calendar-input",function(event) {
      $('#arrival').click();
  });

  $("body").on("click",".months a",function(event) {
      
      $month = $(this).attr('data-month');

      $('.content-weather').find('.weather').hide();
      $('.months').find('a').removeClass('active');
      $(this).addClass('active');
      $('.month-'+$month).slideDown('slow');
      console.log($month);
  
  });
  
  $("body").on("click",".page-videos a",function(event) {
      
      $video = $(this).attr('data-video');
      $url   = 'https://www.youtube.com/embed/'+$video+'/?autoplay=1';
      $('#video-asuaire').attr('src',$url);
      $('#video-modal').modal('show');

  });

  $('#video-modal').on('hidden.bs.modal', function (e) {
    $('#video-asuaire').attr('src','');
  })
  
  $("body").on("click",".customer-testimonials .nav a",function(event) {
      
      $nav     = $(this).attr('data-nav');
      $current   = $(".customer-testimonials .feature").find(".active");
      
      if($nav == 'prev'){
        $prevVideo = $current.prev();
        if($prevVideo.length > 0){
          $current.prev().addClass("active");
          $current.removeClass("active");
        }
      }else{
        $nextVideo = $current.next();
        if($nextVideo.length > 0){
          $current.next().addClass("active");
          $current.removeClass("active");
        }
      }
      
  }); 

  $("body").on("click",".customer-testimonials .feature a",function(event) {
      $video = $(this).attr('data-video');
      $url   = 'https://youtube.com/embed/'+$video+'/?autoplay=1';
      $('#vblog_asuaire').attr('src',$url);
      $('#vblog').modal('show');
  });  

  $('#vblog').on('hidden.bs.modal', function (e) {
    $('#vblog_asuaire').attr('src','');
  })

  // var fixmeTop = $('.sidebar');

  // if(fixmeTop.length > 0){
    
  //   fixmeTop = fixmeTop.offset().top;

  $(window).scroll(function() {
    
        var currentScroll = $(window).scrollTop();
        if( currentScroll > 400){ currentScroll -= 200; }
        $('.loading').css('padding-top',currentScroll+'px');
        // mitop  = currentScroll ;
        // console.log(mitop);
        // if (currentScroll > fixmeTop) {
        //     $('.sidebar').addClass('fixmetop');
        //     $('.sidebar').css('margin-top',mitop+'px');
    
        // } else {
    
        //     $('.sidebar').removeClass('fixmetop');
            
        //     $('.sidebar').css('margin-top','0px');
        // }
    
  });
  


  var $touch = document.querySelector('body');
  $touch.addEventListener('touchstart', function(e){},true);

  $totalCards = $(".post-related .post-wrap .card-post").length;

  if($totalCards > 3){
    $totalCards = 4;    
  } 
  /*****/
  $(".post-related .post-wrap").not('.wrap_related .slick-initialized').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: $totalCards,
      // centerMode: true,
      // variableWidth: true,
      // focusOnSelect: true,
      responsive: [
                    {
                      breakpoint: 1260,
                      settings: {
                        arrows: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 3,
    
                      }
                    },
                    {
                      breakpoint: 991,
                      settings: {
                        arrows: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 2,
    
                      }
                    },
                    {
                      breakpoint: 620,
                      settings: {
                        arrows: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
    
                      }
                    },
                  ]
  });

  $( ".showmenu" ).click(function() {
  //  alert( "Handler for .click() called." );
     $('.menumobile').css('transform','translate3d(0, 0, 0)');
     $('.wrap-menu').addClass('toFixed');
  });
  $( ".closemenu a" ).click(function() {
     $('.menumobile').css('transform','translate3d(100%, 0, 0)');
     $('.wrap-menu').removeClass('toFixed');
  });
  $('.post-gallery').slickLightbox({
      src: 'src',
      itemSelector: '.ga-item'
  });

  $("body").on("click",".post-gallery .overlay",function() {
    $(this).parent().find('img').click();
  });

  $("body").on("click",".btnSuscribe",function(event) {
    event.stopPropagation();
    var result = validateForm('.form-suscribe' );

      if(!result){
        $(this).attr('disabled','disabled');
        $('.waiting').show();
          $data = $('.form-suscribe').serialize();
              $.ajax({
                type: 'POST',
                async: true,
                dataType: "json",
                url:  site + theme + "php-files/ajax/suscribe.php",
                data: $data, 
                success: function(data){
                  
                  if(data != 0){
                    
                    if(data[0] == 'success-form'){
                       
                      $('.form-suscribe')[0].reset();
                      $('.approval .group-check').slideUp('slow');
                      $('.thankSuscribe').slideDown('slow');
                      $('.form-signup button').removeAttr('disabled','disabled');
                     
                      setTimeout( function() {
                        $('.thankSuscribe').slideUp('slow');
                        $('.approval .group-check').slideDown('slow');
                      }, 4000 );

                      $('.waiting').hide();
                             
                    }else{
                      $('.waiting').hide();
                      $('.form-signup button').removeAttr('disabled','disabled');
                    }

                  }
                  
                },
                error: function(error){
                  $('.waiting').css('display','none');
                  $('.waiting').hide();
                  result = error;
                }
            });
      }    
  });

  $("body").on("click",".transportation .booking-button-quote button",function(event) {
    event.stopPropagation();

    var postStep = parseInt($(this).attr('data-step')); 
    var postID = $(this).attr('data-post');
    var nextStep = postStep + 1;
    var validator = '.form-car .wrap-' + postStep;
    if(postStep < 2){ validator = ".frmFormSearchCar"; }
    var hasError = validateForm(validator);

    console.log('hasError->' + hasError);
    // return false;
    if(!hasError){ 
      $('#cartitle').val($(this).attr('data-title'));
      $('#moreInfo').modal('show');
    } else {
      if( postStep == 1){
          $('.booking-message').slideDown('slow');  
          $('html, body').animate({scrollTop:$('.save-zone').position().top}, 'slow');
          setTimeout(function(){ $('.booking-message').slideUp('slow'); }, 4000);
      }
    }
  });

  $("body").on("click",".btnSendRequest",function(event) {
    event.stopPropagation();

    var validator = '.requestForm .form-car';
    var hasError = validateForm(validator);
    console.log('hasError->' + hasError);
    // return false;
    if(!hasError){ 

      $('.btnSendRequest').attr('disabled','disabled');
      $.ajax({
            type: "POST",
            dataType: 'JSON',
            data: $('.form-car').serialize(),   
            url: site +theme + "php-files/email/send.php",
              beforeSend: function( xhr ) {
                console.log('enviando...');
              },
              complete: function(response) {
                console.log('termino...');
                var obj = response.responseText;
                console.log(obj);
                if(obj == 200){
                  $('.messageInfo').slideDown('slow');
                  $('.btnSendRequest').hide();
                  $('.requestForm .form-car')[0].reset();
                  setTimeout(function(){ 
                      $('.messageInfo').slideUp('slow');
                      $('.btnSendRequest').show();
                  }, 4000);
                }

                $('.btnSendRequest').removeAttr('disabled','disabled');
               
          },
          error: function(error) {
            console.log(error);
          }
      });
      
    }

  });
  
  

  $("body").on("click",".transportation .booking-button button",function(event) {
    event.stopPropagation();

    var postStep = parseInt($(this).attr('data-step'));
          
    if($(this).hasClass("next")){

        var postID = $(this).attr('data-post');
        var nextStep = postStep + 1;
        var validator = '.form-car .wrap-' + postStep;
        if(postStep < 2){ validator = ".frmFormSearchCar"; }
        var hasError = validateForm(validator);

        console.log('hasError->' + hasError);
        // return false;
        if(!hasError){ 
          // Sin Errores
          
          switch(postStep){
             case 1:
                  
                  var setting = ["booking", postStep,'cars-choose'];
                  $('input[name="post_id"]').val(postID);
                  ajaxRequest('tourplan/tourplan-request',$('.form-car').serialize(),setting,true);

                  var spanPick = $('select[name="pickup"]').val();
                  var spanDrop = $('select[name="drop_off"]').val();
                  $('input[name="service"]').val($(this).attr('data-title'))
                  if(spanPick.length > 25){
                     spanPick  = spanPick.substring(0, 25) + "..";
                  }else{
                     spanPick  = spanPick.substring(0, 25);
                  }

                  if(spanDrop.length > 25){
                     spanDrop  = spanDrop.substring(0, 25) + "..";
                  }else{
                     spanDrop  = spanDrop.substring(0, 25);
                  }

                  $('.infoPlace span').html(spanPick);
                  $('.infoDropoff .infoPlace span').html(spanDrop);
                  $('.pay-progress-line').css('width','32%');

              break;
              case 2:
                  
                  $('.stp-2').removeClass('active');
                  $('.stp-2,.ln-3').addClass('completed');
                  $('.stp-3').addClass('active');

                  var setting = ["booking", 99,'extras'];
                  ajaxRequest('tourplan/tourplan-request',$('.form-car').serialize(),setting,true);
                  $('.pay-progress-line').css('width','65%');


              break;
              case 3:

                  var setting = ["booking", postStep,'driver'];
                  ajaxRequest('tourplan/tourplan-booking',$('.form-car').serialize(),setting,true);
                  $('.pay-progress-line').css('width','100%');
                  // var setting = ["booking", postStep,'booking_su'];
                  // $('input[name="post_id"]').val(postID);
                  // ajaxRequest('tourplan/tourplan-booking',$('.frm-booking').serialize(),setting,true);
              break;
              case 4:

                  var setting = ["make-booking-vechicule", postStep,''];
                  ajaxRequest('payment/send',$('.form-car').serialize(),setting,true);
                  // var setting = ["booking", postStep,'booking_su'];
                  // $('input[name="post_id"]').val(postID);
                  // ajaxRequest('tourplan/tourplan-booking',$('.frm-booking').serialize(),setting,true);
              break;
              case 5:
                  console.log('HERE');
                  var setting = ["make-booking-vechicule", postStep,''];
                  ajaxRequest('payment/send2',$('.form-car').serialize(),setting,true);
                  // var setting = ["booking", postStep,'booking_su'];
                  // $('input[name="post_id"]').val(postID);
                  // ajaxRequest('tourplan/tourplan-booking',$('.frm-booking').serialize(),setting,true);
              break;
              case 6:
                  console.log('HERE');
                  var setting = ["make-booking-vechicule", postStep,''];
                  ajaxRequest('payment/send3',$('.form-car').serialize(),setting,true);
                  // var setting = ["booking", postStep,'booking_su'];
                  // $('input[name="post_id"]').val(postID);
                  // ajaxRequest('tourplan/tourplan-booking',$('.frm-booking').serialize(),setting,true);
              break;
          }           
          
          console.log(postStep);

        }else{  
          // Con Errors
          if( postStep == 1){
            $('.booking-message').slideDown('slow');  
            $('html, body').animate({scrollTop:$('.save-zone').position().top}, 'slow');
            setTimeout(function(){ $('.booking-message').slideUp('slow'); }, 4000);

          }
        }
        

    }else{
      // back
      // var backStep = postStep - 1;
      // console.log(backStep);
      // $('.wrap-'+postStep).addClass('hide');
      // $('.wrap-'+backStep).removeClass('hide');
      // $('.pay-progress-line').css('width','38%');
          
      // switch(backStep){
      //   case 1:
      //     $('.wrap-2').find('input').prop('checked', false);   
      //     $('.pay-steps').css('display','none');
      //     $('.sidebar-filter').show();
      //     $('.list-title').show();
      //     $('.free-message').hide();
      //     $('.summary_book').html('');
      //     $('html, body').animate({scrollTop:$('.with-sidebar').position().top}, 'slow');
      //   break;
      //   case 2:
      //     $('.wrap-3').find('input').val(''); 
      //     $('.wrap-3').find('textarea').val(''); 
      //     $('.wrap-3').find('input').prop('checked', false);   
      //   break;
      // }

    }
  });
  
  $("body").on("click",".booking-message button",function(event) {
     $(this).parent().slideUp('slow');
  });
  

  $('input[name="chk_extras[]"]').change(function () {
  
    var setting = ["booking", 99,'cars-choose'];
    ajaxRequest('tourplan/tourplan-request',$('.form-car').serialize(),setting,true);   

  });

  $("#different_loc").change(function() {
    if($(this).is(":checked")) {
      $('.place_drop_off').css('display','flex');
      $('.place_drop_off').find('input').addClass('required');
    }else{
      $('.place_drop_off').css('display','none');
      $('.place_drop_off').find('input').removeClass('required');
      $('.place_drop_off').find('input').removeClass('error');    
    }
  });
  

  $("input[name='filterTours']").keypress(function (event) {

    $input = $("input[name='filterTours']").val();

    if($input.length >  0){
      if(event.keyCode != 32){
          keyFilterPost($input);
        }
      }else{
        cancelCurrentRequest();
        $('.results').slideUp('fast');
      }

  });

  $("input[name='filterTours']").keyup(function (event) {
    
    $input = $("input[name='filterTours']");
    $input.removeClass('error');
    if($input.val().length >  0){
      if(event.keyCode != 32){
        if(event.keyCode == 13){
          console.log('enter');
          $(".tourSearch").click();
        }else{
          keyFilterPost($input.val());    
        }
      }
      }else{
        cancelCurrentRequest();
        $('.results').slideUp('fast');
      }

  });

  $('#search-holder').click(function(event) {  
    event.stopPropagation();
    $input = $("input[name='filterTours']");
    $input.removeClass('error');
    if($input.val().length >  0){
      if(event.keyCode != 32){
        if(event.keyCode == 13){
          console.log('enter');
          $(".tourSearch").click();
        }else{
          keyFilterPost($input.val());    
        }
      }
      }else{
        cancelCurrentRequest();
        $('.results').slideUp('fast');
      }
  });

  $("input[name='filterTours']").focusout(function (event) {
    
    setTimeout( function() {
      $('.results').hide();
    }, 800 );
     
  });

  function keyFilterPost(keyword){
    
    var post_type = $('.cat_flag').attr('data-post-type');
    var category  = $('.cat_flag').attr('data-category');
    var cat_type  = $('.cat_flag').attr('data-category-type');
    var input   = $("input[name='filterTours']");
    var keyword = input.val();
    var data = {"search-input" : keyword,'lang': $lang, 'post_type':post_type, 'category': category,'cat_type':cat_type, 'type':1};
      console.log(data);
    $('.results').html(getLoadingGif());
    $('.results').show();
    $('input[name="search-input"]').val(keyword);
    var setting = ["pagination",1,'filter-text'];
    ajaxRequest('post/post',data,setting,true);
  
  }

  $("body").on("click",".select-ajax a",function(event){
      
      $element = $(this)
      $parent  = $element.parent();

      $parent.parent().find('span').html($element.text());
        

      if($parent.hasClass('order-grid')){

          switch($element.attr('data-value')){
              case 'newest':
                reorderResults('data-order','desc');
              break;
              case 'oldest':
                reorderResults('data-order','asc');
              break;
              case 'higher':
                reorderResults('data-price','asc');
              break;
              case 'lowest':
                reorderResults('data-price','desc');
              break;
          }

      }else{

        var post_type = $('.head-content').parent().attr('data-post-type');
        var category  = $('.head-content').parent().attr('data-category');
        var cat_type  = $('.head-content').parent().attr('data-category-type');
        var duration  = $element.attr('data-value');
        var data = {'duration':duration,'lang': $lang, 'post_type':post_type, 'category': category,'cat_type': cat_type, 'filter-type':2};
        var setting = ["pagination",5,'button_search'];
        ajaxRequest('post/post2',data,setting,true);
      }   
      
  });

  $("body").on("click",".tourSearch",function(event) {
    
      $('.results').slideUp('fast');
      
      var input   = $("input[name='filterTours']");
      var keyword = input.val();

     // if(keyword.replace(/\s/g, '') == ''){ 

      $('.keyword').text(keyword);
      $('.keyword_title h2').slideDown('fast');

      $('input[name="search-input"]').val(keyword);
      var objCategory = $('.head-content').parent();
      var post_type = objCategory.attr('data-post-type');
      var category  = objCategory.attr('data-category');
      var cat_type  = objCategory.attr('data-category-type');
      var data = {"search-input" : keyword,'lang': $lang, 'post_type':post_type, 'category': category, 'type':2, 'paged':1,'cat_type': cat_type};

      var setting = ["pagination",2,'button_search'];
      ajaxRequest('post/post',$('.frm-booking').serialize(),setting,true);

      if(keyword != ''){
        $('.list-title').hide();
        $('.keysearch h2 span').html(keyword);
        $('.keysearch').show();
      }else{
        $('.list-title').show();
        $('.keysearch').hide();
      }

      $('.showmore a').attr('data-pos',0);

      // }else{
      //   input.addClass('error');
      //   input.val("");
      //   input.focus();
      // }
  });

  $("body").on("click",".showmore a",function(event) {
    
      $('.results').slideUp('fast');
      var keyword     = $("input[name='filterTours']").val();
      var objCategory = $('.head-content').parent();
      var post_type   = objCategory.attr('data-post-type');
      var category    = objCategory.attr('data-category');
      var cat_type    = objCategory.attr('data-category-type');
      var pos         = $(this).attr('data-pos');
      
      if(!parseInt(pos)){ pos = 1; }

      var data = $('.frm-booking').serializeArray();
      
      //var data_showmore = { 'search-input' : keyword,'lang': $lang,'post_type':post_type, 
                 // 'category': category, 'filter-type':2, 'paged':pos,'cat_type': cat_type,'ss':2};

      data.push({name: 'paged', value: pos});

      var setting = ["pagination",5,2];
      ajaxRequest('post/post',data,setting,true);

  });

  $("body").on("click",".bookTour",function(event) {
    event.stopPropagation();

    var hasError = validateForm('.tour-booking');

    if(!hasError){ 
      var setting = ["booking-tour", 5,''];
      // $('input[name="post_id"]').val(postID);
      ajaxRequest('tourplan/tourplan-request',$('.frm-booking').serialize(),setting,true);
      
    }else{
      $('.tour-booking').find('input:first').focus();      
      $('.booking-message').slideDown('slow');
      closeMessageTime('.booking-message',5000);
    } 
    
  });

  $("body").on("click",".saveBookingTour",function(event) {
    event.stopPropagation();

    var hasError = validateForm('.frm-booking .wrap-ip');

    if(!hasError){ 
      var setting = ["make-booking-tour", 5,''];
      ajaxRequest('tourplan/tourplan-booking',$('.frm-booking').serialize(),setting,true);
    } 
    
  });

  $("body").on("click",".btnTourPayment",function(event) {
    event.stopPropagation();

    var hasError = validateForm('.frm-booking');

    if(!hasError){ 
      var setting = ["payment-tour", 14,''];
      ajaxRequest('payment/send',$('.frm-booking').serialize(),setting,true);
    } 
    
  });

  $("body").on("click",".count-people a",function(event) {
    event.stopPropagation();
    element = $(this);
    type    = element.attr('data-people');
    cant    = parseInt($('.'+type+'display').text());
    if(element.hasClass( "plus" )){
      $('.'+ type + 'display').html(cant+1);  
      $('.'+ type).val(cant+1);
      var setting = ["booking-tour", 5,''];
      // $('input[name="post_id"]').val(postID);
     // ajaxRequest('tourplan/tourplan-request',$('.josue').serialize(),setting,true);
    }else{
      if(cant > 0){
        if(type != 'a' && type != 'r'){
          $('.'+type+'display').html(cant-1);
          $('.'+ type).val(cant-1); 
        }else{
          if( cant > 1){
            $('.'+type+'display').html(cant-1);
            $('.'+ type).val(cant-1); 
          }
        }  
      } 
    }  
  });
  
  $("body").on("click",".sf-submited button",function(event) {
    event.stopPropagation();
    var hasError = validateForm('.sf-submited');
    if(!hasError){ 
      var setting = ["salesforce", 5,''];
      ajaxRequest('salesforce/send',$('.sf-submited').serialize(),setting,true);
    } 
  });

  $("body").on("click",".goGal",function(event) {
    if($(this).attr('data-type') == 1){
      $(this).parent().find('img').click();
    }else{
      $('.thumbnail .item').first().find('img').click();
    }
  });

  function cancelCurrentRequest(){
    if(currentRequest != undefined){
        currentRequest.abort();
      }
  }

  function ajaxRequest($file, $data,$output,$async){
      cancelCurrentRequest();
      var result = 0;
      
      $('.waiting').css('display','inline-block');
      $('.waiting').parent().attr('disabled','disabled');

      currentRequest = $.ajax({
                                type: 'POST',
                                async: $async,
                                dataType: "json",
                                url:  site + theme + "php-files/"+ $file +".php",
                                data: $data, 
                                beforeSend: function( xhr ) {
                                  console.log('enviando...');
                                  if($output[1] != 1 || $output[0] == 'booking'){
                                    $('.loading').css('display',"flex");
                                  }
                                },
                                complete: function(obj){
                                  console.log('complete...' );
                                  
                                  // $('.wp-tour').hide();
                                  // $('.booking-step-form').css('display','flex');
                                  //$('html, body').animate({scrollTop:$('body').position().top}, 'slow');

                                  //$('html, body').animate({scrollTop:$('.save-zone').position().top}, 'slow');

                                  if(obj != 0){
                                    var objResponse = jQuery.parseJSON(obj.responseText );

                                      console.log('$objResponse'+objResponse);
                                    if( objResponse.code == 200){
                                      
                                      $switchOpc = $output;
                                      
                                      if(typeof $output === 'object'){ $switchOpc = $output[0]; }

                                      // console.log('$switchOpc'+  $objResponse);
                                      switch($switchOpc){
                                        
                                        case 'booking':
                                          
                                          $('.wp-content, .frm-booking-transport').addClass('hide');
                                          $('.booking-step-form,.breadcrumb-steps').css('display','flex');
                                          $('.booking-step-form,.breadcrumb-steps,.pax-info').removeClass('hide');
                                          $('.pax-info').show();

                                          // fbq('track', 'Search');
                                          var postStep = parseInt($output[1]);
                                          var nextStep = postStep + 1;

                                          if($('input[name="numbertrans"]').val() == ''){
                                              $('input[name="numbertrans"]').val(objResponse.numbertrans);
                                          }
                                          
                                          if($output[2] == 'cars-choose'){
                                            console.log('JOSUE HRE');
                                              $('.cars-choose').html(objResponse.message);
                                              $('.car-choose-title').html(objResponse.postTitle);
                                              $('.bk-post-head').html(objResponse.featureBackground);
                                              $('.car-choose-price').html(objResponse.price);
                                              $("input[name='opt']").val(objResponse.opt);  
                                          }

                                          if($output[2] == 'extras'){

                                             $('.booking_pax .extras').addClass('hide');
                                             $('.booking_pax .owner-detail, .extras-choose').removeClass('hide');
                                          }

                                          if($output[2] == 'driver'){
                                             $('.driver-choose').html(objResponse.message);
                                             $('.driver-choose').removeClass('hide');
                                             $('.booking_pax .owner-detail').addClass('hide');
                                             $('.booking_pax .paymentProcess,.booking-detail').removeClass('hide');
                                          }
                                        
                                          // if( postStep != 99){
                                          //   $('.wrap-'+postStep).addClass('hide');
                                          //   $('.wrap-'+nextStep).removeClass('hide');
                                          //   //$('.wrap-'+nextStep+' .list-title').show();
                                             
                                          // }
                                          $('.loading').css('display',"none");
                                          $('.waiting').hide();
                                          $('.waiting').parent().removeAttr('disabled');
                                          
                                          $('html, body').animate({scrollTop:$('.wrap-menu').position().top}, 'slow');
                                          
                                          break;
                                        
                                        case 'make-booking-vechicule':
                                              
                                          if(objResponse.status != '200'){
                                              $('.error-payment b').text(objResponse.error);
                                              $('.error-payment').slideDown('slow');
                                              $('.loading').css('display',"none");
                                              $('.waiting').hide();
                                              $('.waiting').parent().removeAttr('disabled');
                                              
                                              $('html, body').animate({scrollTop:$('.wrap-menu').position().top}, 'slow');
                                          }else{
                                              // Redireciono
                                              $('.bkformcar').submit();
                                          }

                                        break;
                                        
                                        case 'payment-tour':

                                          if(objResponse.status != '200'){
                                              $('.error-payment b').text(objResponse.error);
                                              $('.error-payment').slideDown('slow');
                                              $('.loading').css('display',"none");
                                              $('.waiting').hide();
                                              $('.waiting').parent().removeAttr('disabled');
                                              
                                          }else{
                                              // Redireciono
                                              $('.frm-booking').submit();
                                          }
                                          
                                        break;

                                        case 'pagination':
                                          //  fbq('track', 'Search');

                                          $('.tabcontent').hide();
                                          if($output[2] == 'filter-text'){
                                            $('.results').html(objResponse.message);
                                          }else if($output[2] == 'button_search'){
                                            $('.content-result').html(objResponse.message);
                                          }else{
                                            $('.content-result').append(objResponse.message);
                                          }

                                          var paged = parseInt(objResponse.paged);
                                          
                                          $('.showmore a').attr('data-pos',(paged));
                                         
                                          if(paged == parseInt(objResponse.max_page)){ 
                                            $('.showmore, .pagination').hide();

                                          }else{ 
                                            $('.showmore').show();
                                          }
                                         
                                          console.log('Curre '+ paged);
                                          console.log('MAX '+ objResponse.max_page);
                                          $('.loading').css('display',"none");
                                          $('.waiting').hide();
                                          $('.waiting').parent().removeAttr('disabled');
                                          
                                          break;
                                        
                                        case 'booking-tour':
                                            console.log(2);
                                            //fbq('track', 'Search');
                                            $('.wp-tour').addClass('hide');
                                            $('.booking-step-form,.breadcrumb-steps').css('display','flex');
                                            $('.wrap-ip, .booking-step-form, .breadcrumb-steps').removeClass('hide');
                                            
                                            $('.summary_book').show(); 
                                            $('.summary_book').html(objResponse.message);
                                            //$('.panel-result').html(objResponse.stripe);

                                            if($('input[name="numbertrans"]').val() == ''){
                                                $('input[name="numbertrans"]').val(objResponse.numbertrans);
                                            }
                                            
                                            //$('.panel-result').show();
                                            $('#modal_booking').modal('show');
                                            $('.loading').css('display',"none");
                                            $('.waiting').hide();
                                            $('.waiting').parent().removeAttr('disabled');
                                            
                                            $('html, body').animate({scrollTop:$('.wrap-menu').position().top}, 'slow');

                                            break;
                                        
                                        case 'make-booking-tour':
                                          $('.stp2').addClass('active');
                                          $('.personal_info').html(objResponse.message);
                                          $('.booking_details .pax-info').slideDown('slow');
                                          $('.wrap-ip').addClass('hide');
                                          $('.paymentProcess, .booking_details .pax-info').removeClass('hide');

                                          //$('.panel-result').html(objResponse.stripe);
                                          // setTimeout(function(){ 
                                          //     $('.stripe-button-el').click();
                                          // }, 4000);
                                          //setTimeout(function(){ 
                                              $('.loading').css('display',"none");
                                              $('.waiting').hide();
                                              $('.waiting').parent().removeAttr('disabled');
                                          //}, 6000);
                                          
                                          $('html, body').animate({scrollTop:$('.wrap-menu').position().top}, 'slow');
                                            
                                          break;

                                        case 'salesforce':
                                          $('.sf-submited')[0].reset();
                                          $('.sf-submited').submit();
                                          $('.success-info').slideDown('slow');
                                          closeMessageTime('.success-info',5000);
                                          $('.loading').css('display',"none");
                                          $('.waiting').hide();
                                          $('.waiting').parent().removeAttr('disabled');
                                          $('.adisplay').html(1);
                                          $('.cdisplay').html(0);
                                          $('.idisplay').html(0);
                                          $('.rdisplay').html(1);
                                          $('input[name="adults"]').val(1);
                                          $('input[name="children"]').val(0);
                                          $('input[name="infants"]').val(0);
                                          $('input[name="rooms"]').val(1);
                                          // fbq('track', 'Lead');
                                          // if(objResponse.lang == 'en'){
                                          //   dataLayer.push({'event': 'disenatuviajeEN'});
                                          // }else if(objResponse.lang == 'de'){
                                          //   dataLayer.push({'event': 'disenatuviajeGER'});
                                          // }else{
                                          //   dataLayer.push({'event': 'disenatuviaje'});
                                          // }

                                          break;

                                        case 'newlead':
                                          $('.'+$output[2])[0].reset();
                                          $('.'+$output[2]).submit();
                                          $($output[3]).slideUp('slow');
                                          $($output[4]).slideDown('slow');
                                          $('.loading').css('display',"none");
                                          $('.waiting').hide();
                                          $('.waiting').parent().removeAttr('disabled');
                                          
                                         // fbq('track', 'Lead');
                                          // if(objResponse.lang == 'en'){
                                          //   dataLayer.push({'event': 'disenatuviajeEN'});
                                          // }else if(objResponse.lang == 'de'){
                                          //   dataLayer.push({'event': 'disenatuviajeGER'});
                                          // }else{
                                          //   dataLayer.push({'event': 'disenatuviaje'});
                                          // }

                                          $('html, body').animate({scrollTop:$('.wrpForm').position().top}, 'slow');
                                          break;
                                   
                                        default:
                                          $('.content-result').html(objResponse.message);
                                          $('.loading').css('display',"none");
                                          $('.waiting').hide();
                                          $('.waiting').parent().removeAttr('disabled');
                                          
                                          break;
                                    
                                      }

                                      $('.btnInsu').show();
                                      $('.wrap-booking-message').hide();
                                      
                                    }else{
                                      console.log('HERE');
                                      $('.wrap-booking-message').css('display','flex');
                                      $('.booking-message').html(objResponse.message);
                                      $('.booking-message').css('display','inline-block');
                                      closeMessageTime('.wrap-booking-message',5000);
                                      closeMessageTime('.booking-message',5000);
                                      $('.loading').css('display',"none");
                                      $('.waiting').hide();
                                      $('.btnInsu').hide();
                                      $('.waiting').parent().removeAttr('disabled');
                                      
                                    }

                                  }

                                  result = obj;
                                },
                                error: function(error){
                                  result = 'error';
                                  $('.loading').css('display',"none");
                                  $('.waiting').hide();
                                  $('.waiting').parent().removeAttr('disabled');
                                  
                                }
                            });

      return result;
  }

  function closeMessageTime(element,time){

    setTimeout(function(){ 
        $(element).slideUp('slow');
    }, time);

  }

  $('.sidebar-filter').change(function() {
      ajaxRequest('post/post',$('.frm-booking').serialize(),'content-result',true);
  });


  if($('#slider-range').length > 0){

      var rangeSlider = document.getElementById('slider-range');

      var moneyFormat = wNumb({
        decimals: 0,
        thousand: ',',
        prefix: '$'
      });
      
      noUiSlider.create(rangeSlider, {
        start: [5, 240],
        step: 1,
        range: {
          'min': [5],
          'max': [240]
        },
        format: moneyFormat,
        connect: true
      });
      
      // Set visual min and max values and also update value hidden form inputs
      rangeSlider.noUiSlider.on('update', function(values, handle) {
        $('#slider-range-value1').html(values[0]);
        $('#slider-range-value2').html(values[1]);
        $('input[name="min-price"]').val(moneyFormat.from(values[0]));
        $('input[name="max-price"]').val(moneyFormat.from(values[1]));
        //console.log('solter');
      });


      rangeSlider.noUiSlider.on('end', function(values, handle) {
        ajaxRequest('post/post',$('.frm-booking').serialize(),'content-result',true);
      });

  }
  

  if($('#slider-range-duration').length > 0){

      var rangeSliderDuration = document.getElementById('slider-range-duration');

      var moneyFormat = wNumb({
        decimals: 0,
        thousand: '.'
      //  prefix: 'Hrs'
      });
      
      noUiSlider.create(rangeSliderDuration, {
        start: [1, 12],
        step: 1,
        range: {
          'min': [1],
          'max': [12]
        },
        format: moneyFormat,
        connect: true
      });
      
      // Set visual min and max values and also update value hidden form inputs
      rangeSliderDuration.noUiSlider.on('update', function(values, handle) {
        $('#slider-duration-value1').html(values[0] + ' Hrs');
        $('#slider-duration-value2').html(values[1] + ' Hrs');
        $('input[name="min-duration"]').val(moneyFormat.from(values[0]));
        $('input[name="max-duration"]').val(moneyFormat.from(values[1]));
        //console.log('solter');
      });


      rangeSliderDuration.noUiSlider.on('end', function(values, handle) {
        ajaxRequest('post/post',$('.frm-booking').serialize(),'content-result',true);
      });  
  }


  if($('#slider-range-pack').length > 0){

      var rangeSlider = document.getElementById('slider-range-pack');

      var moneyFormat = wNumb({
        decimals: 0,
        thousand: ',',
        prefix: '$'
      });
      
      noUiSlider.create(rangeSlider, {
        start: [5, 6000],
        step: 1,
        range: {
          'min': [5],
          'max': [6000]
        },
        format: moneyFormat,
        connect: true
      });
      
      // Set visual min and max values and also update value hidden form inputs
      rangeSlider.noUiSlider.on('update', function(values, handle) {
        $('#slider-range-value1').html(values[0]);
        $('#slider-range-value2').html(values[1]);
        $('input[name="min-price"]').val(moneyFormat.from(values[0]));
        $('input[name="max-price"]').val(moneyFormat.from(values[1]));
        //console.log('solter');
      });


      rangeSlider.noUiSlider.on('end', function(values, handle) {
        ajaxRequest('post/post',$('.frm-booking').serialize(),'content-result',true);
      });

  }
  
  if($('#slider-range-duration-pack').length > 0){

      var rangeSliderDuration = document.getElementById('slider-range-duration-pack');

      var moneyFormat = wNumb({
        decimals: 0,
        thousand: '.'
      //  prefix: 'Hrs'
      });
      
      noUiSlider.create(rangeSliderDuration, {
        start: [1, 20],
        step: 1,
        range: {
          'min': [1],
          'max': [20]
        },
        format: moneyFormat,
        connect: true
      });
      
      // Set visual min and max values and also update value hidden form inputs
      rangeSliderDuration.noUiSlider.on('update', function(values, handle) {
        $('#slider-duration-value1').html(values[0] + ' d');
        $('#slider-duration-value2').html(values[1] + ' d');
        $('input[name="min-duration"]').val(moneyFormat.from(values[0]));
        $('input[name="max-duration"]').val(moneyFormat.from(values[1]));
        //console.log('solter');
      });


      rangeSliderDuration.noUiSlider.on('end', function(values, handle) {
        ajaxRequest('post/post',$('.frm-booking').serialize(),'content-result',true);
      });  
  }
  
  $('#modal_booking').on('hidden.bs.modal', function (e) {
     $('.frm-booking .cs-select, .frm-booking input').removeClass('error');
     $('.frm-booking .cs-select').css('background','');
     $('#terms_asu').prop('checked', false);
     $('.frm-booking label').removeClass('error-label');

  });

  $( window ).resize(function() {
    
    if($( window ).width() > 1080){
    
      if($( "#modalFilterBooking" ).hasClass( "show" )){
        $('#modalFilterBooking').modal('toggle');
      }  

      $('#wrapFilterTour').show();
      $('#wrapFilterTour').removeClass('show');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').removeClass('show');
    
    }else{
      if(!$('#wrapFilterTour').hasClass('show')){
        $('#wrapFilterTour').hide();
      } 
    }

    if( $('.wrap-menu').hasClass('toFixed') ){
      if($( window ).width() > 991){
        $('.wrap-menu').removeClass('toFixed');
      }
    
    }

    _haslocation = $('.pickdrop').length;

    if(_haslocation > 0 && $('.pickdrop').is(':visible')){

      if($( window ).width() > 1280){
          $('.chosen-container').css('max-width','236px');
      }

      if($( window ).width() > 1200 && $( window ).width() < 1280 ){
          $('.chosen-container').css('max-width','225px');
      }

      if($( window ).width() > 1080 && $( window ).width() < 1200 ){
          $('.chosen-container').css('max-width','205px');
      }

    }

    _hasFilterCar = $('.filter-booking').length;
     if(_hasFilterCar > 0){
      if($( window ).width() > 1080){
          $('.filter-booking').css('display','flex');
      }      
     }
    
    generateCarouselCards($( window ).width());

  });


  initCarouselCards();
  generateCarouselCards($( window ).width());

  function initCarouselCards(){

    $num = $('.crc .card-post').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;

    if ($num % 2 == 0) {
      $('.card-post:nth-child(' + $even + ')').addClass('active');
      $('.card-post:nth-child(' + $even + ')').prev().addClass('prev');
      $('.card-post:nth-child(' + $even + ')').next().addClass('next');
    } else {
      $('.card-post:nth-child(' + $odd + ')').addClass('active');
      $('.card-post:nth-child(' + $odd + ')').prev().addClass('prev');
      $('.card-post:nth-child(' + $odd + ')').next().addClass('next');
    }

   // generateCarouselCards($( window ).width());

  }

  function generateCarouselCards($width){

    if($width < 620){
      if($('.crc').length > 0 ){
        $('.general-posts').find('.post-related').css('left','0px');
        $('.general-posts').find('.post-related').removeClass('card-carousel');
        
        if($(".general-posts .post-related").hasClass('.slick-initialized')){}else{

          $(".general-posts .post-related").not('.slick-initialized').slick({
              dots: false,
              infinite: true,
              speed: 800,
              slidesToShow: 1,
          }); 
        }
        console.log('hola');
      }        
    }else if($width > 620 ){
      if($('.crc').length > 0 ){
        $('.general-posts').find('.post-related').addClass('card-carousel');
        $(".general-posts .slick-initialized").slick('unslick');
        $('.card-post').removeClass('prev next active');
        initCarouselCards();
      }
    }
  }

  $('.card-post').click(function() {
    parent = $(this).parent().parent().attr('data-carousel');
    $slide = $('.'+parent+' .active').width()+27;
    
    if ($(this).hasClass('next')) {
      $('.'+parent+' .card-carousel').stop(false, true).animate({left: '-=' + $slide});
    } else if ($(this).hasClass('prev')) {
      $('.'+parent+' .card-carousel').stop(false, true).animate({left: '+=' + $slide});
    }
    
    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');
    
    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');

  });


  $('.card-control a').click(function() {
    parent = $(this).parent().parent().attr('data-carousel');
    if ($(this).hasClass('next')) {
      $('.'+parent+' .active').next().trigger('click');
    }else{
      $('.'+parent+' .active').prev().trigger('click');
    }

  });

  $('html body').keydown(function(e) {
    if (e.keyCode == 37) { // left
      $('.active').prev().trigger('click');
    }
    else if (e.keyCode == 39) { // right
      $('.active').next().trigger('click');
    }
  });



  function new_map( $el ) {
    
    // var
    var $markers = $el.find('.marker');
    
    
    // vars
    var args = {
      zoom    : 8,
      center    : new google.maps.LatLng(0, 0),
      mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    
    
    // create map           
    var map = new google.maps.Map( $el[0], args);
    
    
    // add a markers reference
    map.markers = [];
    
    
    // add markers
    $markers.each(function(){
      
        add_marker( $(this), map );
      
    });
    
    
    // center map
    center_map( map );
    
    
    // return
    return map;
    
  }

  function add_marker( $marker, map ) {

    // var
    var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

    // create marker
    var marker = new google.maps.Marker({
      position  : latlng,
      map     : map
    });

    // add to array
    map.markers.push( marker );

    // if marker contains HTML, add it to an infoWindow
    if( $marker.html() )
    {
      // create info window
      var infowindow = new google.maps.InfoWindow({
        content   : $marker.html()
      });

      // show info window when marker is clicked
      google.maps.event.addListener(marker, 'click', function() {

        infowindow.open( map, marker );

      });
    }

  }


  function center_map( map ) {

    // vars
    var bounds = new google.maps.LatLngBounds();

    // loop through all markers and create bounds
    $.each( map.markers, function( i, marker ){

      var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

      bounds.extend( latlng );

    });

    // only 1 marker?
    if( map.markers.length == 1 )
    {
      // set center of map
        map.setCenter( bounds.getCenter() );
        map.setZoom( 12 );
    }
    else
    {
      // fit to bounds
      map.fitBounds( bounds );
    }

  }

  var map = null;

  $('.acf-map').each(function(){

    // create map
    map = new_map( $(this) );

  });

  /*** 
   * Nuevo JS 
  ***/
 

  $("body").on("click",".getQuote a",function(event) {
      $('html, body').animate({scrollTop:$('.wrpForm').position().top}, 'slow');
  });


  $("body").on("click",".btnFormEvent",function(event) {
    _form = $(this).attr('data-form')
    var hasError = validateForm('.' + _form);
    
    if(!hasError){ 
      var setting = ["newlead", 5, _form, '.wrap_steps','.congratulations'];
      ajaxRequest('salesforce/send',$('.' + _form).serialize(),setting,true);
      $('.clientMail').text($('input[name="email"]').val());
      $('.clientPhone').text($('input[name="phone"]').val());

    }else{
      $('html, body').animate({scrollTop:$('body').position().top}, 'slow');
    }

  });

 $("body").on("click",".submit-form",function(event) {
     
  var hasError = validateForm('.frmFormSearchCar');
  if(!hasError){ 
    $('.frmFormSearchCar').submit();
  }else{
    $('html, body').animate({scrollTop:$('.save-zone').position().top}, 'slow');
    $('.booking-message').slideDown('slow');  
  }
});

  $("body").on("click",".transportation .btnSearchFilter",function() {
  
    if(!$('.transportation .filter-booking').is(':visible')){
   
      $('.filter-booking').slideDown('fast');

    }else{

      $('.filter-booking').slideUp('fast');
    
    }
                        
  });


  $("body").on("click",".transportation .dropdown-menu a",function() {
      _var = $(this).attr('data-value');
      console.log(_var);
      reorderResults('data-price',_var,'.card-vehicule');
                           
  });


  $("body").on("click",".bgBanner ._info a",function(event) {
      $video = $(this).attr('data-video');
      $url   = 'https://youtube.com/embed/'+$video+'/?autoplay=1';
      $('#vblog_asuaire').attr('src',$url);
      $('#vblog').modal('show');
  });

  $(window).scroll(function() {

    _quoteScroll = $(".quotePackage").length;
    if(_quoteScroll > 0){

        var top_of_element = $(".quotePackage").offset().top;
        var bottom_of_element = $(".quotePackage").offset().top + $(".quotePackage").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
          $('.quoteLink').removeClass('fixed');
        } else {
          $('.quoteLink').addClass('fixed');
        }
    }
        
 });

  var _theloc =  $('.aside .info').length;
  if(_theloc > 0){
   
       var theLoc =  $('.aside .info').position().top;
       _aside_height = $('.aside').height();
       theLoc =  theLoc +_aside_height;

     $(window).scroll(function() {
          _size =  $(window).scrollTop();
          console.log(theLoc +'<'+ _size);
         if(theLoc < _size ) {
            $('.bookTour').addClass('resetBook');   
         }else{
          $('.bookTour').removeClass('resetBook');   
           
         }
     });
  }

  $('input[name="dropIndicator"]').change(function() {
    console.log(this.checked);
      if(this.checked) {
        $('.pickdrop').show();
        $('input[name="dropIndicator"]').prop('checked', true);
        
        if($( window ).width() > 1280){
            $('.chosen-container').css('max-width','236px');
        }
        
        if($( window ).width() > 1200 && $( window ).width() < 1280 ){
            $('.chosen-container').css('max-width','225px');
        }

        if($( window ).width() > 1080 && $( window ).width() < 1200 ){
            $('.chosen-container').css('max-width','205px');
        }

        $('.infoDropoff').removeClass('hide');

      }else{
        
        $('.pickdrop').hide();
        $('.chosen-container').css('max-width','100%');
        $('input[name="dropIndicator"]').prop('checked', false);
        $('.infoDropoff').addClass('hide');

      }
  });

  $('input[name="moreInfoPlaceCar"]').change(function() {
      if(this.checked) {
        $('.extras .wrap-place').css('display','flex');

      }else{
        $('.extras .wrap-place').css('display','none');
      } 
  });

  
  $("body").on("click",".gobackcar",function() {
      
      _option = $(this).attr('data-back');
      $('.loading').css('display',"flex");
      
      if(_option != 'initial'){
        console.log('_option' + _option);
            switch(_option){
              case 'extras':
                  $('.booking_pax .owner-detail, .paymentProcess,.driver-choose,.extras-choose').addClass('hide');
                  $('.booking_pax .extras').removeClass('hide');
                  $('.stp-2, .stp-3').removeClass('active');
                  $('.stp-2, .stp-3').removeClass('completed');
              break;
              case 'driver':
                  $('.booking_pax .paymentProcess').removeAttr('style');
                  $('.booking_pax .paymentProcess,.driver-choose').addClass('hide');
                  $('.booking_pax .owner-detail').removeClass('hide');
                  $('.stp-3, .stp-4').removeClass('active');
                  $('.stp-3, .stp-4').removeClass('completed');
                  $('.booking_pax .extras').addClass('hide');
              break;
            }

      }else{

        $('.booking-step-form').addClass('hide');
        $('.booking_pax .owner-detail, .pax-info, .paymentProcess, .breadcrumb-steps, .driver-choose, .extras-choose').addClass('hide');
        $('.booking_pax .extras, .frm-booking-transport, .wp-content').removeClass('hide');
        $('.wp-content').css('display','flex');  
        $('.stp-1, .stp-2, .stp-3, .stp-4').removeClass('active');
        $('.stp-1, .stp-2, .stp-3, .stp-4').removeClass('completed');

        if( $('input[name="moreInfoPlaceCar"]').is(':checked') ) {
          $('input[name="moreInfoPlaceCar"]').trigger('click');
        }

      }
      
      $('html, body').animate({scrollTop:$('body').position().top}, 'slow');
      setTimeout(function(){         
        $('.loading').hide();  
      }, 700);
  
  });

  $("body").on("click",".gobackTour",function() {
      
      $('.loading').css('display',"flex");
      $('.booking-step-form').addClass('hide')
      $('.wp-tour, .wrap-ip').removeClass('hide');
      $('.booking_details .pax-info, .paymentProcess, .breadcrumb-steps').addClass('hide');

      $('html, body').animate({scrollTop:$('.wp-tour .aside').position().top}, 'slow');
      setTimeout(function(){         
        $('.loading').hide();  
      }, 700);
  
  });


  $("body").on("click",".gobackPaxTour",function() {
      
      $('.loading').css('display',"flex");
      $('.booking_details .pax-info, .paymentProcess').addClass('hide');
      $('.stp2').removeClass('active');
      $('.wrap-ip').removeClass('hide');
      
      $('html, body').animate({scrollTop:$('.save-zone').position().top}, 'slow');
      setTimeout(function(){         
        $('.loading').hide();  
      }, 700);
  
  });

  $('.carousel .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        pagination: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
      }
    }
  });

  $("body").on("click",".showHideElement",function() {

      _divToShow = "." + $(this).attr('data-show');
    
      if(! $(_divToShow).is(':visible')){
        $(_divToShow).slideDown('slow');
      }else{
        $(_divToShow).slideUp('slow');
        $('.formProblems').find(div).removeClass('.error');
      }

  });

  $("body").on("click",".controls a",function() {

    var element = $(this);
    var input   = element.parent().parent().find('input');
    var count   = input.val();
    var frmPax  = input.attr('data-count');
    frmPax = frmPax == undefined ? frmPax = null : frmPax = frmPax
    console.log(frmPax);
    if( input.val() == ''){
    count = 0;
    }

    count   = parseInt(count);
    
    if(element.hasClass('plus')){
      input.val(count+1); 
      if( frmPax != null){
        $('.' + frmPax).val(count+1);
      }
    }else{
       if(count - 1 < 1){
          input.val(0); 
          if(frmPax != null){
            $('.' + frmPax).val(0);
            if(frmPax == "a"){
                $('.' + frmPax).val(1);
                input.val(1); 
            }
          }
       }else{
          input.val(count-1);
          if(frmPax != null){
            $('.' + frmPax).val(count-1);
          }
       }      
      
    }
          
  });

  $('#start_date').daterangepicker({
    "singleDatePicker": true,
    "showCustomRangeLabel": false,
    "minDate":moment().add(2,'days'),
    locale: {
       format: 'DD/MM/YYYY',
        "daysOfWeek": [
            "DO",
            "LU",
            "MA",
            "MI",
            "JU",
            "VI",
            "SA"
        ],
        "monthNames": [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Deciembre"
        ],
    },
    "opens": "center",
    "drops": "down"
}, function(start, end, label) {

    _date = moment(start).format('YYYY/MM/DD');
    var booking_from = $('input[name="booking_from"]');
    if(booking_from.length > 0){
      booking_from.val(_date);
    }

    $('#end_date').daterangepicker({
          "singleDatePicker": true,
          "showCustomRangeLabel": false,
          locale: {
               format: 'DD/MM/YYYY',
                "daysOfWeek": [
                    "DO",
                    "LU",
                    "MA",
                    "MI",
                    "JU",
                    "VI",
                    "SA"
                ],
                "monthNames": [
                    "Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Setiembre",
                    "Octubre",
                    "Noviembre",
                    "Deciembre"
                ],
          },
          "minDate": moment(start,'DD/MM/YYYY').add(1, 'days'),
          "opens": "left",
          "drops": "down"
      }, function(start, end, label) {
    }); 

    $('#end_date').val('')

});

$('#end_date').daterangepicker({
    "singleDatePicker": true,
    "showCustomRangeLabel": false,
    "minDate":moment().add(2,'days'),
          locale: {
               format: 'DD/MM/YYYY',
                "daysOfWeek": [
                    "DO",
                    "LU",
                    "MA",
                    "MI",
                    "JU",
                    "VI",
                    "SA"
                ],
                "monthNames": [
                    "Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Setiembre",
                    "Octubre",
                    "Noviembre",
                    "Deciembre"
                ],
          },
    "opens": "center",
     "drops": "down"

});

$('#start_date').val('');
$('#end_date').val('');

$("#mobile-number").intlTelInput({
  initialCountry: "",
  preferredCountries: [ 'ar',"es",'us','co','uk','cl','mx','gb' ],
});

    var _hasStripeOpts = $('input[name="stripe_creditcard"]').length;
    
    if(_hasStripeOpts){

        new Cleave('input[name="stripe_creditcard"]', {
          creditCard: true,
          delimiter: '-',
          onCreditCardTypeChanged: function (type) {
            console.log(type);
              switch(type){
                case 'visa':
                  $('.icon-card i').attr('class','fab fa-cc-visa');
                  break;
                case 'mastercard':
                    $('.icon-card i').attr('class','fab fa-cc-mastercard');
                  break;
                case 'amex':
                    $('.icon-card i').attr('class','fab fa-cc-amex');
                  break;
                case 'discover':
                    $('.icon-card i').attr('class','fab fa-cc-discover');
                  break;
                case 'diners':
                    $('.icon-card i').attr('class','fab fa-cc-diners-club');
                  break;
                case 'jcb':
                    $('.icon-card i').attr('class','fab fa-cc-jcb');
                  break;
                default:
                    $('.icon-card i').attr('class','fas fa-credit-card');
                   break; 
              }
          }
        });

        new Cleave('input[name="stripe_expiry_date"]', {
          date: true,
          datePattern: ['m', 'y']
        });

        new Cleave('input[name="stripe_expiry_date"]', {
          date: true,
          datePattern: ['m', 'y']
        });

        new Cleave('input[name="stripe_ccv"]', {
          blocks: [4],
          uppercase: true
        });
    
    }


});


$( ".form-control" ).focusout(function() {
  if($(this).val() != ""){
    $(this).removeClass('error');
  } 
});
  

/** Sukirit */


function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function openSearchdd(evt, link) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(link).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function() {
 
  var checkWidth = $(document).width();

  
  if(checkWidth <= 800){
      $("#owl-demo").owlCarousel({
    
        loop:true,
        margin:15,
        items:2.2,
        dots: false
    
      });

  }

  
  $("#owl-demo2").owlCarousel({
 
    loop:true,
    margin:20,
    dots:true,
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    autoPlay : true,
    stopOnHover : true,
    responsive:{
      0:{
        items: 1,
        nav : false
      },
      1000:{
        items:2,
        nav : true,
        navText: ["<img class='prev-arrow'>","<img class='next-arrow'>"]
      }
    }
 
  });

  
  $("#owl-demo4").owlCarousel({
 
    loop:true,
    dots:false,
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    autoPlay : true,
    stopOnHover : true,
    responsive:{
      0:{
        items:1,
        nav : false
      },
      1000:{
        items:2,
        nav : true,
        navText: ["<img class='prev-arrow3'>","<img class='next-arrow3'>"]
      }
    }
 
  });

  
  $("#owl-demo5").owlCarousel({
 
    loop:true,
    dots:false,
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    autoPlay : true,
    stopOnHover : true,
    responsive:{
      0:{
        items:1,
        nav : false
      },
      1000:{
        items:2,
        nav : false
      }
    }
 
  });

  if(checkWidth <=1000){
          $("#owl-demo3").owlCarousel({
                
            loop:true,
            margin:20,
            nav : false,
            dots:true,
            slideSpeed : 500,
            paginationSpeed : 800,
            rewindSpeed : 1000,
            autoPlay : true,
            stopOnHover : true,
            responsive:{
              0:{
                items:1,
              },
              1000:{
                items:2,
              }
            }

          });
  }else{
    $("#owl-demo3").css("display", "block");

  }

  $(".submenu-bar-link").each(function(){
    if ($(this).attr("href") == window.location){
            $(this).addClass("active");
    }
});

 
    $("input[name = 'filterTours']").mouseover(function(){
      if($(document).width()>750){
      $(".searchddMenu").css("display","block");
      $(".searchddMenu .searchddMenuRow ul li:first-child").addClass('active');
      $(".searchddMenu .searchddMenuRow ul li:first-child").trigger('mouseover');
      }
    });

    
    if($(document).width()>750){
      $(".searchddMenu").mouseleave(function(){
        $(".searchddMenu").css("display","none");
        $(".searchddMenu .searchddMenuRow ul li").removeClass('active');
      });
    }
    
    if($(document).width()<750){
      $(".searchddMenu .tabcontent").mouseleave(function(){
      $(".searchddMenu .tabcontent").css("display","none");
      $(".searchddMenu .tablinks").removeClass('active');
      });
    }

    if($(document).width()<=750){
      $(".searchddMenu").css("display","block");
    }
      $("body").click(function(){      
        if($(document).width()>750){
            $(".searchddMenu").css("display","none");
        }
        
      $('.results').hide();
      });

     
      $('.changeDest').click(function() {
        $("#changeDestModal").toggle();

      });
      
      $('.cDClose').click(function() {
        $("#changeDestModal").hide();

      });

  
});
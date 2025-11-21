$(document).ready(function(){  

  var site           = document.location.origin + "/";
  var theme          = "wp-content/themes/asuaire-v4/";

  	$('input[type=radio][name=tripWith]').change(function() {
	    if (this.value == 'Solo') {
	        $('.notOnly').hide();
	    }else{
	        $('.notOnly').show();
	    }
	    $('.showTraveling').html(
	    	$(this).parent().find('label').text()+'<i class="fas fa-angle-down"></i>	');
	});

    $("body").on("click",".nav-link",function() {

    	var currentStep  = $('.nav-tabs .active').attr('href');
    	var currentIndex = $('.nav-tabs .active').attr('data-step');
    	var clickIndex   = $(this).attr('data-step');

    	if(clickIndex < currentIndex){
    		return true;
    	}
		
   		var statusForm =  validateForm(currentStep);
   		if(!statusForm){

    		$('html, body').animate({scrollTop:$('.tab-content').position().top}, 'slow');
   			return true;

   		}else{
   			return false;
   		}
   				
    });

    $("body").on("click",".btnNextStep2",function() {

    	var nextStep     = parseInt($(this).attr('data-step'));
    	var divValid     = "";
    	
    	// if(nextStep == 4){
    		var statusForm =  validateForm('#form');
    		console.log(statusForm);
    		if(!statusForm){
    				$('.clientMail').text($('input[name="email"]').val());
	    			$('.clientPhone').text($('input[name="phone"]').val());

			      $.ajax({
			          type: 'POST',
			          async: true,
			          dataType: "json",
			          url:  site + theme + "php-files/salesforce/send.php",
			          data: $(form).serialize(), 
			          success: function(data){
			            
			            if(data[0] != 0){
			                
			                $('#form')[0].reset();
			                // $('#form').submit();

			            }
			          },
			          error: function(error){
			            console.log('Design Error');
			          }
			      });

    		$('.wrap_steps').slideUp('slow');
    		$('.congratulations').show();

    		}else{
    			return false;
    		}
    	// }else{
    	//    $(divValid).click();
   		// }


    });

    $("body").on("click",".btnNextStep",function() {

    	var nextStep     = parseInt($(this).attr('data-step'));
    	var currentStep  = nextStep-1;
    	var divValid     = "";
    	
    	switch(nextStep){
    		case 1:
    		   divValid = "#nav-newtrip-tab";
    		break;
    		case 2:
    		   divValid = "#nav-custom-tab";
    		break;
    		case 3:
    		   divValid = "#nav-contact-tab";
    		break;

    	}
    	
    	if(nextStep == 4){
    		var statusForm =  validateForm('#nav-contact');
    		console.log(statusForm);
    		if(!statusForm){
    			$('.wrap_steps').slideUp('slow');
    			$('.clientMail').text($('input[name="email"]').val());
    			$('.clientPhone').text($('input[name="phone"]').val());

			      $.ajax({
			          type: 'POST',
			          async: true,
			          dataType: "json",
			          url:  site + theme + "php-files/salesforce/send.php",
			          data: $(form).serialize(), 
			          success: function(data){
			            
			            if(data[0] != 0){
			                
			                // if(data['lang'] == 'en'){
			                //   dataLayer.push({'event': 'disenatuviajeEN'});
			                // }else if(data['lang'] == 'de'){
			                //   dataLayer.push({'event': 'disenatuviajeGER'});
			                // }else{
			                //   dataLayer.push({'event': 'disenatuviaje'});
			                // }
			                // fbq('track', 'Lead');
			                
			                $('#form')[0].reset();
			                $('#form').submit();

			            }
			          },
			          error: function(error){
			            console.log('Design Error');
			          }
			      });

    		$('.congratulations').show();

    		}else{
    			return false;
    		}
    	}else{
    	   $(divValid).click();
   		}


    });

   	$("#mobile-number").intlTelInput({
      initialCountry: "",
      preferredCountries: [ 'ar',"es",'us','co','uk','cl','mx','gb' ],

    });

   	$("body").on("click",".controls a",function() {

    	var element = $(this);
        var input   = element.parent().parent().find('input');
        var count   = input.val();
        
        if( input.val() == ''){
    		count = 0;
    	}

    	count   = parseInt(count);
    
    	if(element.hasClass('plus')){
    		input.val(count+1);	
    	}else{
    	   if(count - 1 < 1){
    	   	 input.val(0);	
    	   }else{
    	   	 input.val(count-1);
    	   }			
    		
    	}
    				
    });

   	$("body").on("click",".showTraveling",function() {

   		if(!$('.wrap_options').is(':visible')){
   			$('.wrap_options').show();
   			$('.showTraveling i').css('transform','rotate(180deg)');
   		}else{
   			$('.wrap_options').hide();
   			$('.showTraveling i').css('transform','rotate(0deg)');
   		}
    	
    				
    });

   	$("body").on("click",".savePass",function() {

   		if(!validateForm('.wrap_options')){
	    	$('.wrap_options').hide();
	   		$('.showTraveling i').css('transform','rotate(0deg)');
    	}			
    });


   	$('#start_date').daterangepicker({
	    "singleDatePicker": true,
	    "showCustomRangeLabel": false,
	    "minDate":moment(),
	    locale: {
	       format: 'YYYY/MM/DD',
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
	  	"drops": "up"
	}, function(start, end, label) {
	  
	   	$('#end_date').daterangepicker({
				    "singleDatePicker": true,
				    "showCustomRangeLabel": false,
				    "minDate": start.format('YYYY/MM/DD') ,
				    locale: {
	      					format: 'YYYY/MM/DD',
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
				    "opens": "left",
   					"drops": "up"
			}, function(start, end, label) {

				$('#end_date').removeClass('error-border');
				$('#end_date').removeClass('error');
		});

		$('#end_date').val('');
		$('#start_date').removeClass('error-border');
		$('#start_date').removeClass('error');

	});

	$('#end_date').daterangepicker({
	    "singleDatePicker": true,
	    "showCustomRangeLabel": false,
	    "minDate":moment(),
				    locale: {
					       format: 'YYYY/MM/DD',
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
   		"drops": "up"

	}, function(start, end, label) {
	  
		$('#end_date').removeClass('error-border');
		$('#end_date').removeClass('error');
	});

	$('#start_date').val('');
	$('#end_date').val('');
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
	                $(form + ' input[name="'+this.name+'"]').parent().parent().parent().addClass('error-left');
					$(form + ' input[name="'+this.name+'"]').parent().parent().parent().find('.error-text').css('display','block');
	                hasError = true;
	              }else{
	                $(form + ' input[name="'+this.name+'"]').parent().parent().parent().removeClass('error-left');
					$(form + ' input[name="'+this.name+'"]').parent().parent().parent().find('.error-text').hide();
	              }
	              
	            break;
	            case 'radio':
	              var count = $('input[name="'+this.name+'"]:checked').length;
	              if(count < 1){
	                $(form + ' input[name="'+this.name+'"]').parent().parent().parent().addClass('error-left');
					$(form + ' input[name="'+this.name+'"]').parent().parent().parent().find('.error-text').css('display','block');
	                
	                hasError = true;
	              }else{
	                $(form + ' input[name="'+this.name+'"]').parent().parent().parent().removeClass('error-left');
					$(form + ' input[name="'+this.name+'"]').parent().parent().parent().find('.error-text').hide();
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
	                $(form + ' input[name="'+this.name+'"]').addClass('error-border');
	                $(form + ' input[name="'+this.name+'"]').val(''); 
					$(form + ' input[name="'+this.name+'"]').parent().find('.error-text').css('display','block');	
	                hasError = true;
	              }else{
	                $(form + ' input[name="'+this.name+'"]').removeClass('error-border');
					$(form + ' input[name="'+this.name+'"]').parent().find('.error-text').hide();	
	              }
	            break;
	            case 'email':
	              if(validacion_email.test(this.value) == false){
	                $(form + ' input[name="'+this.name+'"]').addClass('error-border');
	                //$('#'+this.id).val(''); 
	                hasError = true;
	              }
	            break;
	            case 'time':
	              if(this.value.replace(/ /g, '') == ''){
	                $(form + ' input[name="'+this.name+'"]').addClass('error-border');
	                $(form + ' input[name="'+this.name+'"]').val(''); 
	                hasError = true;
	              }
	            break;
	            case 'textarea':
	              if(this.value.replace(/ /g, '') == ''){
	                $(form + ' textarea[name="'+this.name+'"]').addClass('error-border');
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

	   $(".number").on("keypress keyup blur",function (event) {    
           console.log(event.which);
           $(this).val($(this).val().replace(/[^\d+].+/, ""));

            if(event.which != 43){
	            if ((event.which < 48 || event.which > 57)) {
	                event.preventDefault();
	            }
            }
        });


});
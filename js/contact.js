$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            messages: {
                name: {
                    required: "Allez :D vous avez bien un nom, entrez le?",
                    minlength: "Le nom doit contenir au minimum deux (2) caractères"
                },
                subject: {
                    required: "Ajoutez un objet à votre message pour m'aider à referencer?",
                    minlength: "L'objet doit contenir au minimum quatre (4) caractères"
                },
                number: {
                    required: "Ajoutez votre numéro de telephone",
                    minlength: "mettez un numéro correct (5 caractères minimum)"
                },
                email: {
                    required: "Vous devez renseignez votre email pour que le message parte"
                },
                message: {
                    required: "Vous avez sans doute oublier d'ecrire quelque chose dans la zone message.",
                    minlength: "C'est tout? sérieux?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})
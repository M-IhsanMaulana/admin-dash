/******
 * 
 * Jquery Function for Validated data if not null
 */

 'use strict';

 $(function() {

     $(".my-login-validation").submit(function() {
         var form = $(this);
         if (form[0].checkValidity() === false) {
           event.preventDefault();
           event.stopPropagation();
         }
         form.addClass('was-validated');
     });

     
 });
;
/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *
 * 2. Using the bootstrap-selct plugin render dropdown on the page??
 *
 * 3. Use the live search functionality to make the dropdown searchable---
 *
 * 4. Add the user glyphicons next to each student in the list---
 *
 * 6. Add a menu header to the dropdown--
 *
 * 7. Customize further with anything you find intersting--
 *
 * 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student
 *
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters--
 *    Last Name  - required, at least 2 characters--
 *	  start_date - make sure date is yyyy-mm-dd--
 *	  ADD any other validation that makes you happy--
 *
 * 10. Make the color of the error text red--
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

 (function(){
//declare variables that will be populated
    var firstName = $('#first_name');
    var lastName = $('#last_name');
    var startDate = $('#start_date');
    var studentId = $('#student_id');

//set validation rules
   $("#updateStudentForm").validate({
   errorClass: "text-danger",
   rules: {
     first_name: {
       required: true,
       minlength: 2
     },
     last_name:  {
       required: true,
       minlength: 2
     },
     start_date: {
       dateISO: true
    }
   },
//set error messages
   messages: {
     start_date: {
       dateISO: "Please use yyyy-mm-dd format"

     },
     first_name: {
       required: "This field is required!",
       minlength: "First Name must be at least 2 characters"
     },
     last_name: {
       required: "This field is required!",
       minlength: "Last Name must be at least 2 characters"
     }
   },


 });
//set function to disable the form intially
 function disable (){
    $("#updateStudentForm :input").prop("disabled", true);
}
   disable();
//set function to enable the form once a name is selected
 $('#studentId').change(function(){
         $("#updateStudentForm :input").prop("disabled", false);
 });
//function that upon a change will identify the correct ID that is selected
 $('#studentId').change(function(){
    var idClick =$(this).val()
     console.log(idClick);

//retrieving the data to populate the form
    var url = ("http://localhost:1337/student") + "/" + idClick;

    $.get(url, function(data) {
      firstName.val(data.first_name);
      lastName.val(data.last_name);
      startDate.val(data.start_date);
      studentId.val(data.student_id);
   })
});




 })();

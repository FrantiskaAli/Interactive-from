console.log("I am linked properly");
//ONCHANGE FUNCTION TO UPDATE CARD DETAILS
/*Cardholder name input*/
$(document).on('change', '#cardholder', function(event) {
  $(event.target).next().remove();
  $(event.target).removeClass("error-border");
   typeOnCard(event.target,$('#name-on-card'))
   if (/[0-9-`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(event.target.value)) {
    const errMsg = $('<label>').addClass('error-message').text('Enter name as on your card');
    $(event.target).after(errMsg)
    $(event.target).addClass("error-border");
  }
  });

  /*card number input*/ 
  $(document).on('change', '#card-number', function(event) {
    $(event.target).next().remove();
    $(event.target).removeClass("error-border")
    typeOnCard(event.target,$('#on-card-number'))
    if (/[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(event.target.value) ||event.target.value.length < 19) {
      const errMsg = $('<label>').addClass('error-message').text('Wrong format, number only, full number');
      $(event.target).after(errMsg);
      $(event.target).addClass("error-border");
    }
   });
//submit button 
$("form").on('submit', '#cardholder', function(event) {
event.preventDefault();
alert('submitted')
  });


   /*experation month */
   $(document).on('change', '#exp-date-mm', function(event) {
    typeOnCard(event.target,$('#mm-card'))
    }
   );

   //experation year
   $(document).on('change', '#exp-date-yy', function(event) {
    typeOnCard(event.target,$('#yy-card'))
 
   });
  //CVC
   $(document).on('change', '#CVC', function(event) {
    typeOnCard(event.target,$('#CVC-on-card'))

    if (/[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(event.target.value)) {
      alert('please only use numbers');
    }
    if(!event.target.value.trim()){
      alert('cant be blank')
    }
 
   });
   function typeOnCard(e, where){
    let text = e.value
    where.text(text)
}











console.log("I am linked properly");
//ONCHANGE FUNCTION TO UPDATE CARD DETAILS
$(document).on('change', '#cardholder', function(event) {
   typeOnCard(event.target,$('#name-on-card'))

  });
  $(document).on('change', '#card-number', function(event) {
    typeOnCard(event.target,$('#on-card-number'))
 
   });
   $(document).on('change', '#exp-date-mm', function(event) {
    typeOnCard(event.target,$('#mm-card'))
 
   });
   $(document).on('change', '#exp-date-yy', function(event) {
    typeOnCard(event.target,$('#yy-card'))
 
   });
   $(document).on('change', '#CVC', function(event) {
    typeOnCard(event.target,$('#CVC-on-card'))
 
   });
   function typeOnCard(e, where){
    let text = e.value
    where.text(text)
}











console.log("I am linked properly");
//ONCHANGE FUNCTION TO UPDATE CARD DETAILS
/*Cardholder name input*/
$(document).on('change', '#cardholder', function (event) {
  typeOnCard(event.target, $('#name-on-card'))

});
/*card number input*/
$(document).on('change', '#card-number', function (event) {
  typeOnCard(event.target, $('#on-card-number'))
  let text = $(this).val().trim()
  text = text.substr(0, 4) + " " + text.substr(4, 4) + " " + text.substr(8, 4) + " " + text.substr(12);
  $('#on-card-number').text(text)

});
//card expiary date
$(document).on('change', '#exp-date-mm', function (event) {
  typeOnCard(event.target, $('#mm-card'))

});
$(document).on('change', '#exp-date-yye', function (event) {
  typeOnCard(event.target, $('#yy-card'))

});
//CVC
$(document).on('change', '#CVC', function (event) {
  typeOnCard(event.target, $('#CVC-on-card'))

});
//function to type on card
function typeOnCard(e, where) {
  let text = e.value
  where.text(text)
}
//on submit function
$('form').on("submit", function (event) {
  event.preventDefault()
  let check = 0
  $('input').each(function () {
    let value = $(this).val();
    let inputID = $(this).attr('id')
    $(this).next().remove();
    $(this).removeClass("error-border");
    console.log(value);
    /*error messages for each of the input */
    switch (inputID) {
      case "cardholder":
        if (/[0-9-`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test($(this).val()) || !$(this).val()) {
          const errMsg = $('<label>').addClass('error-message').text('Enter name as on your card');
          $(this).after(errMsg)
          $(this).addClass("error-border");
        } else check++
        break;
      case "card-number":
        if (/[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test($(this).val()) || $(this).val().trim().length < 16) {
          const errMsg = $('<label>').addClass('error-message').text('Wrong format, number only, full number');
          $(this).after(errMsg);
          $(this).addClass("error-border")
        }else check++;
        break;
      case "CVC":
        if (!$(this).val()) {
          const errMsg = $('<label>').addClass('error-message').text("Can't be blank");
          $(this).after(errMsg);
          $(this).addClass("error-border");
        }else if ($(this).val().length !=3) {
          const errMsg = $('<label>').addClass('error-message').text("Missing number");
          $(this).after(errMsg);
          $(this).addClass("error-border");
        }
        else check++;
        break;
      default:
        if (!$(this).val()) {
          const errMsg = $('<label>').addClass('error-message').text("Can't be blank");
          $(this).after(errMsg);
          $(this).addClass("error-border");
        }else check++;

    }
    console.log(check)
  });

//creating thankyou page
  if (check > 4){
    $('form').remove()
    
    const thanks = $('<h3>').text("Thank you!");
    const saved = $('<h4>').text("We've added your card details");
    const button = $('<button>').addClass('buttons').text('Continue');
    $('svg').removeClass('hide')
    $('#main-inputs').append($('<section>',{'id' : 'thankyou'}).append([thanks,saved,button]))
  }
})










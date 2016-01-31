$(function main() {

  // delete button
  // create a button with an 'X' in it.
  var button = document.createElement('button');
  // when 'X' is clicked, remove itself.
  button.setAttribute('class', 'delete-button');
  button.setAttribute('value', "X");
  // append it to all/any li elements
  $('li').append(button);

  // get submit button
  $('#button').click(function (eventObject) {
    
    // when the button is clicked
    // prevent the default event behavior
    eventObject.preventDefault();

    // store theinput from the text field
    var input = $('#text-box').val();

    check(input);
  });

  // localStorage
});

function check (input) {
  if (input) {
    
    $('#text-box').val('');

    $('#main-list').prepend('<li>' + input + '</li>');
  }
}
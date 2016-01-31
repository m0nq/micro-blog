$(function main() {

  createDeleteButton($('li'));

  // listen for click on form button
  $('#button').click(createNewListItem);

  // add list item element to local storage
  

  // listen for click on delete button and delete from local storage as well
  $('.delete-button').click(deleteElement);
});

function createNewListItem ($eventObject) {

  // when the button is clicked
  // prevent the default event behavior
  $eventObject.preventDefault();

  // store theinput from the text field
  var input = $('#text-box').val();

  // check if it's not an empty string
  if (input) {
    $('#text-box').val('');
    $li = $('<li>');
    $('#main-list').prepend($li.html(input));
    // attach a delete button to it.
    createDeleteButton($li);
  }
}

// jQuery -> Void
// creates a new button to append on the consumed $li
function createDeleteButton ($li) {
  // create a button with an 'X' in it.
  var $button = $('<button>').val("X");
  $button.attr({class: 'delete-button pull-right'});
  $li.append($button);
}

function deleteElement ($eventObject) {
    // look at the calling parent and delete itself
    // $(this).parent().remove();
    $(this).parent().remove();
}
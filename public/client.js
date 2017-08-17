// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');

  $('#uploadForm').submit(function(event) {
    event.preventDefault();
    var form = new FormData($('#uploadForm')[0]);
    $.ajax({
      url: '/filechecker',
      method: "POST",
      dataType: 'json',
      data: form,
      processData: false,
      contentType: false,
      success: function(result) {
        $('#results').text('The file size is: ' + result)
      },
      error: function(er) {
        $('#results').text('There was an error: ' + er)
      }
    })
  });

});

// $.ajax(); <<< core method
// $('').load();
// $.get();
// $.post();
// $.getScript();
// $.getJSON();

// simple click function
// on click of the anchor tag run the function.
$('a').on('click', function(e) {
  e.preventDefault();
  // variable pageRef
  // The (this) in the code below is referenced to the a (anchor element)
  var pageRef = $(this).attr('href');
  // call the function callPage and pass in the pageRef
  callPage(pageRef)
});ss

function callPage(pageRefInput) {
  // using the core $.ajax() method
  $.ajax({
    // url for the request
    url: pageRefInput,
    // type of HTTP Request
    type: 'GET',
    // type of data expected back
    datatype: 'text',
    // code runs if request is successfull
    // response is passed to the function
    success: function(response) {
      console.log('the page was loaded', pageRefInput, response);
      $.('.content').html(response);
    },
    // code rus if request is unsuccessfull
    // status codes are passed to the function
    error: function(error) {
      console.log('the page was NOT loaded, error');
    },
  })
}

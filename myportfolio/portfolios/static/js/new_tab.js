// function OpenInNewTabWinBrowser(url) {
//   var win = window.open(url, '_blank');
//   win.focus();
// }

$('a').on('click', function(e) {
  e.preventDefault();
  // variable pageRef
  // The (this) in the code below is referenced to the a (anchor element)
  var pageRef = $(this).attr('href');
  // call the function callPage and pass in the pageRef
  openNewTab(pageRef)
});
// $(function() {
//   $('#github_link', ).click(function() {
//     var linkRef = $(this).attr('href');
//     openNewTab(linkRef)
//     return false;
//   });
// });
// $(function() {
//   $('#deployed_link', ).click(function() {
//     var linkRef = $(this).attr('href');
//     openNewTab(linkRef)
//     return false;
//   });
// });

function openNewTab(link) {
  var frm = $('<form   method="get" action="' + link + '" target="_blank"></form>')
  $("body").append(frm);
  frm.submit().remove();
}

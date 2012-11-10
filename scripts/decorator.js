$(function () {
  $("article").wrap('<div class="container"><div class="row"><div class="span12"></div></div></div>');

  $("section.introduction").wrap('<div class="text-success"/>');

  // Twitter Bootstrap
  $("head").append('<link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.1/css/bootstrap-combined.min.css" rel="stylesheet"><script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.1/js/bootstrap.min.js"></script>');
});

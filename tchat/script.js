jQuery(function($) {
  $('#post').submit(function() {
    var message = $("#message").val()
    var fini = message.trim();
    if (fini !== ""){
      $(".afficher").append($("<p>"+message+"</p>").fadeIn(500))
      $("#message").val("")
    }else {
      alert("erreur")
    }
    return false
  })
})

$(function() {
  $("#send").click(function() {
    let id = $("#NoID").val()
    let message = $("#bodyMessage").val()
    let token = $("#token").val()
    //$("#NoID").val("")
    $("#bodyMessage").val("")
    $('body').append("<div>" + id + "</div>")
    $('body').append("<div>" + message + "</div>")

    $.ajax({
      url: 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + id + '&text=' + message
    });
  })     

})

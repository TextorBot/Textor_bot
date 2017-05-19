$(function() {
  $("#send").click(function() {
    let id = $("#NoID").val()
    let message = $("#bodyMessage").val()
    //$("#NoID").val("")
    $("#bodyMessage").val("")
    $('body').append("<div>" + id + "</div>")
    $('body').append("<div>" + message + "</div>")

    $.ajax({
      url: 'https://api.telegram.org/bot314712956:AAFw-yqfam3M2dlDp50H9vJXx0wBgiGVYyA/sendMessage?chat_id=' + id + '&text=' + message
    });
  })     

})

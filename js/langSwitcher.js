
$("#radio01").click(function () {
    $(".eng-text").removeClass("lang-hide");
    $(".eng-text").addClass("lang-show");
    $(".rus-text").addClass("lang-hide");
    // alert('Класс удален');
    $("#InputEmail").attr("placeholder", "Type your mail..");
    $("#InputText").attr("placeholder", "Type your message..");
    $(".button-submit").removeClass("rus-button");
    $(".button").removeClass("rus-button");
  });
  
  $("#radio02").click(function () {
    $(".eng-text").removeClass("lang-show");
    $(".eng-text").addClass("lang-hide");
    $(".rus-text").removeClass("lang-hide");
    $("#InputEmail").attr("placeholder", "Введите mail..");
    $("#InputText").attr("placeholder", "Введите свое сообщение..");
    $(".button-submit").addClass("rus-button");
    $(".button").addClass("rus-button");
  });
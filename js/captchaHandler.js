document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let tk = "";
  grecaptcha.ready(function () {
    grecaptcha.execute("6Ldq39UZAAAAAFnBBkcRYbhoXZhhRF0ndtyuojTo", { action: "homepage" }).then(function (token) {
      tk = token;
      document.getElementById("token").value = token;
      const data = new URLSearchParams();
      for (const pair of new FormData(document.querySelector("form"))) {
        data.append(pair[0], pair[1]);
      }
      fetch("/captcha.php", {
        method: "post",
        body: data,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result["om_score"] >= 0.5) {
                $.ajax({
                    type: "POST",
                    url: "/mail.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    $('#btn').trigger('click');
                    $("#basic").trigger("reset");
                    console.log('ok');
                });
          } else {
            console.log("Бот");
          }
        });
    });
  });
});

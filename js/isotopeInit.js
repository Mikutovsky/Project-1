//initialisation
$grid = $(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
});

$(".filter button").on("click", function () {
  var value = $(this).attr("data-name");
  $grid.isotope({
    filter: value,
  });
});

$(function () {
  var $container = $("#grid");
  $container.isotope({
    itemSelector: ".grid-item",
    filter: ".music",
  });
});

//отображать сначала подразделы музыки
$(function () {
  var defaultSub = "music";
  $(".products li").hide();
  $('.products li[data-filter="' + defaultSub + '"]').show();
});

// portfolio first sort
$(".filters a").on("click", function () {
  //окраска разделов
  $(".filters li").removeClass("active");
  $(this).parent("li").addClass("active");

  var attributeValue = "data-filter";
  if (this.getAttribute(attributeValue) === "music") {
    let btn = document.querySelector('button[data-name=".music"]');
    btn.click();
  } else {
    btn = document.querySelector('button[data-name=".video"]');
    btn.click();
  }

  //здесь начинается логика
  var category = $(this).attr("data-filter"); // определяем категорию
  if (category == "all") {
    $(".products li").show(); // отображаем все позиции
  } else {
    $(".products li").hide(); // скрываем все позиции
    $('.products li[data-filter="' + category + '"]').show(); // и отображаем позиции из соответствующей категории
  }
});

//окраска подразделов раздела
$(".products button").on("click", function () {
  $(".products li").removeClass("active");
  $(this).parent("li").addClass("active");
});

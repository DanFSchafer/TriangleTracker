

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#sideA").val());
    var number2 = parseInt($("#sideB").val());
    var number3 = parseInt($("#sideC").val());
    var result;

    if (number1 + number2 <= number3 || number2 + number3 <= number1 || number3 + number1 <= number2) {
      result = "not a triangle";
    } else if (number1 === number2 || number2 === number3 || number3 === number1) {
      result = "an isosceles triangle";
    } else if (number1 === number2 && number2 === number3 && number3 === number1) {
      result = "an equilateral triangle";
    } else {
      result = "a scalene triangle";
    }

    $("#output").text("This is " + result);

    if (result === "an equilateral triangle") {
      $("#equilateral, #isosceles, #scalene, #bomb").hide();
      $("#equilateral").show();
    } else if (result === "an isosceles triangle") {
      $("#equilateral, #isosceles, #scalene, #bomb").hide();
      $("#isosceles").show();
    } else if (result === "a scalene triangle") {
      $("#equilateral, #isosceles, #scalene, #bomb").hide();
      $("#scalene").show();
    } else {
      $("#equilateral, #isosceles, #scalene, #bomb").hide();
      $("#bomb").show();
    }
  });
});

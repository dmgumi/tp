$("form").submit((e) => {
      e.preventDefault();

      product = $("#product").val();
      brand = $("#brand").val();
      model = $("#model").val();
      ref = $("#ref").val();
      spec = $("#spec").val();

      $("textarea").val(`${product + " " + brand}
${brand + " " + model}
${brand + " " + ref}
${product + " " + brand + " " + spec}`);

      $("#product").val("");
      $("#brand").val("");
      $("#model").val("");
      $("#ref").val("");
      $("#spec").val("");
});

$("label").last().css("visibility", "hidden");

$("#reset").click(function () {
      $("textarea").val("");
});

$("#copy").click(function () {
      navigator.clipboard.writeText($("textarea").val());
});
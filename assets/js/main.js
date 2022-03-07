$("form").submit((e) => {
      e.preventDefault();
      $("textarea").val(`${$("#product").val() + " " + $("#brand").val()}
${$("#brand").val() + " " + $("#model").val()}
${$("#brand").val() + " " + $("#ref").val()}
${$("#product").val() + " " + $("#brand").val() + " " + $("#spec").val()}`);
});

$("#copy").click(function () {
      $("textarea").val().select()
      navigator.clipboard.writeText($("textarea").val());
});

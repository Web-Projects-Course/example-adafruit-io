var feedID = "534138";
var aioKey = "";

var urlPath = "https://io.adafruit.com/api/feeds/" + feedID + "/data?x-aio-key=" + aioKey;

$.ajax({
  dataType: "json",
  url: urlPath,
  success: success
});


function success(results) {

  console.log(results);

  for(var i = 0; i < results.length; i++) {

    //Create new <div>
    var colorBox = $('<div></div>');

    //Make text contents of div date created
    colorBox.text(results[i].created_at);

    //Change the background color of the div to value field of results
    colorBox.attr("style","background-color: " + results[i].value + ";")

    //Change the background color of the div to value field of results
    colorBox.attr("class","color-value")

    //Append the div onto the data div
    $("body").append(colorBox);
  }

}

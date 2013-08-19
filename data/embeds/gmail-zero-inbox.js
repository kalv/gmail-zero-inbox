;(function() {

  var log = function(message) {
    console.log(message);
  };

  var ImageAPI = {
    fetchImage: function(cb) {
      $.getJSON("http://image-a-day.herokuapp.com/image", function(data) {
        cb(data);
      });
    }
  };

  var showImage = function showImage() {
    if ($("#inbox-zero-picture").length === 0) {
      ImageAPI.fetchImage(function(data) {
        $(".TC").html("<div id='inbox-zero-picture'><p style='font-size:14px'>"+ data.description+"</p><img style='height:384px;width:683px;' src='"+ data.imageUrl+"'></img><p style='font-size:11px;'>Copyright: <a href='"+data.copyrightLight +"'>" + data.copyright +"</a></div>");
      });
    } else {
      $("#inbox-zero-picture").show();
    }
  };

  var hideImage = function hideImage() {
    $("#inbox-zero-picture").hide();
  };

  var checkLoop = function checkLoop() {
    // TODO: Might need to add more css selectors to catch all types of Gmail
    var emails = $(".zA:visible");

    if (emails.length > 0) {
      hideImage();
    } else {
      showImage();
    }
    setTimeout(checkLoop, 500);
  };

  // Start the checking loop
  ;(function(){
    checkLoop();
  })();

  log("initializing gmail zero inbox plugin");
})();

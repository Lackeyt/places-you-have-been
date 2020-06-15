//business Logic
//busines logic for LocationLog
function LocationLog() {
  this.location = [];
  this.currentId = 0;
}

LocationLog.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.location.push(location)
}

LocationLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


// business logic for Locations
function Location(location, date, landmarks, notes) {
  this.location = location;
  this.date = date;
  this.landmarks = landmarks;
  this.notes = notes;
}

Location.prototype.details = function() {
  return "<div class='well'><p class = 'col-3-md location'>" + this.location + "</p><p class = 'col-9-md details'>" + this.date + "<br>" + this.landmarks + "<br>" + this.notes + "</p></div>"
}

//User Interface
$(document).ready(function() {
  $("#inputForm").submit(function(){
    event.preventDefault()
    let locationInput = new Location($("#location").val(), $("#date").val(), $("#landmarks").val(), $("#notes").val())
    
    $("#outputRecord").append(locationInput.details())
    //populate values
    })

  $(document).on('click', 'div.well', function() {
      $(this).children("p.details").toggle();
  });

});

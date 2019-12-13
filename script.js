function savePollToFirebase(best, worst, middle, middle2) {
    var results = {
    };

    firebase.database().ref('subscription-entries').push().set(results)
      .then(function(snapshot) {
          success(); // some success method
      }, function(error) {
          console.log('error' + error);
          error(); // some error method
      });

}

function populatePoll() {
    var ref = firebase.database().ref('Albums');
    var albumList = new Array();
    ref.on("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot){
        console.log(childSnapshot.val());
        albumList.push(childSnapshot.val());
      });
    });

    console.log(albumList)

    document.getElementById("album-1-name").innerHTML = "hello";
    document.getElementById("album-2-name").innerHTML = albumList[1];
    document.getElementById("album-3-name").innerHTML = albumList[2];
    document.getElementById("album-4-name").innerHTML = albumList[3];
}
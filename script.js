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
  ref.on('value', function(snap) {
    var albums = snap.val();
    changeAlbumNames(albums);
  });
}
function changeAlbumNames(albums) {

  //select 4 random elements from albums
  const shuffled = albums.sort( () => 0.5 - Math.random() ); // Shuffle array
  let selected = shuffled.slice(0, 4); // Get sub-array of first four elements after shuffled

  document.getElementById("album-1-name").innerHTML = selected[0];
  document.getElementById("album-2-name").innerHTML = selected[1];
  document.getElementById("album-3-name").innerHTML = selected[2];
  document.getElementById("album-4-name").innerHTML = selected[3];
}
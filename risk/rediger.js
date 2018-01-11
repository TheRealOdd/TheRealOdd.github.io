function setup() {
    var config = {
      apiKey: "AIzaSyBFl6BJdnztebOd2oA0Gku2UME6VxIu4LQ",
      authDomain: "risk-70f39.firebaseapp.com",
      databaseURL: "https://risk-70f39.firebaseio.com",
      projectId: "risk-70f39",
      storageBucket: "risk-70f39.appspot.com",
      messagingSenderId: "425968317674"
    };
    firebase.initializeApp(config);
    let database = firebase.database(); 
    let inpLand = document.getElementById("land");
    let inpRegion = document.getElementById("region");
    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", lagreData)

    function lagreData(e) {
        let land = inpLand.value;
        let kortid = inpRegion.value;
        let ref = database.ref("land/"+ land);
        ref.set({kortid});
    }
}
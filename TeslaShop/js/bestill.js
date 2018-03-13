function setup() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBdq7VOrbrx6YrDz9BOpio0omDfIuNuFFA",
      authDomain: "teslashop-4480a.firebaseapp.com",
      databaseURL: "https://teslashop-4480a.firebaseio.com",
      projectId: "teslashop-4480a",
      storageBucket: "teslashop-4480a.appspot.com",
      messagingSenderId: "280085924119"
  
    };firebase.initializeApp(config);
    let database = firebase.database();

    let bestillinger = database.ref("bestillinger");
    bestillinger.on("child_added", visBestillinger);

    let modeller = database.ref("modeller");
    modeller.on("child_added", visModeller);

}
function visBestillinger(snapshot) {
    let bestillinger = snapshot.key;
    let divTarget = document.getElementById("bestillinger");
    divTarget.innerHTML += `<div class="box">${bestillinger}</div>`
}

function visBestillinger(snapshot) {
    let bestillinger = snapshot.val();
    let divTarget = document.getElementById("bestillinger");
    divTarget.innerHTML += 
    `<div>
      <br>Adresse ${bestillinger.adresse}
      <br>Epost ${bestillinger.epost}
      <br>Fulltnavn ${bestillinger.Fulltnavn}
      <br>Telefonnummer ${bestillinger.telefonnummer}
      <br> Modell ${bestillinger.modell}
    </div>`
}
function setup() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdq7VOrbrx6YrDz9BOpio0omDfIuNuFFA",
    authDomain: "teslashop-4480a.firebaseapp.com",
    databaseURL: "https://teslashop-4480a.firebaseio.com",
    projectId: "teslashop-4480a",
    storageBucket: "teslashop-4480a.appspot.com",
    messagingSenderId: "280085924119"

  };
  firebase.initializeApp(config);
  let divSkjema = document.getElementById("skjema");

  let ref = firebase.database().ref("bestillinger");

  function visSkjema(snapshot) {
    let bestillinger = snapshot.key;
    let info = snapshot.val();
    divSkjema.innerHTML += `
            <div>
              <h4> Transporteres: ${bestillinger}</h4>
              <ul>
               <li> Navn: ${info.Fulltnavn}<br>
               <li>Adresse: ${info.Adresse}<br>
               <li>Epost: ${info.Epost}<br>
               <li>Mobil: ${info.Telefonnummer}<br>
               <li> Modell: ${info.Modell}
              </ul>
            </div>
          `;
  }
  ref.on("child_added", visSkjema);

}
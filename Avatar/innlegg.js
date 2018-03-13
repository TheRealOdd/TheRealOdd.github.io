function setup(){
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAz7deNgeqiRojujQn4bdeNXqxOq5iiXkE",
    authDomain: "webchat-69ce6.firebaseapp.com",
    databaseURL: "https://webchat-69ce6.firebaseio.com",
    projectId: "webchat-69ce6",
    storageBucket: "webchat-69ce6.appspot.com",
    messagingSenderId: "176304313311"
  };
  firebase.initializeApp(config);
  let divListe = document.getElementById("liste");

      let ref = firebase.database().ref("Medlem");
  
      function visMedlem(snapshot) {
          let MedlemNr = snapshot.key;
          let info = snapshot.val();
          divListe.innerHTML += `
            <div>
              <h4>${MedlemNr}</h4>
              <ul>
               <li>Navn: ${info.Fornavn} ${info.Etternavn}
               <li>Epost : ${info.Epost}
               <li>Adresse: ${info.Adresse}
              </ul>
              </ul>
            </div>
          `;
      }
      ref.on("child_added", visMedlem);
  
  }
  
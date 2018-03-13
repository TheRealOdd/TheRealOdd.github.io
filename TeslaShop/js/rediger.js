
function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBdq7VOrbrx6YrDz9BOpio0omDfIuNuFFA",
        authDomain: "teslashop-4480a.firebaseapp.com",
        databaseURL: "https://teslashop-4480a.firebaseio.com",
        projectId: "teslashop-4480a",
        storageBucket: "teslashop-4480a.appspot.com",
        messagingSenderId: "280085924119"

    }; firebase.initializeApp(config);
    let database = firebase.database();

    //let inpBestillinger = document.getElementById("bestillinger");

    let btnLagreBestillinger = document.getElementById("lagrebestillinger");
    btnLagreBestillinger.addEventListener("click", lagreBestillinger);

    function lagreBestillinger(e) {
        //let Bestillinger = inpBestillinger.value;
        let Adresse = document.getElementById("adresse").value;
        let Epost = document.getElementById("epost").value;
        let Fulltnavn = document.getElementById("fulltnavn").value;
        let Telefonnummer = document.getElementById("telefonnummer").value;
        let Modell = document.getElementById("modell").value;
        let ref = database.ref("bestillinger/" + fulltnavn.value);
        ref.set({ Epost, Fulltnavn, Adresse, Telefonnummer, Modell });
    }


}
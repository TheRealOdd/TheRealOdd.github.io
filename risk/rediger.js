function setup() {
    var config = {
      apiKey: "AIzaSyBFl6BJdnztebOd2oA0Gku2UME6VxIu4LQ",
      authDomain: "risk-70f39.firebaseapp.com",
      databaseURL: "https://risk-70f39.firebaseio.com",
      projectId: "risk-70f39",
      storageBucket: "risk-70f39.appspot.com",
      messagingSenderId: "425968317674"
    };    firebase.initializeApp(config);
    
        let database = firebase.database();
    
        let inpLand = document.getElementById("land");
        let inpRegion = document.getElementById("region");
    
        let btnLagreLand = document.getElementById("lagreland");
        btnLagreLand.addEventListener("click", lagreLand);
    
        let inpKort = document.getElementById("kort");
        let inpAntallNye = document.getElementById("antallnye");
    
        let btnLagreKort = document.getElementById("lagrekort");
        btnLagreKort.addEventListener("click", lagreKort);
    
        function lagreLand(e) {
            let land = inpLand.value;
            let kortid = inpRegion.value;
            let ref = database.ref("land/" + land);
            ref.set({ kortid });
        }
    
        function lagreKort(e) {
            let kort = inpKort.value;
            let antallnye = inpAntallNye.value;
            let ref = database.ref("kort/" + kort);
            ref.set({ antallnye });
        }
    
    
    }
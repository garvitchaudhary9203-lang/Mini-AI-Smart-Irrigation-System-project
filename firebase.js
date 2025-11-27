<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    databaseURL: "YOUR_DATABASE_URL"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  onValue(ref(db, "sensor/soil"), (snap) => {
    document.getElementById("soil").innerHTML = snap.val();
  });

  onValue(ref(db, "sensor/temp"), (snap) => {
    document.getElementById("temperature").innerHTML = snap.val() + "°C";
  });

  onValue(ref(db, "sensor/humidity"), (snap) => {
    document.getElementById("humidity").innerHTML = snap.val() + "%";
  });

  onValue(ref(db, "sensor/status"), (snap) => {
    document.getElementById("status").innerHTML = snap.val();
  });
</script>

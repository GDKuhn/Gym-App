import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDIVAHRKdxS-tTR6tTPB1TM4DC8sRpPljE",
	authDomain: "gym-app-f8655.firebaseapp.com",
	projectId: "gym-app-f8655",
	storageBucket: "gym-app-f8655.appspot.com",
	messagingSenderId: "1098597106618",
	appId: "1:1098597106618:web:ee9c29924cda1611a69383",
	measurementId: "G-6PNE53N67N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

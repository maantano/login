// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //   apiKey: "AIzaSyAb2sg6O_f5AklIm3NDiRwiVy4TyxCLvtY",
  //   authDomain: "nextauth-1ff50.firebaseapp.com",
  //   projectId: "nextauth-1ff50",
  //   storageBucket: "nextauth-1ff50.appspot.com",
  //   messagingSenderId: "676248252318",
  //   appId: "1:676248252318:web:9f77c1ca0c7c33833a308f",
  //   measurementId: "G-ZR2PKHCK2T",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
// const analytics = getAnalytics(app);

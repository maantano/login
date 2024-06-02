import { getAuth } from "firebase/auth";
import firebaseApp from "./firebaseClient";

const fireAuth = getAuth(firebaseApp);

export default fireAuth;

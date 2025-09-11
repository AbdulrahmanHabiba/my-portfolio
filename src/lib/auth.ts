import { GoogleAuthProvider, signInWithPopup , signOut } from "firebase/auth";
import { auth } from "./firebase";

export const loginWithGoogle = async () => {
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const provider = new GoogleAuthProvider();
  // const result = isMobile? await signInWithRedirect(auth ,provider)  : await signInWithPopup(auth, provider);
  const result = await signInWithPopup(auth ,provider)
  return result.user;
};

export const logout = () => signOut(auth);


import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log("name", name);
    const message = validateFormData(email, password);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      const name = nameRef.current.value;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
             photoURL: "https://lh3.googleusercontent.com/-CYBAnwb4I44/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklxcMrd_i0-PKNFndOn0VnWeXI1MQ/photo.jpg?sz=46"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;

        dispatch(addUser({ uid: uid, email: email, photoURL: photoURL, displayName:displayName }));
            navigate("/browse");
            // Profile updated!
            // ...
          }).catch((error) => {

            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const handleToggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
          className="absolute"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute px-16 py-12 max-w-md bg-black my-40 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            className="w-full p-3 my-2 rounded-md bg-gray-500 bg-opacity-50 border-[0.1px] border-solid border-slate-200"
            type="text"
            placeholder="Name"
            // onChange={(e) => console.log(e.target.value)}
          />
        )}
        <input
          className="w-full p-3 my-2 rounded-md bg-gray-500 bg-opacity-50 border-[0.1px] border-solid border-slate-200"
          type="text"
          placeholder="Email Address"
          ref={emailRef}
        />
        <input
          className="w-full p-3 my-2 rounded-md bg-gray-500 bg-opacity-50 border-[0.1px] border-solid border-slate-200"
          type="Password"
          placeholder="Password"
          ref={passwordRef}
        />
        {/* {!isSignInForm && (
          <input
            className="w-full p-3 my-2 rounded-md bg-gray-500 bg-opacity-50 border-[0.1px] border-solid border-slate-200"
            type="Password"
            placeholder="Confirm Password"
          />
        )} */}
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="text-center py-2 my-4 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleToggleSignUp} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

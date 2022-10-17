import { useState } from "react";
import Signup from "../pages/Signup";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signUp = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://mernxercise.herokuapp.com/api/user/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the json token to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update AuthContext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { signUp, isLoading, error };
};

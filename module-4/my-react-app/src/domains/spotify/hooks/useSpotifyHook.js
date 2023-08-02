import { useEffect, useRef } from "react";
import {
  generateCodeChallenge,
  generateRandomString,
} from "../../../utils/string";
import { useNavigate } from "react-router-dom";

const clientId = "41de2532e598463abb3b2115f2259179";
const redirectUri = "http://localhost:5173/login";

export const useSpotifyLogin = () => {
  const isInitialMount = useRef(true);
  const navigate = useNavigate();

  let codeVerifier = generateRandomString(128);

  const getToken = () => {
    let data = localStorage.getItem("token");
    data = JSON.parse(data);

    return data;
  };

  const doLogin = async () => {
    try {
      const codeChallenge = await generateCodeChallenge(codeVerifier);
      localStorage.setItem("code_verifier", codeVerifier);

      const args = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: "playlist-modify-private",
        redirect_uri: redirectUri,
        state: generateRandomString(16),
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      });

      window.location = "https://accounts.spotify.com/authorize?" + args;
    } catch (error) {
      console.log("Failed to authorize: ", error);
    }
  };

  const doLogout = () => {
    localStorage.removeItem("code_verifier");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const fetchAccessToken = async (code) => {
    const codeVerifier = localStorage.getItem("code_verifier");
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier,
    });

    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      const data = await response.json();

      localStorage.setItem("token", JSON.stringify(data));
      navigate("/spotify");
    } catch (error) {
      console.error("Error fetch spotify token:", error);
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");

    if (code) {
      fetchAccessToken(code);
    }
  }, []);

  return {
    accessToken: getToken()?.access_token || "",
    getToken,
    doLogin,
    doLogout,
  };
};

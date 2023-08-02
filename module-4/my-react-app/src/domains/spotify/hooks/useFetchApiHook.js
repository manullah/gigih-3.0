import { useEffect, useRef, useState } from "react";
import { useSpotifyLogin } from "./useSpotifyHook";
import { fetchProfile } from "../api";

export const useFetchProfile = () => {
  const isInitialMount = useRef(true);

  const { accessToken } = useSpotifyLogin();
  const [profile, setProfile] = useState({});

  const fetch = async () => {
    const response = await fetchProfile(accessToken);
    setProfile(response);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (accessToken) {
      fetch();
    }
  }, []);

  return {
    profile,
  };
};

export const useFetchSearch = () => {
  const [search, setSearch] = useState("");

  return {
    search,
    setSearch,
  };
};

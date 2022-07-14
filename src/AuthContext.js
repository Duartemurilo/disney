import React, { useState } from "react";

export const AuthContext = React.createContext([]);

export const AuthProvider = (props) => {
  const [profile, setProfile] = useState("/images/bart.png");

  return (
    <AuthContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

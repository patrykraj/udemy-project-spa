import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label
        style={{
          display: "block",
          margin: "10px 0"
        }}
      >
        Login: <input type="text" />
      </label>
      <label
        style={{
          display: "block",
          margin: "10px 0"
        }}
      >
        Hasło: <input type="password" />
      </label>
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;

import * as React from "react";
import Login from "./Login";
// 1. import `ChakraProvider` component

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;

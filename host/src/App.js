import React, {Suspense, useState} from "react";
const RemoteApp = React.lazy(() => import("app2/App"));
const RemoteButton = React.lazy(() => import("app3/App"));

const App = () => {
  const [title, setTitle] = useState('Microfrontend')
  const click = () => {
    setTitle('Clicked!')
  }
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>HOST APP</h1>
        <Suspense fallback={"loading..."}>
          <RemoteApp title={title}/>
        </Suspense>
        <Suspense fallback={"loading..."}>
          <RemoteButton onClick={click}/>
        </Suspense>
      </div>
    </div>)
}


export default App;

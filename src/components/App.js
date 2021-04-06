import React from "react";
import Paragraph from "./Paraghraph";
import Form from "./Form";
import DarkMode from "./DarkMode";

// import pic from "../my-pic.jpg";

class App extends React.Component {
  render() {
    return (<div>
     <Paragraph/>
     <Form/>
     <DarkMode/>
     </div>
    )
  }
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {(data) => {
          console.log(data);
          return (
            <main>
              <header className="App-header">
                <button
                  onClick={data.signOut}
                  style={{
                    margin: "20px",
                    fontSize: "0.8rem",
                    padding: "5px 10px",
                    marginTop: "20px",
                  }}
                >
                  Sign Out
                </button>
              </header>
            </main>
          );
        }}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);

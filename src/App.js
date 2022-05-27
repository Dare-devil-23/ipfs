/* src/App.js */
import "./App.css";
import { useState } from "react";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

const App = () => {
  const [fileUrl, updateFileUrl] = useState(``);
  const [loadingState, setLoadingState] = useState(false);
  const [ipfsFilePath , setIpfsFilePath] = useState('');
  async function onChange(e) {
    setLoadingState(true);
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      if(added){
        setIpfsFilePath(added.path);
      }
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
    setLoadingState(false);
  }
  return (
    <div className="App">
      <h1>IPFS Example</h1>
      {!loadingState ? (
        <input type="file" onChange={onChange} />
      ) : (
        <p>Loading please wait...</p>
      )}
      

        {fileUrl && (
          <div className="my-5">
            <h1>path : {`${ipfsFilePath}`}</h1>
            <img src={fileUrl} alt="img" width="600px" />
          </div>
        )}
      
    </div>
  );
};

export default App;

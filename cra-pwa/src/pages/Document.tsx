import React from "react";
import style from './Document.module.css'

export function Document(){
    return (
      <div className="App-body">
        Document
        <iframe
          className={style.iframe}
          title="document"
          src="/pages/Technology Road Map To 2030.html"
        />
      </div>
    );
}

export default Document;
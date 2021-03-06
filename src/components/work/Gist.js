import React from 'react';

//Creates a label for Gist languages and adjusts color
let toolCreate = (lang) => {
    lang = lang.toLowerCase();
    if(lang.toLowerCase() === "java" || lang === "react"){
        return <div key={lang} className="gist--tools-tool bg-blue">{lang}</div>
    } else  if( lang.toLowerCase() === "javascript"  ){
        return <div key={lang} className="gist--tools-tool bg-yellow">{lang}</div>
    } else if(  lang.toLowerCase() === "node" ||
                lang.toLowerCase() === "express" ||
                lang.toLowerCase() === "mongodb"  ){
        return <div key={lang} className="gist--tools-tool bg-green">{lang}</div>
    }else{
        return <div key={lang} className="gist--tools-tool bg-red">{lang}</div>
    }
    
}

const Gist = (props) => (
    <a href={props.url} target="_blank" className="gist">
        
        <div className="gist--content-container">

            <div className="gist--tools">
                <h2>{props.title}</h2>
                
                {props.tools.map((tool) => 
                    toolCreate(tool)
                )}
                <div className="divider"></div>
            </div>
           
            <div className="gist--content">{props.about}</div>
        </div>
        
        <div className="divider"></div>
        <div className="gist--url">{props.url}</div>
        
    </a>
);

export default Gist;
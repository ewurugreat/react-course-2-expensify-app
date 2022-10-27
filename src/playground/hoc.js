import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h2>Info</h2>
        <p>This info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => ( 
        <div>
        {props.isAdmin && <p>THis is private info. please don't share</p>}    
            <WrappedComponent {...props} />
        </div>
    )

}
const requireAuthentication =  (WrappedComponent) =>{
    return (props) =>(
      <div>
      {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please login to get started</p>)}
      </div>
    )
        
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={false} info='These are the details ' />, document.getElementById("demo1"))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the details ' />, document.getElementById("demo1"))


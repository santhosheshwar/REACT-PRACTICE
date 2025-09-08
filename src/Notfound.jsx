import { Link } from "react-router-dom"

function Notfound (){
  return(

    <>
     <h1>404 NOT FOUND</h1>
     <a className="btn btn-primary" href="/">Home</a>
   <Link className="btn btn-danger" too="/">Home</Link>
    </>
  );
}

export default Notfound;
import { useState } from "react";

function Login(){

    const [pwd1,setpwd1] = useState("");
    const [pwd2,setpwd2] = useState("");
    const [same,setsame] = useState(true);

    function handlerpwd1change(event){
        setpwd1(event.target.value);
       
    }

     function handlerpwd2change(event){
        setpwd2(event.target.value);
        if(pwd1 == event.target.value){
            console.log("Same");
            setsame(true);
        }
        else{
            setsame(false);
        }
       
    }

   

    return(

        <>
                <form className="my-5" style={{width:"50%", margin:"auto"}}>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" />
                       
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input value={pwd1} type="password" onChange={handlerpwd1change} className="form-control"/>
                    </div>
                        <div className="mb-3">
                        <label  className="form-label">Re-Enter Password</label>
                        <input  value={pwd2} type="password" onChange={handlerpwd2change} className="form-control"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">I Agree</label>
                    </div>
                    {!same && <p>Password Don't match</p>}
                    <button type="submit" className="btn btn-primary">Create Account</button>
            </form>

        </>
    )

}

export default Login;
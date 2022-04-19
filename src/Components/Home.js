import React from 'react'; 
import './Home.css';
import {useState} from 'react';
import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';

function Home() {

    const [chatFlag, setChatFlag] = useState(false);

    function pageFlag(q) {
        setChatFlag(q);
    }


    return (
        <div>
            <React.Fragment>
                {chatFlag ? (
                    <></>
                    // <Chat userIdx={idx}/>
                ) : (
                    <div className="login-wrap">
                        {/* Bootstrap CSS */}
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            
                        <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                        <div className="login-form">
                            <SignIn pageFlag={pageFlag}/>
                            <SignUp pageFlag={pageFlag}/>
                        </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        </div>
    );
}

export default Home;
import Recording from "./Recording";
import Video from "./Video";
import Image from "./Image";
import {useState} from 'react';

function AddFiles({handleImg, handleVideo, handleRecording}) {
    const [attachFlag, setAttachFlag] = useState(true);
    function attachOff() {
        setAttachFlag(false);
    }

    function attachOn() {
        setAttachFlag(true);
    }
    return(
        <>
        {
            attachFlag ? 
            (       
                <>
                {/* record */}
                <Recording handleRecording={handleRecording}/>   
                <button onClick={attachOff} type="button" className="btn " >
                <i className="bi bi-paperclip" />
                </button>
                </>
            ) : (
            <>
            {/* attach docs */}
                <Image attachOn={attachOn} handleImg={handleImg}/>
                <Video attachOn={attachOn} handleVideo={handleVideo}/>
            </>
            )
        }
        </>
    );
}

export default AddFiles;
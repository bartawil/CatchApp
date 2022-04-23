import {useState} from 'react';
function Video({attachOn, handleVideo}) {
    const [file, setFile] = useState("");
    function addVideo(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }

    function handleFile() {
      attachOn();
      handleVideo(file);
    }
    
    return(
        <>
        <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalVideo">
          <i className="bi bi-play-btn-fill"></i>
        </button>

        <div className="modal fade" id="exampleModalVideo" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabelVideo" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabelVideo">Upload video</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={attachOn}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer-newRecord">  
                <div className="upload-pic btn btn-newRecord active">
                      <label className="-label" htmlFor="videoFile">
                        <i className="bi bi-paperclip"></i>
                        &nbsp;&nbsp;Select file
                      </label>
                      <input type="file" id="videoFile" accept="video/mp4,video/x-m4v,video/*" onChange={addVideo}></input>  
                </div>
                <button 
                  type="button" className="btn btn-newRecord"  data-dismiss="modal"
                  onClick={handleFile}
                >
                  <i className="bi bi-send-fill"></i>
                  &nbsp;&nbsp;Send file
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Video;
import {useState} from 'react';
import "./Image.css"

function Image({attachOn, handleImg}) {
    const [file, setFile] = useState("");
    function addPhoto(e) {
        if (e.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)){
            setFile(URL.createObjectURL(e.target.files[0]));
        }        
    }


    function handleFile() {
      attachOn();
      handleImg(file);
    }

    return (
      <>
        <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalImg">
        <i className="bi bi-card-image"></i>
        </button>

        <div className="modal fade" id="exampleModalImg" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabelImg" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabelImg">Upload image</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={attachOn}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer-newRecord">  
                <button
                  type="button"
                  className="btn btn-newRecord btn btn-newRecord active"
                >
                  <div className="upload-pic">
                      <label className="-label" htmlFor="file">
                        <i className="bi bi-paperclip"></i>
                        &nbsp;&nbsp;Select file
                      </label>
                      <input id="file" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={addPhoto}/>  
                  </div>
                </button>
                <button 
                  type="button" className="btn btn-newRecord" data-dismiss="modal"
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

export default Image;

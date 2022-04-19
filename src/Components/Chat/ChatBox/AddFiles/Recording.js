import React, { useState, useRef } from "react";
import "./Recording.css"


function Recording({handleRecording}) {
  const [stream, setStream] = useState({
    access: false,
    recorder: null,
    error: ""
  });

  const [recording, setRecording] = useState({
    active: false,
    available: false,
    url: ""
  });

  const chunks = useRef([]);

  function getAccess() {

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((mic) => {
        let mediaRecorder;

        try {
          mediaRecorder = new MediaRecorder(mic, {
            mimeType: "audio/webm"
          });
        } catch (err) {
        }

        const track = mediaRecorder.stream.getTracks()[0];

        mediaRecorder.onstart = function () {
          setRecording({
            active: true,
            available: false,
            url: ""
          });
        };

        mediaRecorder.ondataavailable = function (e) {
          chunks.current.push(e.data);
        };

        mediaRecorder.onstop = async function () {

          const url = URL.createObjectURL(chunks.current[0]);
          chunks.current = [];

          setRecording({
            active: false,
            available: true,
            url
          });
        };

        setStream({
          ...stream,
          access: true,
          recorder: mediaRecorder
        });
      })
      .catch((error) => {
        setStream({ ...stream, error });
      });
  }

  
  function handleFile() {
    handleRecording(recording.url);
  }

  return (
    <>
      <button type="button" className="btn" data-toggle="modal" data-target="#newRecord" onClick={getAccess}>
        <i className="bi bi-mic-fill"></i>
      </button>

      <div className="modal fade" id="newRecord" tabIndex="-1" aria-labelledby="exampleModalLabelRecord" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabelRecord">Recording</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="audio-container">
                    {recording.available && <audio className="audio" controls src={recording.url} />}
                </div>
                <div className="modal-footer-newRecord">
                  {!recording.active ? 
                    (
                      <button
                        type="button"
                        className={recording.active ? "btn btn-newRecord active" : "btn btn-newRecord"}
                        onClick={() => !recording.active && stream.recorder.start()}
                      >
                        <i className="bi bi-mic-fill"></i>
                        &nbsp;Start Recording
                      </button>
                    ):(                    
                      <button 
                        type="button" className="btn btn-newRecord"
                        onClick={() => stream.recorder.stop()}>
                        <i className="bi bi-stop-fill"></i>
                        &nbsp;Stop Recording
                      </button>
                    )
                  }
                  <button 
                    type="button" className="btn btn-newRecord" data-dismiss="modal"
                    onClick={handleFile}
                  >
                    <i className="bi bi-send-fill"></i>
                    &nbsp;Send Recording
                  </button> 
                </div>
            </div>
        </div>
      </div>
    </>
  );
}


export default Recording;
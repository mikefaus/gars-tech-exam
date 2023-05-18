import React, { useState } from 'react'

const Upload = () => {

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  
  const handleSubmission = () => {
  };

  return (
    <div className='content_wrap'>
      <h1 className='content_title'>
        Upload Data to AWS
      </h1>
      <div className='content_body'>
        {/* Drop down select */}
        <button className='file_select'>
          Chose file to upload
        </button>
        {/* Upload button */}
        <button
          className='button_file'
          onClick={handleSubmission}
        >
          Upload
        </button>

      </div>
    </div>
  )
}

export default Upload


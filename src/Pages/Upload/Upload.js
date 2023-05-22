import React, { useRef, useState } from 'react'

const Upload = () => {

  const handleSubmission = () => {
  };

    const handleFileUpload = (event) => {
    const files = event.target.files;
    // Process the uploaded files here
    console.log(files);
  };

  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='content_wrap'>
      <h1 className='content_title'>
        Upload Data to AWS
      </h1>
      <div className='content_body'>

        <button className='file_select' onClick={handleFileButtonClick}>Select Files</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
        multiple
      />
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


import React, { useState } from 'react'

const Download = () => {

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
        Download data from AWS
      </h1>
      <div className='content_body'>
        {/* Drop down select */}
        <select className='file_select' placeholder='Click to select file'>
          <option value="" selected>Search a file to download</option>
          <option value="file 1">File 1</option>
          <option value="file 2">File 2</option>
          <option value="file 3">File 3</option>
          <option value="file 4">File 4</option>
        </select>
        {/* Download button */}
        <button
          className='button_file'
          onClick={handleSubmission}
        >
          Download
        </button>

      </div>
    </div>
  )
}

export default Download
export function Navbar({ setImageUrl, handleUpload, downloadImage, imageUrl }) {
  return (
    <div className="navbar">
      <div className="navbar-inputs">
        <span className="navbar-title">Image Editor</span>
        <label htmlFor="upload" className="upload-label">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload"
          className="upload-input"
          onChange={handleUpload}
          hidden
        ></input>
        <input
          type="text"
          placeholder="Paste Image Link"
          className="link-input"
          onChange={(e) => setImageUrl(e.target.value || null)}
          onKeyDown={(e) =>
            e.key === "Enter" && setImageUrl(e.target.value || null)
          }
        ></input>
        <button
          onClick={downloadImage}
          className="download-btn"
          disabled={!imageUrl}
        >
          Download
        </button>
      </div>
    </div>
  );
}

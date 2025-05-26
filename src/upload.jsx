export const handleUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  } else {
    setImageUrl(null);
  }
};

export const downloadImage = (imageUrl) => {
  if (!imageUrl) return;

  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imageUrl;
  link.click();
};

export const downloadImage = () => {
  if (!imageUrl) return;

  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imageUrl;
  link.click();
};

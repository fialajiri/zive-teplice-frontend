


export const getImagesForYear = (year) => {
  const imageDirectory = path.join(process.cwd(), "public", "img", year);
  return fs.readdirSync(imageDirectory);
};

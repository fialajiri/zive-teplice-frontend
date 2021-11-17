
import fs from "fs";
import path from "path";


export const getImagesForYear = (year) => {
  const imageDirectory = path.join(process.cwd(), "public", "img", year);
  
  return {
    year: year,
    images: fs.readdirSync(imageDirectory)
  } 
};

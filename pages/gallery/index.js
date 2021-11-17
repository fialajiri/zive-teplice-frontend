import { Fragment } from "react";
import { getImagesForYear } from "../../lib/utils";

import Gallery from "../../components/pages/gallery/gallery";

const GalleryPage = (props) => {
  

  return (
    <Fragment>
      <Gallery images={props.images} />
    </Fragment>
  )
}

export default GalleryPage;

export const getStaticProps = async() => {
  const images = [];

  const all2021Images = await getImagesForYear("2021");
  const all2020Images = await getImagesForYear("2020");
  const all2019Images = await getImagesForYear("2019");
  const all2018Images = await getImagesForYear("2018");

  images.push(all2021Images);
  images.push(all2020Images);
  images.push(all2019Images);
  images.push(all2018Images);

  return {
    props: {
      images: images,
    },
    revalidate: 60 * 60 * 24,
  };
};

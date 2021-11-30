import { Fragment } from "react";

import Gallery from "../../components/pages/gallery/gallery";
import { getAllGalleries } from "../../lib/api-util";

const GalleryPage = (props) => {
  return (
    <Fragment>
      <Gallery galleries={props.galleries} />
    </Fragment>
  );
};

export default GalleryPage;

export const getStaticProps = async () => {
  const galleries = await getAllGalleries();

  return {
    props: {
      galleries: galleries,
    },
    revalidate: 60 * 60,
  };
};

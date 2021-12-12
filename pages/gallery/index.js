import { Fragment } from "react";
import Head from "next/head";

import Gallery from "../../components/pages/gallery/gallery";
import { getAllGalleries } from "../../lib/api-util";

const GalleryPage = (props) => {
  return (
    <Fragment>
       <Head>
        <title>Galerie</title>
        <meta charSet="utf-8"/>
        <meta name="keywords" content="Živé Teplice, galerie, fotografie, fotky"/>
        <meta name="description" content="Fotogalerie Živých Teplic"/>
      </Head>
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
    revalidate: 60,
  };
};

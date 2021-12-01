import { Fragment, useContext } from "react";

import { AuthContext } from "../../context/auth-context";

import PhotoList from "../../components/pages/gallery/photos-list";
import UploadGalleryImages from "../../components/pages/gallery/gallery-upload";
import { getAllGalleries, getGalleryById } from "../../lib/api-util";
const GalleryByYear = (props) => {
  const auth = useContext(AuthContext);

  const isAdmin = (auth.user && auth.user.role==='admin')
  

  return (
    <Fragment>
      <PhotoList gallery={props.gallery} />;
      {isAdmin && <UploadGalleryImages id={props.gallery.id} />}
    </Fragment>
  );
};

export default GalleryByYear;

export const getStaticProps = async (context) => {
  const { params } = context;

  const gallery = await getGalleryById(params.galleryId);

  return {
    props: {
      gallery: gallery,
    },
    revalidate: 60 * 60,
  };
};

export const getStaticPaths = async () => {
  const galleries = await getAllGalleries()
  const ids = galleries.map((gallery) => gallery.id);

  const pathWithParams = ids.map((id) => ({ params: { galleryId: id } }));

  return {
    paths: pathWithParams,
    fallback: false,
  };
};

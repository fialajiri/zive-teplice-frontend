import { Fragment } from "react";
import Head from "next/head";
import CreateGallery from "../../components/pages/gallery/gallery-create";

const CreateNewGalleryPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Nová Galerie</title>
      </Head>
      <CreateGallery />
    </Fragment>
  );
};

export default CreateNewGalleryPage;

CreateNewGalleryPage.requireAuth = true;
CreateNewGalleryPage.requireAdmin = true;

import PhotoList from "../../components/pages/gallery/photos-list";
import { getImagesForYear } from "../../lib/utils";

const GalleryByYear = (props) => {
  return <PhotoList images={props.images} />;
};

export default GalleryByYear;

export const getStaticProps = async (context) => {
  const { params } = context;
  
  const allImages = await getImagesForYear(params.year);

  return {
    props: {
      images: allImages.images,
    },
    revalidate: 60 * 60 * 24,
  };
};

export const getStaticPaths = async () => {
  const years = ["2018", "2019", "2020", "2021"];

  const pathWithParams = years.map((year) => ({ params: { year: year } }));

  return {
    paths: pathWithParams,
    fallback: true,
  };
};

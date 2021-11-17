import Image from "next/image";
import Modal from "./modal";

const PhotoModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      show={props.show}
      footer={<button onClick={props.onClear}>Okay</button>}
    >
      <Image src={props.path} width={1000} height={600} />
    </Modal>
  );
};

export default PhotoModal;

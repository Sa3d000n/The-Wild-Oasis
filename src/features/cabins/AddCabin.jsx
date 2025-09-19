import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.open>
        <Button>Add a new cabin</Button>
      </Modal.open>
      <Modal.window>
        <CreateCabinForm />
      </Modal.window>
    </Modal>
  );
}

export default AddCabin;

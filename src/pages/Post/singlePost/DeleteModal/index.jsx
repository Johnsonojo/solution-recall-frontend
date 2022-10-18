import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import postAPI from "../../../../redux/api/postAPI";
import "./style.scss";

const DeletePostModal = (props) => {
  const navigate = useNavigate();

  const mutation = useMutation(postAPI.deletePost, {
    onSuccess: (response) => {
      if (!response.error) {
        navigate("/all-posts");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onHandleDelete = () => {
    mutation.mutate(props.postId);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div>
          <h3>Sure you want to delete this post?</h3>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="action-button-wrapper1">
          <Button variant="success" onClick={onHandleDelete}>
            Yes
          </Button>
          <Button variant="danger" onClick={props.onHide}>
            No
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePostModal;

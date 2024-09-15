import ReactDOM from "react-dom";
import "../components/style/style.css"; // Add your custom styles
interface Props {
  isOpen: boolean;
  function: () => void;
}
// Modal Component
const Modal = (props: Props) => {
  const { isOpen } = props;
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={props.function}>
      <div className="modal-content">
        <button className="modal-close" onClick={props.function}>
          &times;
        </button>
        Zaprimili smo Vašu poruku, javljamo se ubrzo!
      </div>
    </div>,
    document.body,
  );
};

export default Modal;

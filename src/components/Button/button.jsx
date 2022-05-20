import "./button.css";

const ReusableButton = ({ text, style, loading = false, ...restProps }) => {
  return (
    <div>
      <button className="button" style={{ style }} {...restProps}>
        {text}
      </button>
      <hr />
    </div>
  );
};

export default ReusableButton;

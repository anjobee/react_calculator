function Button (props) {
  const { height = '80', width = '80', bgColor = 'c8c8c8', value } = props

  function sendButtonValue(event) {
    event.preventDefault();
    props.onClick(value);
  }

  return (
    <button className="btn border" style={{height: `${height}px`, width: `${width}px`, backgroundColor: `#${bgColor}`, borderRadius: '0px'}} onClick={sendButtonValue}>
      {props.value}
    </button>
  );
}

export default Button;

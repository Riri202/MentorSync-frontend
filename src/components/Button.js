/* eslint-disable react/button-has-type */
function Button({ icon, btnText, btnStyle = "", onClick, children, type = "button" }) {
  return (
    <button onClick={onClick} type={type} className={`${btnStyle} w-[100%] lg:w-[40%] flex flex-row justify-center items-center space-x-3 bg-blue-600 rounded-sm py-3 px-2 text-white font-generalSansRegular hover:bg-blue-800`}>
      {children || (
      <>
        <span>{btnText}</span>
        {icon && icon}
      </>
      )}
    </button>
  );
}

export default Button;

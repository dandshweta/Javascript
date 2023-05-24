import Button from "./Button";

const HomepageView = () => {
  return (
    <>
      <Button
        label={"Change Color"}
        radius={100}
        onClick={() => console.log("Change Color Clicked")}
      />
      <Button
        label={"Change Date"}
        onClick={() => console.log("Change Date Clicked")}
      />
      <Button
        background="blue"
        onClick={() => console.log("Change Color Clicked")}
      />
      <Button
        background="red"
        label={"Change Light"}
        onClick={() => console.log("Change Light Clicked")}
      />
    </>
  );
};

export default HomepageView;

        
        const Button = ({ label, color, background, onClick, radius }) => {
  return (
    <button
      onClick={onClick}
      style={{
        color,
        backgroundColor: background,
        border: "none",
        margin: 12,
        padding: 12,
        borderRadius: radius,
      }}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "Click",
  color: "white",
  background: "black",
  radius: 0,
};

export default Button;

import finance_image from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={finance_image} alt="" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

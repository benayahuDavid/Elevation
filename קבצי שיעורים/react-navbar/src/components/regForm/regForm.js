import "./regForm.css";

export default function RegForm() {
  return (
    <div className="column">
      <form className="from-container column">
        <h1>Reg-Form:</h1>
        <input name="name" placeholder="name:"></input>
        <input name="email" placeholder="email:"></input>
        <input name="data" placeholder="data:"></input>
      </form>
    </div>
  );
}

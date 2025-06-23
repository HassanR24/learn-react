import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [nameOfPlayer, setNameOfPlayer] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setNameOfPlayer(event.target.value);
    onNameChange(symbol, event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={nameOfPlayer}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{nameOfPlayer}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

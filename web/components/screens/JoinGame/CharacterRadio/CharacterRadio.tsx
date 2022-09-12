import Character from "../../../Character/Character";

interface CharacterRadioProps {
  character: string;
  width?: number;
  height?: number;
  disabled?: boolean;
}

const CharacterRadio = ({
  character,
  width = 128,
  height = 128,
  disabled = false,
}: CharacterRadioProps) => {
  return (
    <label>
      <input
        type="radio"
        name="character"
        value={character}
        disabled={disabled}
      />
      <Character character={character} width={width} height={height} />
    </label>
  );
};

export default CharacterRadio;

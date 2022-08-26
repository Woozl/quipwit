import Image from "next/image";

interface CharacterProps {
  character: string;
  width?: number;
  height?: number;
}

const Character = ({
  character,
  width = 128,
  height = 128,
}: CharacterProps) => {
  return (
    <label>
      <input type="radio" name="character" value={character} />
      <Image
        src={`/characters/${character}.svg`}
        width={width}
        height={height}
      />
    </label>
  );
};

export default Character;

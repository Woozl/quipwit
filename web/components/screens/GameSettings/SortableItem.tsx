import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import RoundCard from "./Item";

interface SortableItemProps {
  id: UniqueIdentifier;
  activeId: UniqueIdentifier | null;
}

const SortableRoundCard = ({ id, activeId }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const isActive = id === activeId;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "250px",
    minWidth: "250px",
    height: "400px",
    minHeight: "400px",
    backgroundColor: "#2E294E",
    filter: isActive ? "opacity(35%)" : undefined,
    borderRadius: "32px",
    marginLeft: "8px",
    marginRight: "8px",
  };

  return (
    <RoundCard
      style={style}
      ref={setNodeRef}
      handleRef={setActivatorNodeRef}
      id={id}
      listeners={listeners}
      {...attributes}
    />
  );
};

export default SortableRoundCard;

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";
import RoundCard from "./Item";
import SortableRoundCard from "./SortableItem";

const defaultRounds = [
  {
    id: 1,
    type: "Classic",
    numberOfQuestions: 3,
    playersPerQuestion: 2,
    questionTime: 60,
    voteTime: 30,
  },
  {
    id: 2,
    type: "Classic",
    numberOfQuestions: 3,
    playersPerQuestion: 2,
    questionTime: 60,
    voteTime: 30,
  },
  {
    id: 3,
    type: "Classic",
    numberOfQuestions: 3,
    playersPerQuestion: 2,
    questionTime: 60,
    voteTime: 30,
  },
  {
    id: 4,
    type: "Triple Prompt",
    numberOfQuestions: 3,
    playersPerQuestion: 2,
    questionTime: 60,
    voteTime: 30,
  },
];

const RoundConfiguration = () => {
  const [items, setItems] = useState<UniqueIdentifier[]>(
    defaultRounds.map((round) => round.id)
  );
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      // Press delay of 100ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div
        style={{
          height: "auto",
          width: "auto",
          maxWidth: "100%",
          overflowX: "auto",
          display: "flex",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          {items.map((id) => (
            <SortableRoundCard key={id} id={id} activeId={activeId} />
          ))}
        </SortableContext>
        <DragOverlay
          dropAnimation={{
            duration: 250,
            easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
          }}
        >
          {activeId ? <RoundCard id={activeId} /> : null}
        </DragOverlay>
        <button
          style={{
            width: "250px",
            minWidth: "250px",
            background: "none",
            color: "inherit",
            borderRadius: "32px",
            border: "8px dashed #d499b9",
            fontSize: "32px",
            marginLeft: "8px",
            marginRight: "8px",
          }}
          onClick={() => console.log("Add")}
        >
          Add
          <br />
          New
          <br />
          Round
        </button>
      </div>
    </DndContext>
  );
};

export default RoundConfiguration;

import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import RoundCard from "./RoundCard";
import styles from "./RoundConfiguration.module.css";

const initialRounds = [
  {
    id: "dasjkhadsjkdh",
    name: "round1",
  },
  {
    id: "xvbcvxbcxvb",
    name: "round2",
  },
  {
    id: "dasjkweruytdh",
    name: "round3",
  },
  {
    id: "xcvbcxvbkdh",
    name: "round4",
  },
];

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const RoundConfiguration = () => {
  const [roundList, setRoundList] = useState(initialRounds);

  const onDragEnd: OnDragEndResponder = (result: DropResult) => {
    if (!result.destination || result.destination.index === result.source.index)
      return;

    setRoundList(
      reorder(roundList, result.source.index, result.destination.index)
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="rounds">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {roundList.map((round, index) => (
              <Draggable draggableId={round.id} index={index} key={round.id}>
                {(provided) => (
                  // <div
                  //   ref={provided.innerRef}
                  //   {...provided.draggableProps}
                  //   {...provided.dragHandleProps}
                  // >
                  //   {round.name}
                  // </div>
                  <RoundCard
                    // ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default RoundConfiguration;

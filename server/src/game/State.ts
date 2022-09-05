// export default class State {
//   state: string;

//   constructor() {
//     this.state = "initial";
//   }

//   transition = function (action: "hello") {
//     console.log("hello");
//   };
// }

export const createMachine = (stateMachineDefinition: any) => {
  const machine = {
    value: stateMachineDefinition.initialState,
    transistion(currentState: string, event: any) {
      const currentStateDefinition = stateMachineDefinition[currentState];
      const destinationTransition = currentStateDefinition.transistions[event];

      if (!destinationTransition) {
        return;
      }

      const destinationState = destinationTransition.target;
      const destinationStateDefinition =
        stateMachineDefinition[destinationState];

      currentStateDefinition.actions.onExit();
      destinationTransition.action();
      destinationStateDefinition.actions.onEnter();

      machine.value = destinationState;

      return machine.value;
    },
  };

  return machine;
};

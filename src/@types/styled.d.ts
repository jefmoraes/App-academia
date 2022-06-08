import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      start:string;
      pause:string;
      timer:string;
      cardSelected:string;
      cardNotSelected:string;
      smallCardTraining:string;
      smallCardTraining2:string;
      cardtraining:string;
      daycardselect:string;
      colorbg1:string;
      colorbg2:string;
      colorbg3:string;
      textInput:string;
      textInput2:string;
      text:string;
      icon:string;
      titleExercise:string;
    },
    
  }
}
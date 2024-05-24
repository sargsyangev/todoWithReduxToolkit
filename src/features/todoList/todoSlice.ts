import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Todo {
  id: number;
  title: string;
  isEditable: boolean;
  isDone: boolean;
}
 interface editTodo {
  id: number;
  editValue: string;
}

const initialState: Todo[] = [
  { id: 123, title: "learn TypeScript", isEditable: false, isDone: false },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    doneTodo: (state, action: PayloadAction<number>) => {
      state.map((el) => {
        if (el.id === action.payload) {
          el.isDone = !el.isDone;
        }
        return el;
      });
      return state;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((el) => el.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<number>) => {
      state.map((el) => {
        if (el.isEditable === true) {
          el.isEditable = false;
        }
        if (el.id === action.payload) {
          el.isEditable = !el.isEditable;
        }
        return el;
      });
      return state;
    },
    cancelEditTodo: (state,action: PayloadAction<number>) => {
       state.map((el) => {
        if(el.id === action.payload){
          el.isEditable = false
        }
        return el
       });
       return state
    },
    saveEditTodo: (state,action: PayloadAction<editTodo>) => {
      state.map((el) => {
       if(el.id === action.payload.id){
         el.isEditable = false
         el.title = action.payload.editValue
       }
       return el
      });
      return state
   },
  },
});
export const selectTodos = (state: RootState) => state.todos;
export const { addTodo, doneTodo, deleteTodo, editTodo, cancelEditTodo,saveEditTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

import { EDIT_ANIMAL } from "./actionsType";
export const reduceEditAnimal = (state = {}, action) => {
  switch (action.type) {
    case EDIT_ANIMAL:
      const { animal } = action;
      return animal;

    default:
      return state;
  }
};

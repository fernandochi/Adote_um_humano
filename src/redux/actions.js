import { EDIT_ANIMAL } from "./actionsType";

export const editAnimal = (animal) => ({
  type: EDIT_ANIMAL,
  animal,
});

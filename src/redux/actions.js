import { EDIT_ANIMAL, USER_AUTHENTICATED, IS_DONOR } from "./actionsType";

export const editAnimal = (animal) => ({
  type: EDIT_ANIMAL,
  animal,
});

export const userAuthenticated = (user) => ({
  type: USER_AUTHENTICATED,
  user,
});

export const isDonor = (donor) => ({
  type: IS_DONOR,
  donor,
});

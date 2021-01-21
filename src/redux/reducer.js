import { EDIT_ANIMAL, USER_AUTHENTICATED, IS_DONOR } from "./actionsType";
export const reduceEditAnimal = (state = {}, action) => {
  switch (action.type) {
    case EDIT_ANIMAL:
      const { animal } = action;
      return animal;

    default:
      return state;
  }
};

export const reduceUserAuthenticated = (state = false, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED:
      const { user } = action;
      return user;

    default:
      return state;
  }
};

export const reduceIsDonor = (state = false, action) => {
  switch (action.type) {
    case IS_DONOR:
      const { donor } = action;
      return donor;

    default:
      return state;
  }
};

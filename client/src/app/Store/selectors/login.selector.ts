import { createFeatureSelector, createSelector } from "@ngrx/store";
import { login_state_success } from "../states/login.state";

export const selectTypeLogin = createFeatureSelector<login_state_success>('dataLogin');

export const typeLogin = createSelector(
    selectTypeLogin,
    (state) => state.data
);
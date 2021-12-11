import { createFeatureSelector, createSelector } from "@ngrx/store";
import { register_state_success } from "../states/register.state";

export const selectTypeRegister = createFeatureSelector<register_state_success>('dataRegister');

export const typeRegister = createSelector(
    selectTypeRegister,
    (state) => state.data
);
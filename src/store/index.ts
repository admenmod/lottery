import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as playerReducer } from './player/player.slice';


const reducers = combineReducers({
	player: playerReducer
});

export const store = configureStore({
	reducer: reducers
});


export type RootStore = ReturnType<typeof store.getState>;

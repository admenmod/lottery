'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '@/models/IUser';


interface IPlayerState {
	user: IUser | null;
	isInGame: boolean;
	balance: number;
}

const initialState: IPlayerState = {
	user: null,
	balance: 0,
	isInGame: false
};

export const { actions, reducer } = createSlice({
	initialState,
	name: 'player',
	reducers: {
		setUser: (state, { payload: user }: { payload: IUser }) => {
			state.user = user;
		}
	}
});

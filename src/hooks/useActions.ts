import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { actions as playerActions } from '@/store/player/player.slice';


const actions = {
	...playerActions
};


export const useActions = () => {
	const dispatch = useDispatch();
	return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};

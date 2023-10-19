// import { useMemo } from 'react';
// import { mockFetch } from '@/server';
// import type { UUID } from '@/typeings/id';
// import type { IPlayer } from '@/typeings/IPlayer';
//
//
// export const useLottery = () => {
// 	const api = {
// 		// register: async () => (await (await mockFetch('autorization')).json()).data,
// 		startGame: async (gameUUID: UUID): Promise<void> => void mockFetch('start game', { payload: gameUUID }),
// 		getPlayer: async (playerUUID: UUID): Promise<IPlayer> => {
// 			return (await (await mockFetch('get player', { payload: playerUUID })).json()).data;
// 		},
// 		addPlayerToGame: async (gameUUID: UUID, playerUUID: UUID): Promise<void> => {
// 			mockFetch('add player to game', { payload: [gameUUID, playerUUID] });
// 		}
// 	};
//
// 	return useMemo(() => api, []);
// };

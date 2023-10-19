import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootStore } from '@/store/index';

export const useTypedSelector: TypedUseSelectorHook<RootStore> = useSelector;

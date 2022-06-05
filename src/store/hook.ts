import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from ".";


/**Хуки создаються для того чтобы каждый раз при вызове системных хуков не прописывать тип */
export const useApDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispath, RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useCustomDispath = () => useDispatch<AppDispath>()
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector
import { Middleware, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import pokemonsReducer from './pokemons/pokemons'
import { localStorageMiddleware } from './middlewares/localStorage-middleware'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  // .concat(localStorageMiddleware as Middleware)
})





// Tipados de Redux en TypeScript
// ---------------------------------------------------------------------
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



// tipado del dispatch y selector
// export const useAppDispatch = useDispatch<AppDispatch>() // despachar acciones
// export const useAppSelector = useSelector.withTypes<RootState>() // seleccionar el estado

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { Action, configureStore } from "@reduxjs/toolkit"
import domains from "./slices/domains"
import { createEpicMiddleware } from "redux-observable"
import rootEpic from "./epics"

const epicMiddleware = createEpicMiddleware<Action, Action, void, unknown>()

export const store = configureStore({
  reducer: {
    domains: domains,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().prepend(epicMiddleware)
  },
})
epicMiddleware.run(rootEpic)

// Infer the type of makeStore
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

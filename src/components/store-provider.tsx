import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "@redux/store"
import { getDomains } from "@redux/slices/domains"

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeReference = useRef<AppStore>()
  if (!storeReference.current) {
    // Create the store instance the first time this renders
    storeReference.current = makeStore()
    storeReference.current.dispatch(getDomains())
  }

  return <Provider store={storeReference.current}>{children}</Provider>
}

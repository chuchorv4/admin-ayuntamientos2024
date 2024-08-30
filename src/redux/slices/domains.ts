import { Domain } from "@interfaces/domains"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: Domain[] = []

const domainsSlice = createSlice({
  name: "domains",
  initialState,
  reducers: {
    getDomains: state => state,
    populateDomains: (_state, action: PayloadAction<Domain[]>) =>
      action.payload,
    addDomain: (state, _action: PayloadAction<Domain>) => state,
    updateDomain: (state, _action: PayloadAction<Domain>) => state,
    removeDomain: (state, _action: PayloadAction<string>) => state,
  },
})

export const {
  getDomains,
  populateDomains,
  addDomain,
  updateDomain,
  removeDomain,
} = domainsSlice.actions
export default domainsSlice.reducer

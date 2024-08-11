import { Domain } from "@interfaces/domains"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: Domain[] = []

const domainsSlice = createSlice({
  name: "domains",
  initialState,
  reducers: {
    getDomains: state => state,
    populateDomains: (state, action: PayloadAction<Domain[]>) => action.payload,
    addDomain: state => state,
    removeDomain: state => state,
  },
})

export const { getDomains, populateDomains, addDomain, removeDomain } =
  domainsSlice.actions
export default domainsSlice.reducer

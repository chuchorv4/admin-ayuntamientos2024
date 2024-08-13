import { combineEpics } from "redux-observable"
import { getDomainsEpic, addDomainEpic } from "./domains"

const rootEpic = combineEpics(getDomainsEpic, addDomainEpic)

export default rootEpic

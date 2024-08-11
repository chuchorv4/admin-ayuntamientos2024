import { combineEpics } from "redux-observable"
import getDomainsEpic from "./domains"

const rootEpic = combineEpics(getDomainsEpic)

export default rootEpic

import { Domain } from "@interfaces/domains"
import { getDomains, populateDomains } from "@redux/slices/domains"
import type { Action } from "@reduxjs/toolkit"
import { of, type Observable } from "rxjs"
import { map, filter, mergeMap } from "rxjs/operators"

const getDomainsEpic = (actions$: Observable<Action>): Observable<Action> =>
  actions$.pipe(
    filter(getDomains.match),
    mergeMap(() =>
      of([{ _id: "1", name: "a", url: "1" }] as Domain[]).pipe(
        map(response => populateDomains(response))
      )
    )
  )

export default getDomainsEpic

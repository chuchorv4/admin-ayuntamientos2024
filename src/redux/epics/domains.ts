import { Domain, domainPath } from "@interfaces/domains"
import {
  addDomain,
  getDomains,
  populateDomains,
  updateDomain,
  removeDomain,
} from "@redux/slices/domains"
import type { Action } from "@reduxjs/toolkit"
import { FetchService } from "@utils/fetch-service"
import { Loading } from "@utils/loading"
import type { Observable } from "rxjs"
import { map, filter, mergeMap } from "rxjs/operators"

const fetchService = new FetchService("/api")
const loading = Loading.getInstance()

export const getDomainsEpic = (
  actions$: Observable<Action>
): Observable<Action> => {
  loading.enable()
  return actions$.pipe(
    filter(getDomains.match),
    mergeMap(() =>
      fetchService.get<Domain[]>(domainPath).pipe(
        map(response => {
          loading.disabled()
          return populateDomains(response)
        })
      )
    )
  )
}

export const addDomainEpic = (
  actions$: Observable<Action>
): Observable<Action> => {
  loading.enable()
  return actions$.pipe(
    filter(addDomain.match),
    mergeMap(action =>
      fetchService.post<Domain>(domainPath, action.payload).pipe(
        map(() => {
          loading.disabled()
          return getDomains()
        })
      )
    )
  )
}

export const updateDomainEpic = (
  actions$: Observable<Action>
): Observable<Action> => {
  loading.enable()
  return actions$.pipe(
    filter(updateDomain.match),
    mergeMap(action =>
      fetchService
        .update<Domain>(domainPath, action.payload._id, action.payload)
        .pipe(
          map(() => {
            loading.disabled()
            return getDomains()
          })
        )
    )
  )
}

export const removeDomainEpic = (
  actions$: Observable<Action>
): Observable<Action> => {
  loading.enable()
  return actions$.pipe(
    filter(removeDomain.match),
    mergeMap(action =>
      fetchService.delete<Domain>(domainPath, action.payload).pipe(
        map(() => {
          loading.disabled()
          return getDomains()
        })
      )
    )
  )
}

'use client'

import { useEffect, useState } from 'react'
import {
  onSnapshot,
  query,
  queryEqual,
  type CollectionReference,
  type DocumentData,
  type Query,
  type QueryConstraint,
} from 'firebase/firestore'

interface UseCollectionResult<T> {
  data: T[]
  loading: boolean
  error: Error | null
}

/**
 * Subscribe to a Firestore collection with real-time updates.
 *
 * @example
 * const { data, loading, error } = useCollection(usersCollection, where('role', '==', 'admin'))
 */
export function useCollection<T extends DocumentData>(
  collectionRef: CollectionReference<T>,
  ...queryConstraints: QueryConstraint[]
): UseCollectionResult<T> {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  // Callers typically pass a freshly constructed CollectionReference/query
  // constraints on every render (e.g. useCollection(getNotesCollection(), ...)),
  // which have a new object identity each render even when logically the same
  // query. Depending on them directly in useEffect's deps array caused an
  // infinite subscribe/unsubscribe loop. queryEqual() lets us keep the same
  // Query instance across renders unless it actually changed (e.g. `uid` in a
  // where() clause becoming available after auth resolves) — the React-docs
  // pattern for deriving stable state across renders without an effect.
  const q: Query<T> =
    queryConstraints.length > 0 ? query(collectionRef, ...queryConstraints) : query(collectionRef)
  const [stableQuery, setStableQuery] = useState(q)
  if (!queryEqual(stableQuery, q)) {
    setStableQuery(q)
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      stableQuery,
      (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as T[])
        setLoading(false)
      },
      (err) => {
        setError(err)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [stableQuery])

  return { data, loading, error }
}

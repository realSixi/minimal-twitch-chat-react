interface PayloadAction<S, T> {
    type: S,
    payload: T,
}

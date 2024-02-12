export const selectToken = (state) => state.auth.token;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;

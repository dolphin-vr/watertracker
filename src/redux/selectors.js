export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
export const selectAuth = state => state.auth;
export const selectCurrentUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isAuthenticated;

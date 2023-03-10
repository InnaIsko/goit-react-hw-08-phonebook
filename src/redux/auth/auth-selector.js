export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectName = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectError = state => state.auth.error;

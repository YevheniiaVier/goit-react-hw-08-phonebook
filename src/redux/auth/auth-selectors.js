export const selectAuthError = ({ auth }) => auth.error || {};
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectUser = ({ auth }) => auth.user;

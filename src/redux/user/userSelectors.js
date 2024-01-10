export const selectUserInfo = (state) => state.users.user;
export const selectError = (state) => state.users.error;
export const selectUserIsLoading = (state) => state.users.isLoading;
export const selectUserName = (state) => state.users.user.username;
export const selectUserEmail = (state) => state.users.user.email;
export const selectUserNorma = (state) => state.users.user.waterNorma;
export const selectUserGender = (state) => state.users.user.gender;
export const selectUserAvatar = (state) => state.users.user.avatarURL;

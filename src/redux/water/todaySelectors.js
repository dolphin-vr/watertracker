export const selectWaterToday = (state) => state.portions.portion;
export const selectError = (state) => state.portions.error;
export const selectIsLoading = (state) => state.portions.isLoading;
export const selectDailyPortions = (state) =>
  state.portions.portion.dailyPortions;
export const selectDailyPersentage = (state) =>
  state.portions.portion.persentage;

export const selectWaterToday = (state) => state.water.portions;
export const selectError = (state) => state.water.error;
export const selectIsLoading = (state) => state.water.isLoading;
export const selectDailyPortions = (state) =>
  state.water.portions.dailyPortions;
export const selectPercentage = (state) => state.water.portions.percentage;
export const selectDoses = (state) => state.water.portions.doses;

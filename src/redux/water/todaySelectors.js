export const selectWaterToday = (state) => state.water.portions;
export const selectError = (state) => state.water.error;
export const selectIsLoading = (state) => state.water.isLoading;
export const selectDailyPortions = (state) => {
  console.log("selectDailyPortions", state.water.portions);
  return state.water.portions.dailyPortions;
};
export const selectDailyPersentage = (state) => state.water.portions.persentage;

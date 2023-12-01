export const getTimePeriod = () => {
  let period = ''
  const currentHour = new Date().getHours()
  if (currentHour < 9) {
    period = '早上'
  } else if (currentHour <= 12) {
    period = '上午'
  } else if (currentHour <= 18) {
    period = '下午'
  } else {
    period = '晚上'
  }
  return period
}

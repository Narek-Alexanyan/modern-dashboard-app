import moment from 'moment';

export const getDate = (date) => {
  const currentDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss")
  return currentDate
}
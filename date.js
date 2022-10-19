const dayOfTheWeek = new Date();

exports.getDate = function() {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  return dayOfTheWeek.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
  const options = {
    weekday: 'long'
  };
  return = dayOfTheWeek.toLocaleDateString("en-US", options);

}

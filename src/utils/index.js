const PRESSURE_UNITS = 0.750062;

export const capitalizeFirstLetter = (str) => {
  if (!str) return '';

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getPressureMm = (hpa) => {
  return Math.round(hpa * PRESSURE_UNITS);
}

export const getTime = (s) => {
  return new Date(s * 1000).toLocaleTimeString('ru-RU', {timeZone: 'Atlantic/Reykjavik'})
}


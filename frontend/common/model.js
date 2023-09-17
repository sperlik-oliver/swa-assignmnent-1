const createWeatherData = (type, time, place, value, unit) => 
  ({  
    getValue: () => value,
    getType: () => type,
    getUnit: () => unit,
    getTime: () => time,
    getPlace: () => place,
  })

const createTemperature = (time, place, value, unit = 'C') => ({ ...createWeatherData('temperature', time, place, value, unit) });

const createWind = (time, place, value, unit = 'm/s', direction) => ({ ...createWeatherData('wind speed', time, place, value, unit), getDirection: () => direction })

const createPrecipitation = (time, place, value, unit = 'mm', precipitation_type ) => ({ ...createWeatherData('precipitation', time, place, value, unit), getPrecipitationType: () => precipitation_type })

const createCloudCoverage = (time, place, value, unit = '%') => ({ ...createWeatherData('cloud coverage', time, place, value, unit) })

const createWeatherPrediction = (type, time, place, unit, from, to) => 
  ({
    getType: () => type,
    getTime: () => time,
    getPlace: () => place,
    getMax: () => to,
    getMin: () => from,
    getUnit: () => unit
  })

const createTemperaturePrediction = (time, place, from, to, unit = 'C') => ({ ...createWeatherPrediction('temperature', time, place, unit, from, to) })

const createPrecipitationPrediction = (time, place, from, to, precipitationTypes, unit = 'mm') => ({ ...createWeatherPrediction('precipitation', time, place, unit, from, to ), getExpectedTypes: () => precipitationTypes })

const createWindPrediction = (time, place, from, to, directions, unit = 'm/s') => ({ ...createWeatherPrediction('wind speed', time, place, unit, from, to), getExpectedDirections: () => directions })

const createCloudCoveragePrediction = (time, place, from, to, unit = '%') => ({ ...createWeatherPrediction('cloud coverage', time, place, unit, from, to) })


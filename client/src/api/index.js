import axios from "axios"

export const getTemp = () => axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=24.8481&lon=89.3730&exclude=month&units=metric&appid=21d99a5237bc8d226de542719b6baac2`)
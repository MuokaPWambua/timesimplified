const timeSimplified = (date)=>{
    const currentDateMilliseconds = new Date().getTime(),
         dateMilliseconds = new Date(date.toString()).getTime(),
         dateDifference = dateMilliseconds > currentDateMilliseconds? dateMilliseconds-currentDateMilliseconds : currentDateMilliseconds-dateMilliseconds,
         seconds = dateDifference/1000,
         minute =seconds/60,
         hour = minute/60,
         day = hour/24,
         week = day/7,
         month = week/4,
         year = month/12,

    time = ()=>{
        switch(true){
            case (seconds < 1):
                return `just now`;
            case (seconds >= 1 && seconds < 61):
                return Math.floor(seconds) === 1 ? `${Math.floor(seconds)}sec ago` : `${Math.floor(seconds)}secs ago`;
            case (minute >= 1 && minute < 61):
                return Math.floor(minute) === 1 ? `${Math.floor(minute)}min ago` : `${Math.floor(minute)}mins ago`;
            case (hour >= 1 && hour < 25):
                return Math.floor(hour) === 1 ? `${Math.floor(hour)}hr ago` : `${Math.floor(hour)}hrs ago`;
            case (day >= 1 && day < 8):
                return Math.floor(day) === 1 ?  `${Math.floor(day)}day ago`: `${Math.floor(day)}days ago`;
            case (week >= 1 && week < 5):
                return Math.floor(week) === 1 ? `${Math.floor(week)}wk ago` : `${Math.floor(week)}wks ago`;
            case (month >= 1 &&  month < 12):
                return Math.floor(month) === 1 ? `${Math.floor(month)}month ago` : `${Math.floor(month)}months ago`;
            default:
                return Math.floor(year) === 1 ? `${Math.floor(year)}yr ago` : `${Math.floor(year)}yrs ago`;
        }
    }

    return time()
}

module.exports = timeSimplified
export default timeSimplified

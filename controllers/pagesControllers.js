export const timeOfDay = function restrictAccessbyTime(req,res, next){
    const currentHour = new Date().getHours()
    if(currentHour < 12){
        return res.status(403).send("Access Denied: Come back at 9am tomorrow")
    }
    next()
}

export const weekday = function restrictByweekdays(req,res, next){
    const currentDay = new Date().getDay()
    if(currentDay === 0 || currentDay === 6){
        return res.status(403).send("Access Denied: Only Open on weekdays from 9am")
    }
    next()
}
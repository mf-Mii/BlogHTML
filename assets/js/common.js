const toggleClass = (elem, className) => {
    if ($(elem).hasClass(className)) $(elem).removeClass(className)
    else $(elem).addClass(className)
}
const toggleClassDelay = (elem, className, delay) => {
    if ($(elem).hasClass(className)) setTimeout(() => {
            $(elem).removeClass(className)
        }, delay)
    else $(elem).addClass(className)
}
const toggleClassDelayWithClosingClass = (elem, className, closingClassName, delay) => {
    if ($(elem).hasClass(className)) {
        $(elem).addClass(closingClassName)
        setTimeout(() => {
            $(elem).removeClass(className)
            $(elem).removeClass(closingClassName)
        }, delay)
    }
    else $(elem).addClass(className)
}

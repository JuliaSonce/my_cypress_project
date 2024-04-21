function formattetDate(date) {
    const result = date.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })

    return result
};

console.log(formattetDate(new Date()))
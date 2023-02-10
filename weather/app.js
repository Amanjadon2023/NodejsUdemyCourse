const { default: chalk } = require("chalk");
const { weatherData } = require("./weather_data");
const cityName = process.argv[2];
if (cityName) {
    weatherData({ cityName:cityName, callback:(data) => {
        console.log(data)
    }})
}
else {
    console.log(chalk.red("please provide city name"))
}
const { default: chalk } = require("chalk");
const request = require("request")
const weatherData = (cityName,callback) => {
    console.log(cityName)
    const url = `http://api.weatherstack.com/current?access_key=87d6e68439275958f5f972e55c1fa943&query=${cityName}&units=m`
    request({ url: url, json: true }, (err, res) => {
        const parsedData = res.body;
        // console.log(parsedData)
        if (err) {
            console.log('check your network connection')
        }
        else if (parsedData.error) {
            console.log(chalk.red('error found'))
        }
        else {
            // const temp = parsedData.body.current.temperature
            const dataObj= {
                locations:parsedData.location.name,
                temperature:parsedData.current.temperature,
                weather:parsedData.current.weather_descriptions[0],
            }
            callback(dataObj)
            // console.log(chalk.green(`${parsedData.body.current.weather_descriptions[0]} it is currently  ${temp} degrees out but it feels like ${parsedData.body.current.feelslike} degrees out`))
        }
    })
}
module.exports = {weatherData}
const http=require('http');
const url = `http://api.weatherstack.com/current?access_key=87d6e68439275958f5f972e55c1fa943&query=California&units=f`

const req = http.request(url, (res) => {
    console.log('object')
    res.on('data', (d) => {
        const data=d.toString();
        const parseData=JSON.parse(data)
        // console.log(parseData)

    });
  });
  
  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
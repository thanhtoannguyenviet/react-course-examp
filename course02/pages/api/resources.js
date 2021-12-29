import data from  './data.json'

export default async function (req,res){
    const resData = await fetch("http://localhost:3001/api/resources")
    const data =await  resData.json();
    res.send(data)
}
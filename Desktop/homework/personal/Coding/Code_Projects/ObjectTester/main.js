const bob = {
    series : {
      1: [1,2,4,6],
      2: [4,2,6,8,'test']
    },
    jobs: {
      developer:['jr.developer', 'developer','sr.developer','developer'],
      consultant: ['consutant I', 'consutant II','consutant I','consutant III'],
    },
    items: [{123:{'location 1': 5, 'location 2': 6}},{234:{'location 1': 10, 'location 2': 15}},{235:{'location 1': 15, 'location 2': 3}},{'ipad':{'location 1': 2, 'location 2': 3}}]
  }
  
  // Update header text
  //document.querySelector('#header').innerHTML = object['series']['1'][0]
  
  //TASKS
  //Sum up everything in series as long as it is a number
//   let values =[]
//   let result = 
  //let  = object[Object.keys(series)].filter((v)=> v===Number(v)).reduce((acc,curr)=>acc+curr,0)


  //Solution 1
// let newArr = []
//   Object.keys(bob.series).forEach((arr)=>{
//   console.log(arr)
//   console.log(bob.series[arr].filter((v)=> v===Number(v)?newArr.push(v):false))
//   console.log(newArr.reduce((acc,curr)=>acc+curr,0))
//   })
  
//obtain series
  let seriesObject = bob.series
console.log(seriesObject)
//obtain array within series and concat arrays 
let newArr = [];

for(let key in seriesObject){
    console.log(seriesObject[key])
newArr = newArr.concat(...seriesObject[key])
}
console.log(newArr)
//filter & sum array
  let sum =newArr.reduce((acc,curr)=>{
    return (Number(curr))? acc+curr:acc},0)

  console.log(sum)
  
  //Remove all duplicate jobs and return 2 objects with unique jobs


 let jobsObj = bob.jobs
 Object.keys(jobsObj).forEach((arr)=>{
   console.log(arr)
arr = new Set(jobsObj[arr])
console.log(arr)
 })
  
  //Give me the total number of items on hand
  
  
  
  
  // Log 
  //console.log(message)


//Create an Array and sum the values using forEach , map ,and reduce 
let nums = [1,2,3,4,5]

let forEachTotal = 0
nums.forEach((value)=>forEachTotal+=value)
 console.log(forEachTotal)

 let mapTotal=0
 nums.map((value)=>mapTotal+=value)
 console.log(mapTotal)

 console.log(nums.reduce((acc,curr)=>acc+curr,0))

 //Create an Object, Display window in the console log and how many parts  
 let car ={
    mfg:"Honda",
    parts:['doors','window','wheel','steeringWheel'],
    color:'Black',
 }

 console.log(car.parts[1], car.parts.length )

 console.log(Object.keys(car))

 // Use Map to create an object of vaule pairs 

 let bike = new Map()

 bike.set('parts',['wheel','handleBars','kickStand'])
 bike.set('owner', 'Chris')
 bike.set('color','blue')
 console.log(bike.get('owner'))
 console.log(bike.size)
 console.log(bike.entries())
 console.log(bike.get('color'))
 console.log(bike.get('parts'))
 console.log(bike.has('parts'))
 console.log(bike.keys())
 console.log(bike.values())




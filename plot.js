d3.json("samples.json").then(function(data){
    console.log(data);
});

// // display the metadata of any individual from the dataset:
// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });
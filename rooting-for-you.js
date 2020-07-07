const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let points = 0; 
  let name = "";
  /*for(vegatable of vegetables)//lint did not like this.
  {
    if(vegatable[metric] > points)
    {
      points = vegatable[metric];
      name = vegatable.submitter
    }
  }*/
  for(var i = 0; i < vegetables.length; i++)//lint accepted this.
  {
    if(vegetables[i][metric] > points)
    {
      points = vegetables[i][metric];
      name = vegetables[i].submitter
    }
  }
  return name;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
console.log(judgeVegetable(vegetables, metric));
function groupAnimals(animals) {
    // you can only write your code here!
    var result = []
    for(i = 0; i < animals.length; i++){
        if (animals[i] !== '') {
            let temp = []
            temp.push(animals[i])
            for (let j = i + 1; j < animals.length; j++) {
                if (temp[0][0] === animals[j][0]) {
                    temp.push(animals[j])
                    animals[j] = ''
                }
            }
            result.push(temp)
        }
    }
    return result.sort()
}

  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] 
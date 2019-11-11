function shoppingTime(memberId, money) {
  var arrBelanja =[
    ['Sepatu Stacattu', 1500000],
    ['Baju Zoro', 500000],
    ['Baju HN', 250000],
    ['Sweater Uniklooh', 175000],
    ['Casing Handphone', 50000]
  ]
  // console.log(arrBelanja[4][1]);
  
  // you can only write your code here!
  if(memberId === undefined && money === undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }else if(money < arrBelanja[4][1]){
    return 'Mohon maaf, uang tidak cukup'
  }else if(memberId.length == 0){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }else{
    var objBeli = {
      'member Id' : memberId,
          'money' : money,
          'list Purchased' : [],
          'change money' : money
        }
        for(i = 0; i < arrBelanja.length; i++){
          if(arrBelanja[i][1] < money){
            objBeli['list Purchased'].push(arrBelanja[i][0])
            objBeli['change money'] -= arrBelanja[i][1]
          }
        }
      }
      return objBeli
    }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
function angkaPalindrome(num) {
    for(let i = 0; i < num; i++){
        num = num + 1

        let str = String(num)
        let tmp = ''
        for(let j = str.length - 1; j >= 0; j--){
            tmp += str[j]
        }
        if(str == tmp){
            return num
        }
    }
}
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
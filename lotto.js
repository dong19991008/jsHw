/*
2. 로또 번호 생성기 만들기
1부터 45까지 숫자 중에서 중복 없이 6개의 숫자를 랜덤하게 추출하는 프로그램을 만들어보세요.
추출된 숫자는 오름차순(작은 수부터 큰 수) 으로 정렬되어 출력되어야 합니다.*/

function generateLottoNumbers() {
    let numbers = [];
  
    while (numbers.length < 6) {
      let num = Math.floor(Math.random() * 45) + 1; 
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
  
    numbers.sort((a, b) => a - b); 
    console.log("로또 번호:", numbers.join(", "));
  }
  
  generateLottoNumbers();
  
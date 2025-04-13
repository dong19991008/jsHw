/*
2. 로또 번호 생성기 만들기
1부터 45까지 숫자 중에서 중복 없이 6개의 숫자를 랜덤하게 추출하는 프로그램을 만들어보세요.
추출된 숫자는 오름차순(작은 수부터 큰 수) 으로 정렬되어 출력되어야 합니다.*/

function generateLottoNumbers() {
  let numbers = [];  // 뽑은 번호를 저장 할 배열열

  while (numbers.length < 6) {  //랜덤 숫자가 6자리까지 뽑힐 때까지 반복된다 인덱스는 0부터 시작하니 0~5까지만 뽑으면 되서 <가 사용됨됨
    let num = Math.floor(Math.random() * 45) + 1; // 1부터45까지의 랜덤 숫자를 생성한다
    if (!numbers.includes(num)) {    // .includes는 특정값이 있는지 확인 하는거지만 !가 붙었기에 특정값이 없을 때만 반복된다는 뜻이다.
      numbers.push(num);            //특정 값이 중복되지 않는다면 다음 랜덤 숫자가 추가한다
    }
  }

  numbers.sort((a, b) => a - b);  // 숫자의 오름차순 배열을 만들어준다. 이해가 잘 안감감
  console.log("로또 번호:", numbers.join(", "));
}

generateLottoNumbers();

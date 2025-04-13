1. 
/*랜덤 가위바위보 게임 만들기
사용자는 "가위", "바위", "보" 중 변수에 하나를 입력합니다.
컴퓨터는 Math.random()을 활용해 셋 중 하나를 랜덤으로 선택합니다.
사용자와 컴퓨터의 선택을 비교해 승 / 패 / 무승부 결과를 출력하세요.
*/

/*
1. 필요한 값이 뭐지? (입력값)
2. 내가 뭘 만들어야 하지? (처리 로직)
3. 어떤 결과가 나와야 하지? (출력)
*/

function playButton(userChoice) { 

let choices=[ '가위', '바위', '보']
let computerChoice = choices[Math.floor(Math.random() * 3)]; //컴퓨터가 낼 값 랜덤 생성기 

let result="" //결과 창

if (userChoice === computerChoice){ //만약 유저 초이스랑 컴퓨터 초이스가 같다면 결과는 무승부
    result= '무승부!!'
} else if (
    (userChoice === '가위'&& computerChoice === '보')|| // 유저가 가위를 내고 컴퓨터가 보를 냈거나
    (userChoice === '바위' && computerChoice === '가위')||
    (userChoice === '보' && computerChoice === '바위')){
        result= '사용자 승리!!'
    }else{
        result= '컴퓨터 승리!!'
    }
    
console.log('사용자:', userChoice)
console.log('컴퓨터:', computerChoice)
console.log('결과:', result) 
}

playButton('가위')
/*
우선 내가 입력값을 넣어줘야 하는 변수 와 가위 바위 보 배열, 그리고 컴퓨터가 랜덤으로 가위 바위 보를 뽑아낼 변수를 만들고 
그 결과를 출력해줄 변수까지 만든다.
그 이후 이제 사용자와 컴퓨터가 나온 값에 따른 결과를 if 조건문으로 정해주고 출력한다
*/
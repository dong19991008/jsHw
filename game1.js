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
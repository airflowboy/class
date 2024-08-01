import { useState } from "react"

export default function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');

    

    function onChangeEmail(event) {
        setEmailError('');
        setEmail(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }
    
    function onClickSignup() {

        console.log(email);
        console.log(password);

        // 검증하기
        if(email.includes('@') === false) {
            setEmailError('이메일을 정확히 입력하세요!')
        }else {
            // 백엔드 API 데이터 전달
            
        
            // 성공 알림 표출
            alert('회원가입을 축하합니다!!')
        }

       

    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail}/>
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}
import axios from "axios"

export default function RestGetPage() {

    // function onClickAsync() {
    //     const data = axios.get('https://koreanjson.com/posts/1');
    //     console.log(data);
    // }

    const onClickAsync = () => {
        const data = axios.get('https://koreanjson.com/posts/1');
        console.log(data); 
    }

    // async function onClickSync() {
    //     const data = await axios.get('https://koreanjson.com/posts/1');
    //     console.log(data);
    // }

    const onClickSync = async () => {
        const data = await axios.get('https://koreanjson.com/posts/1');
        console.log(data);
    }



    return (
        <div>
            <button onClick={onClickAsync}>비동기</button>
            <button onClick={onClickSync}>동기</button>
        </div>
    )
}
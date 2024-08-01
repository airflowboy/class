import { gql, useMutation } from "@apollo/client"

export default function GraphqlMutationPage() {

    const 나의그래프큐엘세팅 = gql`
        mutation createBoard($writer: String, $title: String, $contents: String){
            createBoard(writer: $writer, title: $title, contents: $contents) {
                _id
                number
                message
            }
        }
    `

    const [나의함수] = useMutation(나의그래프큐엘세팅)

    const onClcikSubmit = async () => {
        const result = await 나의함수({
            variables: {
                writer: '훈이',
                title: '안녕하세요!',
                contents: '반갑습니다.'
            }
        });
        console.log(result);
    }


    return (

        <div>
            <button onClick={onClcikSubmit}>GRAPHQL-API-요청하기</button>
        </div>
    )
}
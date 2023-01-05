import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;

    section:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 40px;

        div {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;

            ul {
                display: flex;
                gap: 10px;
                overflow-x: scroll;
            }
        }
    }

    @media (min-width: 1024px) {
        width: 968px;
        justify-content: center;
        margin: 0 auto;

        section:nth-child(2) {
            flex-direction: row;
            justify-content: space-between;
            div {
                ul {
                    display: flex;
                    flex-direction: column;
                    height: 450px;

                    overflow-x: hidden;
                    overflow-y: scroll;
                }
            }
        }
    }
`
export const UserInfo = styled.div`
    max-width: 600px;
    display: flex;
    justify-content: space-between;

    padding: 20px;
    gap: 10px;

    div {
        width: 100%;
        max-width: 450px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        section {
            display: flex;
            flex-direction: column;
            gap: 10px;
            
            p {
                font-size: 16px;
            }
        }

        button {
            border: 3px solid black;
        }
    }

    img {
        min-width: 100px;
        min-height: 100px;
        background-color: black;
    }

    @media (min-width: 1024px) {
        max-width: none;

        div {
            max-width: none;
        }
    }
`

export const ProfileItemsCard = styled.li`
    display: block;
    min-width: 150px;
    min-height: 200px;
    background-color: green;

    img {
        width: 100%;
        height: 130px;
        max-height: 200px;
    }

    @media (min-width: 1024px){
        width: 400px;
        min-width: unset;
        min-height: 100px;
        
        display: flex;

        img {
            width: 100px;
            height: 100%;
            max-height: unset;
        }
    }
`
import styled from "styled-components"
import constants from "../constants";
const {ORANGE, GRAY} = constants;

export default function SessionDateItem({movieSchedule}) {
    const {weekday, date, showtimes} = movieSchedule;

    console.log(movieSchedule)
    return(
        <ContainerSchedule>
            <h1>{weekday} - {date}</h1>

            <ContainerTime>
                {showtimes.map((e)=>
                    <SpanTime>{e.name}</SpanTime>
                )} 
            </ContainerTime>
        </ContainerSchedule>
    )
};

const ContainerSchedule = styled.li`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 90%;
    margin: 0 auto;
    margin: 15px 0 15px 30px;
    color: ${GRAY};

    h1 {
        margin-left: 10px;
        font-size: 20px;
    }
`

const SpanTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 43px;
    color: white;
    font-size: 18px;
    background-color: ${ORANGE};
    border-radius: 3px;
    margin: 10px;
`

const ContainerTime = styled.div`
    display: flex;
    flex-wrap: wrap;

`
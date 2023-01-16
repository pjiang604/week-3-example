export default function Card({

    degree = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"

}) {
    return(
        <div style={{backgroundColor: colour, fontSize: font}}>
            {degree}
        </div>
    )
}
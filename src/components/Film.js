import './Film.css'

const Film = ({filmObj})=> {


    return(
        <li className= 'film-item'>
            <a href={filmObj.url}>{filmObj.name}</a>
        </li>
    )
}

export default Film
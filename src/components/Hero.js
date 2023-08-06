import "./HeroStyles.css"
function Hero(){
 return(<>
    <div className={props.cName}>
        <img alt ="HerpImg" src = {props.heroImg}/>
    </div>
    <div className ="hero-text">
     <h1>{props.title}</h1>
     <p>{props.text}</p>
    </div>
    </>
 );
}
export default  Hero;
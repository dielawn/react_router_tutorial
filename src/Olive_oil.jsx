import { Link } from "react-router-dom";

export const OliveOil = () => {
    return (
        <>
            <p>Hello, I am Olive Oil! I like <Link to='/profile/popeye'>Popeye</Link>!</p>
            <Link to='/'>Click to go back</Link>

            
        </>
    )
}
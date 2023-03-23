import "../css/home.css"
const { NavLink } = require('react-router-dom')

const Home = () => {
    return (
        <div className="home-container">
            <div className="landing-section">
                <div className="landing-text">
                    <h2 className="glitch">Glitch</h2>
                </div>
            </div>

            <div className="section section1">
                <div className="img"></div>
                <div className="text">
                    <h1>Did you heard what happened?</h1>
                    <p>As Sarah walked down the street, she suddenly felt a strange sensation wash over her. It was like she had been in this exact moment before, but she knew she hadn't. She shrugged it off and continued walking until she saw a man walking towards her. He looked familiar, but she couldn't place where she had seen him before. As they passed each other, she heard him mutter, "glitch in the matrix." Sarah stopped in her tracks and turned around, but the man had already disappeared. Confused and a bit frightened, she wondered what it all meant and if her reality was really just a simulation after all.</p>
                </div>
            </div>

            <div className="section section2">
                <div className="text">
                    <h1>Techie enough to get out of this matrix?</h1>
                    <p>Take our quiz and find out if you have what it takes to control the matrix...</p>
                    <NavLink to="quiz"><button>Take quiz</button></NavLink>
                </div>
                <div className="img"></div>
            </div>

            <div className="section section3">
                <div className="img"></div>
                <div className="text">
                    <h1>Catchy title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque illum qui tempora veritatis sed sit exercitationem suscipit hic. Eaque molestias maxime quis ullam reprehenderit aspernatur fugiat architecto cumque qui ipsa eius iusto iure dolor, obcaecati consequatur omnis dolores corrupti illo! Similique quasi nisi magni, repudiandae iusto velit. Officiis, impedit!</p>
                </div>
            </div>
        </div>
    );
}
 
export default Home;
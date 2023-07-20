import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Code with hr  </h1>
            <p> solution to all your problems</p>
        </main>
    </div>
    <div className='home2'>
        <img src={vg} alt="graphics" />
        <div><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Nihil alias vel officia unde id a voluptatem nulla neque cumque eaque.</p></div>
    </div>
    <div className="home3" id='about'>
        <div>
        <h1> Who are we?</h1>
        <p>Lorem ipsum dolor,lectus dignissimos quae. o possimus sit, neque ipsa et facilis obcaecati, aut porro. Fugit porro aut doloribus quasi. Deleniti, molestias repellat consectetur nemo omnis consequuntur ex explicabo temporibus cupiditate, repudiandae ullam ducimus doloribus vero suscipit. Sapiente eligendi enim nisi laborum ipsa quae quis eaque aut quisquam! Similique id nihil nulla, illo numquam voluptatem reiciendis accusamus animi excepturi quod minus, distinctio, beatae explicabo tenetur provident! Fuga unde vel hic, dolor temporibus quam veniam dignissimos provident, placeat similique optio! Commodi eveniet rerum incidunt inventore maiores. Eum iusto blanditiis numquam delectus unde! Voluptatibus fugit nam reprehenderit eligendi tempora animi, temporibus alias hic sint quidem fugiat ex magnam deleniti dolor! Dolores voluptates saepe blanditiis, numquam ab ex? Voluptate deleniti aliquam aspernatur et nobis corporis error cumque sed ipsum distinctio, harum odio, iste ab sequi quisquam eaque sit. Suscipit fugiat obcaecati repudiandae. Suscipit beatae iusto possimus voluptatibus, velit sapiente eaque recusandae quas officia dolorem eligendi numquam ullam architecto dolorum rem nobis nemo inventore magnam cum voluptates repellat hic iste provident. Esse consequuntur ea id qui minus doloremque dignissimos nisi alias sed ut quidem totam dolorem aspernatur ipsum soluta laborum quia non eaque, ullam veritatis ratione itaque? Magnam consequatur ducimus quasi rem tempora, aliquid dolor quis nobis fugit excepturi modi? Harum vero voluptatum libero recusandae doloribus accusantium ea voluptate ratione repudiandae inventore, quos aliquam dolor alias asperiores consequatur incidunt excepturi quo nihil. Incidunt sapiente aut natus, vel odio ipsa, qui amet earum, reprehenderit excepturi delectus. Odio iusto veniam dignissimos assumenda blanditiis corporis debitis, cupiditate praesentium placeat incidunt autem beatae asperiores odit animi eaque adipisci, ab illum ratione! Veniam quod dolor facilis id itaque consequatur? Recusandae doloremque aut odio iusto quam necessitatibus non mollitia tenetur eos, ab atque culpa. Exercitationem et ea magni corrupti delectus doloremque ab numquam. Magnam eaque delectus magni tempore voluptatum molestias non voluptates veritatis harum ab voluptas quod hic, explicabo odit exercitationem et perspiciatis quia cum necessitatibus tempora! Eaque quos impedit repellat dolores facilis corrupti, officiis doloribus animi pariatur et cumque nihil repellendus tenetur atque facere ea exercitationem consequuntur autem quia error excepturi qui iusto dolorum laboriosam. Est distinctio blanditiis quo consequatur ipsum error animi quibusdam cupiditate hic magni magnam eos repellendus corrupti, modi inventore praesentium accusantium? Nostrum ipsum incidunt error exercitationem odio quas veritatis cupiditate eius, corporis excepturi iure voluptate corrupti nemo nobis neque qui dicta soluta beatae! Expedita, modi culpa, ipsa vel nisi eius sapiente repellat mollitia ipsam omnis nobis vitae sequi? Vel impedit voluptate, ex nemo dicta non minus quisquam ipsam cumque eius enim magnam eveniet quae veritatis expedita doloribus!</p>
        </div>   
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>BRANDS</h1>
            <article> 
                <div style={{animationDelay:"0.3s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
                </div>
                <div style={{animationDelay:"0.9s"}}>
                <AiFillYoutube/>
                <p>youtube</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
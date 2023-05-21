export default (props) => {
    const items = JSON.parse(JSON.stringify(props.items))
    return (
        <section class="slick-slideshow ">  
        {items.map(item=>(
            <div class="slick-custom">
            <img src={item.img} class="img-fluid" alt=""/>
            <div class="slick-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-10">
                            <h1 class="slick-title">{item.title}</h1>

                            <p class="lead text-white mt-lg-3 mb-lg-5">{item.body}</p>

                            <a href="about.html" class="btn custom-btn">Contato</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        ))} 
        </section>
    )
}
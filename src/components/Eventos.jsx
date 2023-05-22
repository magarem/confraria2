export default (props) => {
    const sessiontitle = props.sessiontitle
    const mainid = props.mainid
   
    const items = JSON.parse(JSON.stringify(props.items))
    const index = items.findIndex(x=>x.id==mainid)
    console.log(mainid);
    return (
        <section class="products mt-5 _section-padding"> 
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="mb-5">{sessiontitle}</h2>
                    </div> 
                    <div class="row mb-5">
                        <div class="col-md-4 col-sm-12 bg-slate-400">
                            <div style="max-width: 400px">
                                <img src={items[index].imageSrc} class="img-fluid product-image" alt=""/>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12 bg-gray-950">
                            <h4>{items[index].title}</h4>
                            <p>{items[index].body}</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                    {items.map(item=>(
                        <div class="col-lg-4 col-12 mb-3">
                        <div class="product-thumb">
                            <a href={"/eventos?id=" + item.id}>
                                <img src={item.imageSrc} class="img-fluid product-image" alt=""/>
                            </a>

                            {/* <div class="product-top d-flex">
                                <span class="product-alert me-auto">New Arrival</span>

                                <a href="#" class="bi-heart-fill product-icon"></a>
                            </div> */}

                            <div class="product-info d-flex">
                                <div>
                                    <h5 class="product-title mb-0">
                                        <a href={"/eventos?id="+item.id} class="product-title-link">{item.title}</a>
                                    </h5>
                                    {/* <p class="product-p">{item.body}</p> */}
                                </div>

                                {/* <small class="product-price text-muted ms-auto">$25</small> */}
                            </div>
                        </div>
                        </div>
                    ))} 
                    </div>
                </div>
            </div>
        </section>
    )
}
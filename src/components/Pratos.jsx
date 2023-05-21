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
                    {/* <div class="row mb-5">
                        <div class="col-4 bg-slate-400">
                            <div style="max-width: 400px">
                                <img src={items[index].imageSrc} class="img-fluid product-image" alt=""/>
                            </div>
                        </div>
                        <div class="col-8 bg-gray-950">
                            <h2>{items[index].title}</h2>
                            {items[index].body}
                        </div>
                    </div> */}
                    <div class="container text-left">
                        {items.map(item=>(
                            <div class="row mb-5">
                                <div class="col-2 ">
                                    <div class="product-thumb">
                                        <img src={item.imageSrc} style="width: 200px;" class="img-fluid product-image" alt=""/>
                                    </div>
                                </div>
                                <div class="col-10">
                                        <div _class="product-info d-flex">
                                                <h5 class="product-title">
                                                    {/* <a href={"/eventos?id="+item.id} class="product-title-link"> */}
                                                        {item.title}
                                                    {/* </a> */}
                                                </h5>
                                                <p class="_product-p">{item.body}</p>
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
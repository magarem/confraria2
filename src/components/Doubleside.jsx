export default ({type, title, img, children}) => {
  return (
    <section class="_front-product mt-5">
    <div class="_container-fluid p-0">
        <div class="row _align-items-center">
            {type==1&&
                <>
                    <div class="col-lg-6 col-12 align-text-top" style="vertical-align: top;">
                        <img src={img} class="top img-fluid mb-4" alt=""/>
                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="px-5 py-5 py-lg-0">
                            
                            <h2 class="mb-4">{title}</h2>

                            <p class="lead mb-4">{children}</p>

                        
                        </div>
                    </div>
                </>
            }
            {type==2&&
                <>
                    <div class="col-lg-6 col-12">
                        <div class="px-5 py-5 py-lg-0">
                            
                            <h2 class="mb-4">{title}</h2>

                            <p class="lead mb-4">{children}</p>

                        
                        </div>
                    </div>
                    <div class="col-lg-6 col-12 ">
                        <img src={img} class="img-fluid" alt=""/>
                    </div>
                </>
            }
            {type==3&&
                <>
                    <div class="col-lg-6 col-12">
                        <div class="px-5 py-5 py-lg-0">
                            
                            <h2 class="mb-4">{title}</h2>

                            {/* <p class="lead mb-4">{children}</p> */}

                        
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        {children}
                    </div>
                </>
            }
        </div>
    </div>
</section>
  );
}
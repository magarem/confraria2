export default ({type, title, img, children}) => {
  return (
    <section class="_front-product ">
    <div class="_container-fluid _p-4 col-12">
        <div class="row _align-items-center">
            {type==1&&
                <>
                    <div class="col-lg-6 col-12 align-text-top" style="vertical-align: top;">
                        <img src={img} class="border-4 rounded-5 img-fluid my-4" alt=""/>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="_px-5 py-5 py-lg-0">
                            <h2 class="mb-1">{title}</h2>
                            <p class="lead mb-4 fs-5 text-dark fw-semibold">{children}</p>
                        </div>
                    </div>
                </>
            }
            {type==2&&
                <>
                    <div class="col-lg-6 col-12">
                        <div class="px-5 py-5 py-lg-0">
                            
                            <h2 class="mb-4">{title}</h2>

                            <p class="lead mb-4 fs-5">{children}</p>

                        
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

            {type==4&&
               
             <div class="row">
                <div class="col-6">
                    <img src={img} alt="Snow" class=" img-fluid mt-5 shadow-lg"/>
                </div>
                
                <div class="col-6 px-4">
                {/* <img src={img} alt="Snow" class=" img-fluid mt-4 shadow-lg"/> */}
                    <h2 class="mb-1">{title}</h2>
                    <p class="_lead mb-4 text-secondary">{children}</p>
                </div>
            </div>
            }
            {type==5&&
               
               <div class="row">
                  
                  <div class="col-6 _px-0">
                      <h3 class="mb-1">{title}</h3>
                      <p class="_lead mb-4 text-black">{children}</p>
                  </div>
                  <div class="col-6 ">
                      <img src={img} alt="Snow" class=" img-fluid mt-4"/>
                  </div>
              </div>
              }
            {type==6&&
               
               <div class="row">
                 
                  
                  <div class="col-12 px-4">
                  <div class="text-center m-4">
				<h2>{title}</h2>
			</div>
                      <p class="_lead mb-4">{children}</p>
                  </div>
                 
              </div>
              }
        </div>
    </div>
</section>
  );
}
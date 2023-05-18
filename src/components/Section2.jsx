export default (props) => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="mb-5">{props.title}</h2>
                </div>
                <div class="col-lg-10 col-12">
                    <div class="tab-content mt-2" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                            <div class="row">
                                <div class="col-lg-7 col-12">
                                    <img src={props.img} class="img-fluid" alt=""/>
                                </div>

                                <div class="col-lg-5 col-12">
                                    <div class="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                        <h4 class="mb-3">{props.subtitle}</h4>
                                        {props.children}
                                        {/* <div class="mt-2 mt-lg-auto">
                                            <a href="about.html" class="custom-link mb-2">
                                                Learn more about us
                                                <i class="bi-arrow-right ms-2"></i>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
<div class="container mt-5">
    <div class="row">

        @foreach($ProjectData as $ProjectData)
        <div class="col-md-3 p-1 text-center">
            <div class=" m-1 card">
                <div class="text-center">
                    <img class="w-100" src="{{$ProjectData->project_image}}" alt="Card image cap">
                    <h5 class="service-card-title mt-4">{{$ProjectData->project_name}}</h5>
                    <h6 class="service-card-subTitle p-0 m-0">{{$ProjectData->project_des }}</h6>
                    <button href="{{$ProjectData->project_link}}" target="_blank" class="normal-btn mt-2 mb-4 btn">বিস্তারিত</button>
                </div>
            </div>
        </div>
        @endforeach


    </div>
</div>


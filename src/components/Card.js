
function Card(props) {
    return (

        <div class="card">
            <div class="card-header header-elements-inline">
                <h5 class="card-title">{props.title}</h5>
            </div>

          <div class="card-body text-center">
    <div class="text-start-force text-justify">
                <p class="mb-3 ">
                    {props.body} </p>
            </div> </div>
        </div>

    )
}


export default Card
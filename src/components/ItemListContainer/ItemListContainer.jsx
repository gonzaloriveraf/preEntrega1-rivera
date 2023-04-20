const ItemListContainer = (props) => {


    return (
        <div className="container d-flex justify-content-center align-center ">
            <h1 className="h1 text-left text-gray">

                {props.greeting}

            </h1>
        </div>

    )
}

export default ItemListContainer


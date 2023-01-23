import './card.css'
export const Post = (values) => {
    return (
        <div>
            {values.values.length && values.values.map((val, index) => {
                return (
                    <section className="card">
                        <section className="card-header">
                            <div>
                                <div className="card-header_name">{val.name}</div>
                                <div className="card-header_place">{val.location}</div>
                            </div>
                            <span>
                                <img src={require("./image/icons8-ellipsis-30.png")} alt="err" />
                            </span>
                        </section>
                        <section className="main-img">
                            <img src={`http://localhost:8081/image/${val.Image_file}`} />
                        </section>
                        <section className="card-action">
                            <span >
                                <img className="heart" src={require("./image/heart.png")} alt="err" />
                            </span>
                            <span>
                                <img className="send" src={require("./image/send.png")} alt="err" />
                            </span>
                            <span className="date" >
                                {val.date}
                            </span>
                        </section>
                        <section className="Likes">
                            {val.likes} likes
                        </section>
                        <section className="description">
                            {val.description}
                        </section>
                    </section>

                )
            })}

        </div>
    )
}

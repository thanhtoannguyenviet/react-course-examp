export default function ResourceList({resources}){
    const renderResourcesList = () =>
        resources.map(resources =>{
            return (
                <div key={resources.id} className="column is-5 is-offset-1 ">
                    <div className="content is-medium">
                        <h2 className="subtitle is-5 has-text-grey">{resources.createAt}</h2>
                        <h1 className="title has-text-black is-3">{resources.title}</h1>
                        <p className="has-text-dark">
                            {resources.description}
                        </p>
                    </div>
                </div>
            )
        })


    return(
        <section className="hero ">
            <div className="hero-body">
                <div className="container">

                    <section className="section">
                        <div className="columns is-multiline is-variable is-8">
                            {
                                renderResourcesList()
                            }
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
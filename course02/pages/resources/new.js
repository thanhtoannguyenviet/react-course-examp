import Layout from "../../components/Layout";
import {useState} from "react";

const DEFAULT_DATA={
    title:"Learning",
    description:"Learning ",
    link:"https://localhost",
    priority:"2",
    timeToFinish:60,
}
const ResourceCreate = () => {
    const [form,setForm] = useState(DEFAULT_DATA)
    const submitForm = () => {
        alert(JSON.stringify(form))
    }
    const resetForm = () => setForm(DEFAULT_DATA)
    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value,
        })
    }
    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <div className="resource-form">
                            <h1 className="title">Add New Resource</h1>
                            <form action="">
                                <div className="field">
                                    <label htmlFor="">Title</label>
                                    <div className="control">
                                        <input name="title" value={form.title} type="text" className="input" placeholder="Learn Next Js and Sanity IO"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="">Description</label>
                                    <div className="control">
                                        <textarea
                                            name="description"
                                            className="textarea"
                                                  value={form.description}
                                                  placeholder="Learn these technologies beacause they're popular  and enable better SEO"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="">Link</label>
                                    <div className="control">
                                        <input
                                            name="link"
                                            value={form.link} type="text" className="input" placeholder="https://learnjs.nvtt"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="">Priority</label>
                                    <div className="control">
                                       <div className="select">
                                           <select name="" id="" name="priority" value={form.priority}>
                                               <option>1</option>
                                               <option>2</option>
                                               <option>3</option>
                                           </select>
                                       </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="">Time to finish</label>
                                    <div className="control">
                                        <input name="timeToFinish" value={form.timeToFinish} type="text" className="input" placeholder="60 (time is in minutes)"/>
                                        <p className="help">Time is in minutes</p>
                                    </div>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button
                                            type="button"
                                            onClick={submitForm}
                                            className="button is-link">Submit</button>
                                    </div>
                                    <div className="control">
                                        <button
                                            type="button"
                                            className="button is-link is-light">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default ResourceCreate
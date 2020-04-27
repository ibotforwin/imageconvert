import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

    state = {
        title: '',
        output_type: '',
        image: null
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('title', this.state.title);
        form_data.append('output_type', this.state.output_type);
        let url = 'http://localhost:8000/api/posts/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input type="text" placeholder='Title' id='title' value={this.state.title}
                               onChange={this.handleChange} required/>
                    </p>
                    <p>
                        <input type="text" placeholder='Output' id='output_type' value={this.state.output_type}
                               onChange={this.handleChange} required/>
                    </p>
                    <p>
                        <input type="file"
                               id="image"
                               accept="image/png, image/jpg image/bmp image/gif" onChange={this.handleImageChange}
                               required/>
                    </p>
                    <input type="submit"/>
                </form>

                <div>

                    Converted File: <a
                    href={process.env.PUBLIC_URL + "/converted_images/" + this.state.title + '.' + this.state.output_type} download>
                    Click to download
                </a>


                </div>

            </div>
        );
    }
}

export default App;
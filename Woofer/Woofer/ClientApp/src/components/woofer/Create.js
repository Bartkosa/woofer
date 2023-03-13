import React from 'react';
import './Modal.css';
import axios from 'axios';


const Create = ({changeGallery, closeModal, dogAdder, photoName }) => {
    const [dogInfos, setDogInfos] = React.useState({
        name: "",
        age: "",
        description: "",
        gender: true,
        photoUrl: photoName,
        breed:""
    });

    const handleOnSubmit = (e) => {
        e.preventDefault()

        closeModal();

        const data = {
            name: dogInfos.name,
            age: dogInfos.age,
            description: dogInfos.description,
            gender: dogInfos.gender,
            photoUrl: dogInfos.photoUrl,
            breed: dogInfos.breed
        }

        axios({
            method: 'post',
            url: 'doginfo/save',
            data: data,
            headers: {'Content-Type': 'application/json'}
        })
            .then((res) => {
                alert('Record added successfully!!');
        }).catch((error) => {
            console.log(error)
        });

        //fetch('doginfo', {
        //    method: 'POST',
        //    headers: {
        //        'Accept': 'application/json',
        //        'Content-Type': 'application/json'
        //    },
        //    body: JSON.stringify({
        //        data
        //    })
        //}).then(res => res.json())
        //    .then(data => console.log(data))
        //    .catch(err => console.log(err));
    }

    const handleChange = (event) => {
        if (event.target.name == "gender") {
            if (event.target.value=="male")
                setDogInfos({ ...dogInfos, [event.target.name]: true });
            else
                setDogInfos({ ...dogInfos, [event.target.name]: false });
        }
        else 
            setDogInfos({ ...dogInfos, [event.target.name]: event.target.value });
    }
   
    return (
        <form onSubmit={handleOnSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={dogInfos.name} onChange={handleChange} />

            <label>Age</label>
            <input type="text" name="age" value={dogInfos.age} onChange={handleChange} />
            <label>Description</label>
            <input type="text" name="description" value={dogInfos.description} onChange={handleChange} />
            
            <label>Gender</label>
            <select id="gender"  onChange={handleChange} name="gender">
                <option>male</option>
                <option>female</option>
                </select>
            <label>Photo Url</label>
            <input type="text" name="photoUrl" value={dogInfos.photoUrl} onChange={handleChange} />
            <label>Breed</label>
            <input type="text" name="breed" value={dogInfos.breed} onChange={handleChange} />
            <div className="footer">
                <button onClick={() => closeModal()} id="cancelBtn"> Cancel </button>
                <button type="submit"> Submit </button>
            </div>
        </form>
    );
}
export default Create;
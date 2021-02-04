import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FakeComponent = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getApi()
    }, [])

   const getApi=()=> {
        axios.get('http://www.omdbapi.com/?s=avenger&apikey=e01f82b8')
        .then(function (response) {
            // handle success
            setUsers(response.data.Search)
            console.log(response.data.Search);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

   
    return (
        <div>
            {
            users.map(post=> {
                return (
                   <div className="card" style={{width: "18rem", marginLeft: "3rem"}}>
                    <img className="card-img-top" src={post.Poster} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{post.Title}</h5>
                        <p className="card-text">{post.Year}</p>
                    </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default FakeComponent

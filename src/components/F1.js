import Axios from "axios";
import {useEffect,useState} from"react";
export function F1(){
    // This is a http req  so we need to place inside a lifecycke method as we are working with function component so there is no
    // lifecycle method Instead we have concept of HOoks which helps to handle the https req
    //usedEffect() is used to handle the side effects 

    const[data,setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200){                 //200 refer to okay msg such 404 eror
                
                //console.log(res.data);   WE will instead setdatat into the used state[]
                setData(res.data);
            }
            else{
                Promise.reject();
            }     
            })
        .catch((err)=>alert(err)); 
    },[])
    const ListName =()=>{
        return data.map((val)=>{             //we are travesing the whole list and then accerssing the names
            return<h1>{val.name}</h1>
        })
    }
    return(
        <div>
        <h1>Hello</h1>
        {ListName()}
        </div>
    )
}
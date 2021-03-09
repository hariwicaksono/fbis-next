import Axios from 'axios'

const RootPath = "http://localhost/fbis-next/api/"
// Authorization
// key = amikom321
// Gunakan https://www.base64decode.org untuk melakukan encode key diatas menjadi format base64
var key = new Buffer.from('YW1pa29tMzIx', 'base64')
const ApiKey = key.toString();
const config = { headers: { 'X-API-KEY': `${ApiKey}` } };

const GET = (path) => {
    const promise = new Promise((resolve,reject) => {
        Axios.get(RootPath+path, config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const GET_ID = (path,id) => {
    const promise = new Promise((resolve,reject) => {
        Axios.get(RootPath+path+id, config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const GET_BY_ID = (path,data) =>{
    const promise = new Promise((resolve,reject)=>{
         Axios.get(RootPath+path+data, config).then(res=>{
             resolve(res.data)
         },err=>{
            console.log(err.response); 
            return err.response;
         })
    })
    return promise
 }

const POST = (path,data) => {
    const promise = new Promise((resolve,reject) => {
        Axios.post(RootPath+path,data, config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const PUT = (path,data) => {
    const promise = new Promise((resolve,reject) => {
        Axios.put(RootPath+path,data, config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const DELETE = (path,data) => {
    const promise = new Promise((resolve,reject) => {
        Axios.delete(RootPath+path+data, config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const SEARCH = (path,data) => {
    const promise = new Promise((resolve,reject) => {
        Axios.get(RootPath+path+data, config).then(res => {
            resolve(res.data)
        }).catch(er => {
            reject(er)
        })
    })
    return promise
}

const POST_FOTO = (path,data,name) => {
    const promise = new Promise((resolve,reject)=>{
        const formdata = new FormData()
        formdata.append('foto',data,name)
        Axios.post(RootPath+path,formdata, config).then(res=>{
           resolve(res.data.status)
       },(err)=>{
           reject(err)
       })
    })
    return promise
}

const PostLogin = (data) => POST('LoginController',data);
const GetBlog = () => GET('BlogController');
const GetBlogId = (data) => GET_ID('BlogController?id=',data)
const PostBlog = (data) => POST('BlogController',data);
const PutBlog = (data) => PUT('BlogController',data);
const DeleteBlog = (id) => DELETE('BlogController/index_delete?id=',id);
const GetSlideshow = () => GET('Slideshow');
const GetSlideshowId = (data) => GET_ID('Slideshow?id=',data)

const API = {
    GetSlideshow,
    GetSlideshowId
}

export default API
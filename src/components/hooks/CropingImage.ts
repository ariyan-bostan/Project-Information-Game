const cropping=(url:string)=>{

    if(url===null)
        return;
    let target="media/";
    let index1=url.indexOf(target)+target.length;
    let newURL=url.slice(0,index1)+"crop/600/400/"+url.slice(index1);
    return newURL;

}
export default cropping;
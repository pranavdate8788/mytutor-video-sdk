export default function getParams(){
    const p = document.location.search.substring(1);
    if (p.trim()) {
      const pairs = p.split('&');
      const params = {}
      for(let a of pairs){
        const [k,v]= a.split("=");
        params[k]=v
      }
      return params
    }
} 
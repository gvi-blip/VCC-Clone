import "./styles/loadingSkeleton.css"
function LoadingSkeleton() {
  return (
    <>
    <div className="container">
    <div className="skeleton-box adv-l " style={{height: 145,marginBottom:0}}></div>
    </div>
    <section className="top-news">
    <div className="container">
        <div className="text-content">
            <p className="skeleton-box" style={{width:" 50%", height:22}}></p>
            <h1 className="skeleton-box" style={{width:"100%", height:35}}>{" "}</h1>
            <h1 className="skeleton-box" style={{width:"70%", height:35, marginTop: 0}}>{" "}</h1>
            <p className="skeleton-box" style={{width:"100%", height:28, marginTop:0}}></p>
            <p className="skeleton-box" style={{width:"70%", height:28}}></p>
            <p style={{width:"60%", height:15, display:"flex", alignItems: "center"}}><span className="skeleton-box" style={{width:"30%",height:"100%"}}></span><span className="skeleton-box" style={{width:10, height:10, borderRadius:"50%"}}></span><span className="skeleton-box"style={{width:"45%",height:'100%'}}></span></p>
        </div>
        <div className="image skeleton-box" style={{height: 400, borderRadius: 15}}></div>
    </div>
    </section>
    </>
  )
}

export default LoadingSkeleton
let CurrentTime = ()=>{

    let time = new Date();


    return <p className="lead text-center pb-4">This is the Current time: {time.toLocaleDateString()} {" - "}{ time.toLocaleTimeString()}</p>
};
export default CurrentTime;
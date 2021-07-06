import React,{useState}  from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";

const About =( )=> {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Header/>
            <div className = "container col-md-5">
                <h1>สวัสดีครับ</h1>
                <p className ="title text-justify mt-4 mb-4">
                    ขายเหมือนแจกฟรี
                </p>
                <h4 className = "text-success">จาก Dota2 Shop </h4>
            </div>
            <Footer company = "Nex" email="Nexss@gmail.com"/>
            
        
  
        </div>
        
    )
}
export default About;
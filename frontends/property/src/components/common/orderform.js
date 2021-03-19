

import "../../styles/orderform.scss"



const Orderform = () => {
    
    return (
        <section className="bookform">
            <ul>
                <li><div className="bookform-checkin">CHECK-IN</div>
                5/Apr' 21
                </li>
                <li><div className="bookform-checkout">CHECK-OUT</div>
                6/Apr' 21
                
                </li>
                <li><div className="bookform-checkaudlt">ADULTS</div>
                    <select id="Adults">
                    
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    </select>
                </li>
                <li><div className="bookform-checkchildren">CHILD</div>
                    <select id="Adults">
                    
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    </select>
                </li>
               <button className="bookform_button">CHECK AVAILABILITY</button>
            </ul>
        </section>
    )

}

export default Orderform
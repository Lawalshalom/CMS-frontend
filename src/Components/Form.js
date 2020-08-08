import React from "react";

const Form = () => {

    const originStates = ["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River",
    "Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos",
    "Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","FCT"]
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e)
    }
    return (
    <div className="form-input">
    <h4 data-aos="fade-right">Please, kindly ensure the details provided are accurate and correct</h4>
    <form className="row">
        <div className="name-input col-12 col-sm-6 col-xm-6">
            <section data-aos="fade-right">
            <label>Family Name</label>
            <input type="name" name="name" required placeholder="Enter Family Name"/>
            </section>
        </div>
        <div className="family col-12 col-sm-6 col-xm-6">
            <section data-aos="fade-left">
            <label>Number in Family</label>
            <input type="number" required min="1" placeholder="1"/>
            </section>
        </div>
        <div className="language col-12 col-sm-6 col-xm-6">
          <section data-aos="fade-right">
            <label>Native Language</label>
            <input type="text" required minLength="3" placeholder="Enter Native Language"/>
            </section>
        </div>
        <div className="residence col-12 col-sm-6 col-xm-6">
            <section data-aos="fade-left">
            <label>State of residence</label>
            <select name="state" id="state-select" required>
                <option value="">--Please choose your state--</option>
                {originStates.map(state => { return (
                    <option value="Abia" key={originStates.indexOf(state)}>
                    {state}</option>)}
                )}
            </select>
            </section>
        </div>
        <div className="submit-btn">
            <button data-aos="fade-up" type="submit" onSubmit={handleSubmit}>Submit</button>
        </div>
    </form>
</div>
    )
}
export default Form;
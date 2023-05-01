import "./Contact.css"

export default function Contacts() {

    return (
        <section id="contact">
        <div className="contact-container">
        <div>
            <h2>Contact ME</h2>
            <form>
             <label htmlFor="Name">
                Name
             </label>
             <input type="text"
id="name"
name="name"
placeholder="Enter name here " 
/>

             <label htmlFor="email">
                Email address
             </label>
    <input type="email"
id="email"
name="email"
placeholder="Enter email address here " 
/>
     
<label htmlFor="Message">
                Message
             </label>
         <textarea/>

         <div style="text-decoration:none; overflow:hidden;max-width:100%;width:500px;height:500px;"><div id="canvas-for-googlemap" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Manchester,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="from-embedmap-code" rel="nofollow" href="https://kbj9qpmy.com/bp" id="get-data-for-map">Internet Provider</a><style>#canvas-for-googlemap img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div>
            </form>
        </div>
        </div>
    </section>
    )
}
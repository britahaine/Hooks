function AddContact() {

    return(
        <>
        <h2>Add Contact</h2>


         <form>
            <div>
            <label>Name</label>
            <input type="text" name='name' placeholder ="Name" />
            </div>
            <div>
            <label>Email</label>
            <input type="text" name='Email' placeholder ="Email" />
             </div>
          <button>sumit</button> 
         </form>
         </>
    );
}
export default AddContact
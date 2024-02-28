function searchPage() {
    return ( 
        <>
        <h4>Search Page</h4>
        <input type="text" placeholder='Enter keyword' />
        <button onClick={(e) =>  console.log('clicked')}>Submit</button>
        </>
     );
}

export default searchPage;
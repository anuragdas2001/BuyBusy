
export const SearchBox = () => {
  return (
    <>
      <form class="d-flex" role="search">
        <input
          class="form-control ms-3 me-3 "
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    
    </>
  );
};
